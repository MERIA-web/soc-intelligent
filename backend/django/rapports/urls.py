from django.urls import path
from .views import (
    RapportListCreate,
    RapportDetail,
)

urlpatterns = [
    path('', RapportListCreate.as_view(), name='rapport-list-create'),
    path('<int:pk>/', RapportDetail.as_view(), name='rapport-detail'),
]
