from rest_framework import viewsets

from .models import Author
from .serializers import AuthorSerializer

class AuthorViewSet(viewsets.ModelViewSet):

    ''' Listagem de Autores '''

    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
