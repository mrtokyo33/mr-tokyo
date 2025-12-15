from rest_framework import viewsets
from .models import Article
from .serializers import ArticleSerializer
from .permissions import IsAdminOrReadOnly

class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = ArticleSerializer
    permission_classes = [IsAdminOrReadOnly]
    lookup_field = 'slug'