from rest_framework import serializers
from django.utils.translation import get_language
from .models import Video, Category

# Вспомогательная функция для перевода
def get_translation(obj, field, lang):
    val = getattr(obj, f"{field}_{lang}", None)
    if val:
        return val
    return getattr(obj, f"{field}_en", getattr(obj, field, ''))

class CategorySerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField()

    class Meta:
        model = Category
        fields = ['id', 'name']

    def get_name(self, obj):
        lang = get_language()
        return get_translation(obj, 'name', lang)

class VideoSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    category_id = serializers.PrimaryKeyRelatedField(queryset=Category.objects.all(), write_only=True, source='category')
    title = serializers.SerializerMethodField()
    description = serializers.SerializerMethodField()

    class Meta:
        model = Video
        fields = ['id', 'title', 'description', 'video_file', 'poster_image', 'category', 'category_id']

    def get_title(self, obj):
        lang = get_language()
        return get_translation(obj, 'title', lang)

    def get_description(self, obj):
        lang = get_language()
        return get_translation(obj, 'description', lang)