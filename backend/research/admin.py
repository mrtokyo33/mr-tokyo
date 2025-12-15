from django.contrib import admin
from django import forms
from .models import Article

class ArticleAdminForm(forms.ModelForm):
    class Meta:
        model = Article
        fields = '__all__'
        widgets = {
            'tex_file': forms.FileInput(attrs={
                'accept': '.tex,application/x-tex,text/x-tex'
            })
        }

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    form = ArticleAdminForm
    
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