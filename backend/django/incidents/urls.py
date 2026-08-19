from django.urls import path
from .views import (
    IncidentListCreate,
    IncidentDetail,
)

urlpatterns = [
    path('', IncidentListCreate.as_view(), name='incident-list-create'),
    path('<int:pk>/', IncidentDetail.as_view(), name='incident-detail'),
]
