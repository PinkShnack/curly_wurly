from django.shortcuts import render
from rest_framework import viewsets

from .serializers import BlogPostSerializer
from .models import BlogPosts



# posts = [
#     {
#         'author': 'Eoghan',
#         'title': 'Blog Post 1',
#         'content': 'Read this',
#         'date_posted': 'September 18, 2020'
#     },
#     {
#         'author': 'Claude',
#         'title': 'Blog Post 2',
#         'content': 'Read this first though',
#         'date_posted': 'September 19, 2020'
#     }
# ]

# def home(request):
#     context = {
#         'posts': posts
#     }
#     return render(request, 'blog_templates/home.html', context)


# def about(request):
#     context = {'title': 'About'}
#     return render(request, 'blog_templates/about.html', context)


class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPosts.objects.all().order_by('author')
    serializer_class = BlogPostSerializer