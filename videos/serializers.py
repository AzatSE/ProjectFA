from rest_framework import serializers
from .models import Video
from .models import Category


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class VideoSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), write_only=True, source='category')

    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'video_file', 'poster_image', 'category', 'category_id']