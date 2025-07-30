from rest_framework.routers import DefaultRouter
from .views import VideoViewSet, CategoryViewSet

router = DefaultRouter()
router.register(r'videos', VideoViewSet, basename='video')
router.register(r'categories', CategoryViewSet) 

urlpatterns = router.urls