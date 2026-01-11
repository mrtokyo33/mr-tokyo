from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
)
from .models import Article
from .serializers import (
    ArticleListSerializer,
    ArticleDetailSerializer,
    ArticleCreateSerializer,
)


class ArticleListView(ListAPIView):
    serializer_class = ArticleListSerializer

    def get_queryset(self):
        return Article.objects.filter(status=Article.Status.PUBLISHED)


class ArticleDetailView(RetrieveAPIView):
    serializer_class = ArticleDetailSerializer
    lookup_field = "slug"

    def get_queryset(self):
        return Article.objects.filter(status=Article.Status.PUBLISHED)


class ArticleCreateView(CreateAPIView):
    serializer_class = ArticleCreateSerializer
    queryset = Article.objects.all()
