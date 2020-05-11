from django.db import models

class Author(models.Model):
  name = models.CharField(max_length=50)

  created_at = models.DateTimeField(auto_now_add=True)
  update_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.name

  class Meta:
    ordering = ['created_at']
