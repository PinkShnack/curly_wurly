from django.db import models

# Create your models here.

class BlogPosts(models.Model):
    author = models.CharField(max_length=60)
    title = models.CharField(max_length=60)
    content = models.CharField(max_length=60)
    datePosted = models.CharField(max_length=60)
    def __str__(self):
        return self.author