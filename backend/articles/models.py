from django.db import models
from django.utils.text import slugify
from django.core.exceptions import ValidationError

MAX_CATEGORY_NAME_SIZE = 70
MAX_ARTICLE_TITLE_SIZE = 150

class Category(models.Model):
    name = models.CharField(max_length=MAX_CATEGORY_NAME_SIZE)
    slug = models.SlugField(unique=True, blank=True)

    def __str__(self):
        return self.name
    
    def clean(self):
        slug = slugify(self.name)

        qs = Category.objects.filter(slug=slug)
        if self.pk:
            qs = qs.exclude(pk=self.pk)

        if qs.exists():
            raise ValidationError({
                "title": "Already exists an Category with this name"
            })

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    
class Article(models.Model):
    class Status(models.TextChoices):
        DRAFT = "draft", "Draft"
        PUBLISHED = "published", "Published"

    title = models.CharField(max_length=MAX_ARTICLE_TITLE_SIZE)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name="articles")
    status = models.CharField(max_length=10, choices=Status.choices, default=Status.DRAFT)
    slug = models.SlugField(unique=True, blank=True)
    
    content = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
    def publish(self):
        self.status = self.Status.PUBLISHED
        self.save(update_fields=["status"])

    def unpublish(self):
        self.status = self.Status.DRAFT
        self.save(update_fields=["status"])

    def is_public(self):
        return self.status == self.Status.PUBLISHED
    
    def clean(self):
        if self.status == self.Status.PUBLISHED and not self.content:
            raise ValidationError("Article cannot be empty")
        
        slug = slugify(self.title)

        qs = Article.objects.filter(slug=slug)
        if self.pk:
            qs = qs.exclude(pk=self.pk)

        if qs.exists():
            raise ValidationError({
                "title": "Already exists an Article with this title"
            })

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)
        
