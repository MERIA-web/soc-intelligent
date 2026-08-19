from django.db import models
from actifs.models import Actif


class Vulnerabilite(models.Model):

    NIVEAUX = [
        ('FAIBLE', 'Faible'),
        ('MOYEN', 'Moyen'),
        ('ELEVE', 'Elevé'),
        ('CRITIQUE', 'Critique'),
    ]

    cve = models.CharField(max_length=30, unique=True)
    description = models.TextField()
    score_cvss = models.FloatField()
    niveau = models.CharField(max_length=10, choices=NIVEAUX)
    correctif = models.TextField(blank=True)
    date_detection = models.DateTimeField(auto_now_add=True)

    # Lien vers Actif (1 Actif peut avoir plusieurs Vulnerabilites)
    actif = models.ForeignKey(
        Actif,
        on_delete=models.CASCADE,
        related_name='vulnerabilites'
    )

    def __str__(self):
        return f"{self.cve} - {self.actif.nom}"
