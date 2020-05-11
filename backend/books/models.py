from django.db import models

from authors.models import Author

class Category(models.Model):
  name = models.CharField(max_length=30)

  def __str__(self):
    return self.name

class Book(models.Model):
  name = models.CharField(max_length=100)
  author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name='author')
  category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='category')

  created_at = models.DateTimeField(auto_now_add=True)
  update_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name