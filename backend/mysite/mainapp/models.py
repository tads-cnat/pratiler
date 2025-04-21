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
    capa = models.TextField()
    isbn = models.CharField(max_length=13)
    n_paginas = models.IntegerField()
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
    
class Interacao(models.Model):
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

    def postagensLeitorLivro(self):
        postagens = Postagem.objects.filter(leitor=self.leitor, livro=self.livro)
        return postagens
    
    class Meta:
        unique_together = ('livro', 'leitor')
        verbose_name_plural = "Interações"

class Postagem(models.Model):
    interacao = models.ForeignKey(Interacao, on_delete=models.CASCADE)
    texto = models.TextField()
    data_hora = models.DateTimeField(auto_now_add=True)

    pagina_inicial = models.IntegerField(default=0) # Página inicial do livro que o leitor estava quando fez a postagem
    pagina_final = models.IntegerField(default=0)

    def __str__(self):
        return f'Postagem de {self.leitor.user.username} em {self.livro.titulo}'
    
    class Meta:
        ordering = ['-data_hora']


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

class Avaliacao(models.Model):
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    leitor = models.ForeignKey(Leitor, on_delete=models.CASCADE)
    data_hora = models.DateTimeField(auto_now_add=True)
    nota = models.IntegerField(default=1)
    texto = models.TextField()

    def __str__(self):
        return f"Livro: {livro} \n Leitor: {leitor} \n Nota: {nota}"
    
    class Meta:
        unique_together = ('livro', 'leitor')
        verbose_name_plural="Avaliações"
        verbose_name="Avaliação"


class Curtida(models.Model):
    postagem = models.ForeignKey(Postagem, on_delete=models.CASCADE)
    leitor = models.ForeignKey(Leitor, on_delete=models.CASCADE)

    def __str__(self):
        return "id: "+ str(self.id) + " " + self.usuario.user.username + " curtiu postagem de " + self.postagem.leitor.user.username