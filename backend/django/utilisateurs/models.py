from django.db import models


# OBJET 2: Role
class Role(models.Model):

    ROLES = [
        ('ADMIN', 'Administrateur'),
        ('ANALYSTE', 'Analyste'),
        ('AUDITEUR', 'Auditeur'),
        ('TECHNICIEN', 'Technicien'),
    ]

    nom = models.CharField(
        max_length=20,
        choices=ROLES,
        unique=True
    )

    def __str__(self):
        return self.nom


# OBJET 1: Utilisateur
class Utilisateur(models.Model):

    nom = models.CharField(max_length=100)
    prenom = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    mot_de_passe = models.CharField(max_length=255)
    date_creation = models.DateTimeField(auto_now_add=True)
    est_actif = models.BooleanField(default=True)

    # Lien vers Role (1 utilisateur = 1 role)
    role = models.ForeignKey(
        Role,
        on_delete=models.PROTECT,
        related_name='utilisateurs'
    )

    def __str__(self):
        return f"{self.prenom} {self.nom}"
