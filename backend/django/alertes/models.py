from django.db import models
from actifs.models import Actif


class Alerte(models.Model):

    NIVEAUX = [
        ('BAS', 'Bas'),
        ('MOYEN', 'Moyen'),
        ('HAUT', 'Haut'),
        ('CRITIQUE', 'Critique'),
    ]

    date = models.DateTimeField(auto_now_add=True)
    niveau = models.CharField(max_length=10, choices=NIVEAUX)
    description = models.TextField()
    source = models.CharField(max_length=50, default='Suricata')
    est_lue = models.BooleanField(default=False)

    # Lien vers Actif (1 Actif peut générer plusieurs Alertes)
    actif = models.ForeignKey(
        Actif,
        on_delete=models.CASCADE,
        related_name='alertes'
    )

    def __str__(self):
        return f"{self.niveau} - {self.actif.nom} - {self.date}"
