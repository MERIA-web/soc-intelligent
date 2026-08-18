from django.urls import path
from .views import (
    VulnerabiliteListCreate,
    VulnerabiliteDetail,
)

urlpatterns = [
    path('', VulnerabiliteListCreate.as_view(), name='vulnerabilite-list-create'),
    path('<int:pk>/', VulnerabiliteDetail.as_view(), name='vulnerabilite-detail'),
]

