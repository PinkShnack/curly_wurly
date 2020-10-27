from django.urls import include, path
from rest_framework import routers
from . import views

# urlpatterns = [
#     path('', views.home, name='blog-home'),
#     path('about/', views.about, name='blog-about'),
# ]


router = routers.DefaultRouter()
router.register(r'BlogPost', views.BlogPostViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]