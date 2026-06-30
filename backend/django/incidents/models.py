from django.db import models
from alertes.models import Alerte
from utilisateurs.models import Utilisateur


class Incident(models.Model):

    STATUTS = [
        ('OUVERT', 'Ouvert'),
        ('EN_COURS', 'En cours'),
        ('FERME', 'Fermé'),
        ('FAUX_POSITIF', 'Faux positif'),
    ]

    PRIORITES = [
        ('BASSE', 'Basse'),
        ('MOYENNE', 'Moyenne'),
        ('HAUTE', 'Haute'),
        ('URGENTE', 'Urgente'),
    ]

    titre = models.CharField(max_length=200)
    statut = models.CharField(max_length=15, choices=STATUTS, default='OUVERT')
    priorite = models.CharField(max_length=10, choices=PRIORITES)
    date = models.DateTimeField(auto_now_add=True)

    # Lien vers Alerte (1 Alerte devient 1 Incident)
    alerte = models.ForeignKey(
        Alerte,
        on_delete=models.CASCADE,
        related_name='incidents'
    )

    # Lien vers Utilisateur (l'analyste assigné)
    analyste = models.ForeignKey(
        Utilisateur,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='incidents'
    )

    def __str__(self):
        return f"{self.titre} - {self.statut}"
