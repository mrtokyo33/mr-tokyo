from rest_framework import serializers
from .models import Article


class ArticleListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            "title",
            "slug",
            "created_at",
            "updated_at",
        ]


class ArticleDetailSerializer(serializers.ModelSerializer):
    tex_content = serializers.ReadOnlyField()

    class Meta:
        model = Article
        fields = [
            "title",
            "slug",
            "category",
            "source_file",
            "tex_content",
            "created_at",
            "updated_at",
        ]


class ArticleCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = [
            "title",
            "category",
            "source_file",
        ]
