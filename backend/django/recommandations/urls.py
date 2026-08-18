from django.urls import path
from .views import (
    RecommandationListCreate,
    RecommandationDetail,
)

urlpatterns = [
    path('', RecommandationListCreate.as_view(), name='recommandation-list-create'),
    path('<int:pk>/', RecommandationDetail.as_view(), name='recommandation-detail'),
]

