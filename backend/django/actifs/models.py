from django.db import models


class Actif(models.Model):

    TYPES = [
        ('SERVEUR', 'Serveur'),
        ('PC', 'PC'),
        ('ROUTEUR', 'Routeur'),
        ('SWITCH', 'Switch'),
        ('APPLICATION', 'Application'),
    ]

    CRITICITES = [
        ('FAIBLE', 'Faible'),
        ('MOYEN', 'Moyen'),
        ('ELEVE', 'Elevé'),
        ('CRITIQUE', 'Critique'),
    ]

    nom = models.CharField(max_length=100)
    ip = models.GenericIPAddressField(unique=True)
    type_actif = models.CharField(max_length=20, choices=TYPES)
    criticite = models.CharField(max_length=10, choices=CRITICITES)
    systeme = models.CharField(max_length=100)
    date_ajout = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nom} ({self.ip})"
