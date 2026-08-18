from django.urls import path

urlpatterns = [
    # Les views seront ajoutées par Prissy
    # path('', AlerteListCreate.as_view(), name='alerte-list-create'),
    # path('<int:pk>/', AlerteDetail.as_view(), name='alerte-detail'),
]
from .views import (
    AlerteListCreate,
    AlerteDetail,
)

urlpatterns = [
    path('', AlerteListCreate.as_view(), name='alerte-list-create'),
    path('<int:pk>/', AlerteDetail.as_view(), name='alerte-detail'),
]
