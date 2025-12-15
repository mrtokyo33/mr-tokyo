from django.contrib import admin
from .models import Article

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'slug', 'created_at')
    
    readonly_fields = ('html_content', 'metadata', 'slug')

    fieldsets = (
        ('Upload', {
            'fields': ('author', 'tex_file')
        }),
        ('Processado Automaticamente (Não mexa)', {
            'fields': ('title', 'slug', 'html_content', 'metadata'),
            'classes': ('collapse',),
        }),
    )