from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # JWT Authentication
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
    # APIs par app
    path('api/utilisateurs/', include('utilisateurs.urls')),
    path('api/actifs/', include('actifs.urls')),
    path('api/vulnerabilites/', include('vulnerabilites.urls')),
    path('api/alertes/', include('alertes.urls')),
    path('api/incidents/', include('incidents.urls')),
    path('api/recommandations/', include('recommandations.urls')),
    path('api/rapports/', include('rapports.urls')),
    path('api/journal/', include('journal.urls')),
]
