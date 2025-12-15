from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    author_name = serializers.CharField(source='author.username', read_only=True)
    
    class Meta:
        model = Article
        fields = [
            'id', 
            'title', 
            'slug', 
            'author_name',
            'created_at', 
            'html_content',
            'metadata'
        ]
        read_only_fields = ['html_content', 'metadata', 'slug', 'author_name']