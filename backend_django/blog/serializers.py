from rest_framework import serializers
from .models import BlogPosts

class BlogPostSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = BlogPosts
        fields = ('author', 'title', 'content', 'datePosted')