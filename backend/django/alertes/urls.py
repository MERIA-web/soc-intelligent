from rest_framework.routers import DefaultRouter
from .views import AlerteViewSet

router = DefaultRouter()
router .register(r'alertes', AlerteViewSet)

urlpatterns = router.urls