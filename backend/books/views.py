# from rest_framework.permissions import AllowAny
from rest_framework import viewsets

from .models import Book, Category
from .serializers import BookSerializer, CategorySerializer

class BookViewSet(viewsets.ModelViewSet):
  queryset = Book.objects.all()
  serializer_class = BookSerializer
#   permission_classes = ['']

class CategoryViewSet(viewsets.ModelViewSet):

  ''' Listagem das Categorias '''

  queryset = Category.objects.all()
  serializer_class = CategorySerializer