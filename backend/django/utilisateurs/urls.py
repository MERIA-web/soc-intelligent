from django.urls import path

urlpatterns = [
    # Les views seront ajoutées par Prissy
    # path('', AlerteListCreate.as_view(), name='alerte-list-create'),
    # path('<int:pk>/', AlerteDetail.as_view(), name='alerte-detail'),
]
from .views import (
    UtilisateurListCreate,
    UtilisateurDetail,
)

urlpatterns = [
    path('', UtilisateurListCreate.as_view(), name='utilisateur-list-create'),
    path('<int:pk>/', UtilisateurDetail.as_view(), name='utilisateur-detail'),
]
