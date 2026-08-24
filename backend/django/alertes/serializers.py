from rest_framework import serializers
from .models import Alerte 
from actifs.models import Actif

class AlerteSerializer(serializers.ModelSerializer):
    actif_nom = serializers.CharField(source='actif.nom', read_only=True)

    class Meta:
        model = Alerte
        fields = ['id', 'date' , 'niveau' , 'description' , 'source' ,'est_lue' , 'actif' , 'actif_nom']