from django.db import models
from django.contrib.auth.models import AbstractUser

class Leitor(AbstractUser):
    email = models.EmailField(unique=True) # e-mail unico
    #nome = models.CharField(max_length=120)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    foto_perfil = models.ImageField(blank=True, null=True)
    biografia = models.TextField(blank=True)
    
    seguidores = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='seguidores_de')
    seguindo = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='seguidos_por')
    
    class Meta:
        verbose_name_plural = "Leitores"

class Autor(models.Model):
    nome = models.CharField(max_length=120)

    class Meta:
        verbose_name_plural = "Autores"

    def __str__(self):
        return self.nome

class Livro(models.Model):
    titulo = models.CharField(max_length=120)
    sinopse = models.TextField()
    capa = models.ImageField(blank=True, null=True, upload_to="capa/", default="capa/default.jpg") 
    isbn = models.CharField(max_length=13)
    n_paginas = models.IntegerField()
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
    
class Interação(models.Model):
    leitor = models.ForeignKey(Leitor, on_delete=models.CASCADE)
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    
    STATUS_CHOICES = (
        ('QL', 'Quero Ler'),
        ('LN', 'Lendo'),
        ('LD', 'Lido'),
    )

    status = models.CharField(max_length=2, choices=STATUS_CHOICES)
    pg_atual = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.leitor.username} - {self.livro.titulo} ({self.get_status_display()})'

    def comentariosLeitorLivro(self):
        comentarios = Comentario.objects.filter(leitor=self.leitor, livro=self.livro)
        return comentarios
    
    class Meta:
        unique_together = ('livro', 'leitor')
        verbose_name_plural = "Interações"

class Comentario(models.Model):
    interacao = models.ForeignKey(Interação, on_delete=models.CASCADE)
    texto = models.TextField()
    data_hora = models.DateTimeField(auto_now_add=True)

    pagina_inicial = models.IntegerField(default=0) # Página inicial do livro que o leitor estava quando fez o comentário
    pagina_final = models.IntegerField(default=0)

    def __str__(self):
        return f'Comentário de {self.leitor.user.username} em {self.livro.titulo}'
    
    class Meta:
        verbose_name = "Comentário"


# Rever nossas entidades
# 👇👇👇👇👇👇👇👇👇👇👇
class Resenha(models.Model):
     # Um livro pode ter muitas avaliações, mas um leitor pode fazer apenas 
     # uma avaliação por livro
     livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
     leitor = models.ForeignKey(Leitor, on_delete=models.CASCADE)
     titulo = models.CharField(max_length=50)
     texto = models.TextField()
     data_hora = models.DateTimeField(auto_now_add=True)
     def __str__(self):
         return f"{self.titulo}" # apaguei - {self.leitor.id_username} porque nao tem mais
     class Meta:
         unique_together = ('livro', 'leitor')

# class Avaliacao(models.Model):
#     # Só pode ter uma avaliação de um leitor por livro
#     # Um livro pode ter avaliações de vários leitores
#     leitor = models.ForeignKey(Leitor, on_delete=models.CASCADE)
#     livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
#     data_hora = models.DateTimeField(auto_now_add=True)
#     nota  = models.IntegerField()
#     conteudo = models.TextField(blank=True, null=True)

#     class Meta:
#         unique_together = ('livro', 'leitor') # Garante que um leitor possa avaliar um livro apenas uma vez
#         verbose_name = "Avaliação"
#         verbose_name_plural = "Avaliações"

# class Curtida(models.Model):
#     comentario = models.ForeignKey(Comentario, on_delete=models.CASCADE)
#     usuario = models.ForeignKey(Leitor, on_delete=models.CASCADE)

#     def __str__(self):
#         return "id: "+ str(self.id) + " " + self.usuario.user.username + " curtiu comentário de " + self.comentario.leitor.user.username