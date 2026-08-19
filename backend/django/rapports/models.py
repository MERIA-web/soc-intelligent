from django.db import models
from incidents.models import Incident
from utilisateurs.models import Utilisateur


class Rapport(models.Model):

    FORMATS = [
        ('PDF', 'PDF'),
        ('EXCEL', 'Excel'),
        ('HTML', 'HTML'),
    ]

    format_rapport = models.CharField(max_length=10, choices=FORMATS)
    date_generation = models.DateTimeField(auto_now_add=True)
    contenu = models.TextField(blank=True)

    # Lien vers Incident
    incident = models.ForeignKey(
        Incident,
        on_delete=models.CASCADE,
        related_name='rapports'
    )

    # Lien vers l'auteur
    auteur = models.ForeignKey(
        Utilisateur,
        on_delete=models.SET_NULL,
        null=True,
        related_name='rapports'
    )

    def __str__(self):
        return f"Rapport {self.format_rapport} - {self.date_generation}"
