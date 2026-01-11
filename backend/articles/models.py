from django.db import models
from django.utils.text import slugify
from django.core.exceptions import ValidationError
from django.core.validators import FileExtensionValidator

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
                "name": "Already exists an Category with this name"
            })

    def save(self, *args, **kwargs):
        self.full_clean()
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
    
    source_file = models.FileField(upload_to="articles/tex/", blank=True, null=True, validators=[FileExtensionValidator(allowed_extensions=["tex"])])

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
        slug = slugify(self.title)

        qs = Article.objects.filter(slug=slug)
        if self.pk:
            qs = qs.exclude(pk=self.pk)

        if qs.exists():
            raise ValidationError({
                "title": "Already exists an Article with this title"
            })

    def save(self, *args, **kwargs):
        self.full_clean()
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    @property
    def tex_content(self):
        if not self.source_file:
            return ""
        
        self.source_file.open("r")
        content = self.source_file.read()
        self.source_file.close()
        return content
        
