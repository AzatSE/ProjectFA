from django.shortcuts import render
from rest_framework import viewsets
from .models import Video, Category
from .serializers import VideoSerializer, CategorySerializer

class VideoViewSet(viewsets.ModelViewSet):
    serializer_class = VideoSerializer

    def get_queryset(self):
        queryset = Video.objects.all().order_by('-uploaded_at')
        category_id = self.request.query_params.get('category')
        if category_id:
            queryset = queryset.filter(category__id=category_id)
        return queryset
    

class CategoryViewSet(viewsets.ReadOnlyModelViewSet):  # только GET
    queryset = Category.objects.all()
    serializer_class = CategorySerializer