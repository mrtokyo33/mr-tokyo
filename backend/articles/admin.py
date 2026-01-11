from django.contrib import admin
from .models import Category, Article

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ("title", "status", "created_at")
    list_filter = ("status", "category")
    search_fields = ("title",)
    prepopulated_fields = {"slug": ("title",)}

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}