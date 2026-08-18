from django.urls import path
from .views import (
    ActifListCreate,
    ActifDetail,
)

urlpatterns = [
    path('', ActifListCreate.as_view(), name='actif-list-create'),
    path('<int:pk>/', ActifDetail.as_view(), name='actif-detail'),
]
