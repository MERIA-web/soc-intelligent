from django.db import models
from incidents.models import Incident


class Recommandation(models.Model):

    PRIORITES = [
        ('BASSE', 'Basse'),
        ('MOYENNE', 'Moyenne'),
        ('HAUTE', 'Haute'),
        ('URGENTE', 'Urgente'),
    ]

    STATUTS = [
        ('EN_ATTENTE', 'En attente'),
        ('APPLIQUEE', 'Appliquée'),
        ('IGNOREE', 'Ignorée'),
    ]

    action = models.TextField()
    priorite = models.CharField(max_length=10, choices=PRIORITES)
    statut = models.CharField(max_length=15, choices=STATUTS, default='EN_ATTENTE')
    score_risque = models.FloatField(default=0.0)
    date_creation = models.DateTimeField(auto_now_add=True)

    incident = models.ForeignKey(
        Incident,
        on_delete=models.CASCADE,
        related_name='recommandations'
    )

    def __str__(self):
        return f"{self.action[:50]} - {self.statut}"
