from django.db import models
from django.contrib.auth.models import AbstractUser

class Leitor(AbstractUser):
    email = models.EmailField(unique=True) # e-mail unico
    #nome = models.CharField(max_length=120)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    foto_perfil = models.ImageField(blank=True, null=True)
    descricao = models.TextField(blank=True)
    
    seguidores = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='seguidores_de')
    seguindo = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='seguidos_por')
    
    class Meta:
        verbose_name_plural = "Leitores"