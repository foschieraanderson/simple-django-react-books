from rest_framework import serializers

from .models import Book, Category

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'

class BookSerializer(serializers.ModelSerializer):

    # author = serializers.StringRelatedField(source='author.name')
    # category = serializers.StringRelatedField(source='category.name')

    class Meta:
        model = Book
        fields = '__all__'
