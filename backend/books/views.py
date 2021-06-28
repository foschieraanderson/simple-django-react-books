from rest_framework import viewsets

from .models import Book, Category
from .serializers import BookSerializer, CategorySerializer

class BookViewSet(viewsets.ModelViewSet):

    ''' Listagem de Livros '''

    queryset = Book.objects.all().order_by('-created_at')
    serializer_class = BookSerializer

class CategoryViewSet(viewsets.ModelViewSet):

    ''' Listagem das Categorias '''

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
