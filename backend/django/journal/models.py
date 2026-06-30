from django.db import models
from utilisateurs.models import Utilisateur


class JournalActivite(models.Model):

    action = models.CharField(max_length=200)
    timestamp = models.DateTimeField(auto_now_add=True)
    objet_concerne = models.CharField(max_length=100)
    adresse_ip = models.GenericIPAddressField(null=True, blank=True)

    # Lien vers Utilisateur
    utilisateur = models.ForeignKey(
        Utilisateur,
        on_delete=models.SET_NULL,
        null=True,
        related_name='journal'
    )

    def __str__(self):
        return f"{self.utilisateur} - {self.action} - {self.timestamp}"
