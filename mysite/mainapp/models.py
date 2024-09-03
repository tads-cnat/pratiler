from django.db import models
from django.contrib.auth.models import User

class Usuario(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    foto_perfil = models.ImageField(blank=True, null=True)
    descricao = models.TextField(blank=True)
    moderador = models.BooleanField(default=False)
    id_username = models.CharField(max_length=30, unique=True) #@username # Chaves - Não é necessario, da para visualizar o pela fk user.username

    seguidores = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='seguidores_de')
    seguindo = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='seguidos_por')

    def __str__(self):
        return self.user.username
    
    def lendo(self):
        return self.interage_set.filter(status='LN')

    class Meta:
        verbose_name = "Usuário"
    
class Autor(models.Model):
    nome = models.CharField(max_length=120)

    def __str__(self):
        return self.nome
    class Meta:
        verbose_name_plural = "Autores"

class Livro(models.Model):
    titulo = models.CharField(max_length=120)
    descricao = models.TextField(blank=True)
    capa = models.ImageField(blank=True, null=True, upload_to="media/capa")
    isbn = models.CharField(max_length=13, unique=True)
    n_paginas = models.IntegerField()
    autor = models.ForeignKey(Autor, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.titulo + " - " + self.autor.nome
    
class Comentario(models.Model):
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    leitor = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    texto = models.TextField()
    data_hora = models.DateTimeField(auto_now_add=True)
    pagina_final = models.IntegerField(default=0)

    def __str__(self):
        return f'Comentário de {self.leitor.user.username} em {self.livro.titulo}'
    
    class Meta:
        verbose_name = "Comentário"
    
class Interage(models.Model):
    leitor = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    
    STATUS_CHOICES = (
        ('QL', 'Quero Ler'),
        ('LN', 'Lendo'),
        ('LD', 'Lido'),
    )

    status = models.CharField(max_length=2, choices=STATUS_CHOICES)

    def __str__(self):
        return f'{self.leitor.user.username} - {self.livro.titulo} ({self.get_status_display()})'
    
    class Meta:
        unique_together = ('livro', 'leitor')
        verbose_name_plural = "Interações"

class Resenha(models.Model):
    # Um livro pode ter muitas avaliações, mas um leitor pode fazer apenas 
    # uma avaliação por livro
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    leitor = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    titulo = models.CharField(max_length=120)
    texto = models.TextField()
    data_hora = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.titulo} - {self.leitor.id_username}"
    class Meta:
        unique_together = ('livro', 'leitor')

class Avaliacao(models.Model):
    # Só pode ter uma avaliação de um leitor por livro
    # Um livro pode ter avaliações de vários leitores
    leitor = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    data_hora = models.DateTimeField(auto_now_add=True)
    nota  = models.IntegerField()
    conteudo = models.TextField()

    class Meta:
        unique_together = ('livro', 'leitor') # Garante que um leitor possa avaliar um livro apenas uma vez
        verbose_name = "Avaliação"
        verbose_name_plural = "Avaliações"

class Curtida(models.Model):
    comentario = models.ForeignKey(Comentario, on_delete=models.CASCADE)
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return self.usuario.user.username + " curtiu comentário de " + self.comentario.leitor.user.username