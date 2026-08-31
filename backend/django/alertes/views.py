from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .models import Alerte 
from .serializers import AlerteSerializer

class AlerteViewSet(viewsets.ModelViewSet):
    queryset = Alerte.objects.all()
    serializer_class = AlerteSerializer