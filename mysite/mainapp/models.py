from django.db import models
from django.contrib.auth.models import User

class Leitor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    foto_perfil = models.ImageField(blank=True, null=True)
    descricao = models.TextField(blank=True)

    seguidores = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='seguidores_de')
    seguindo = models.ManyToManyField('self', symmetrical=False, blank=True, related_name='seguidos_por')

    def __str__(self):
        return self.user.username

class Livro(models.Model):
    titulo = models.CharField(max_length=120)
    descricao = models.TextField(blank=True)
    capa = models.ImageField(blank=True, null=True)

    def __str__(self):
        return self.titulo

class RelacaoLivro(models.Model):
    leitor = models.ForeignKey(Leitor, on_delete=models.CASCADE)
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    
    STATUS_CHOICES = (
        ('QL', 'Quero Ler'),
        ('LN', 'Lendo'),
        ('LD', 'Lido'),
    )
    status = models.CharField(max_length=2, choices=STATUS_CHOICES)

    def __str__(self):
        return f'{self.leitor.user.username} - {self.livro.titulo} ({self.get_status_display()})'


class LivroLeitor:
    leitor = models.ForeignKey(Leitor, )
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    situacao = SituacaoLivro(models.IntegerField())

class SituacaoLivro(Enum):
    LIDO = 1
    LENDO = 2
    DESEJO_LER = 3

class Comentario(models.Model):
    livro = models.ForeignKey(Livro, on_delete=models.CASCADE)
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    texto = models.TextField()
    data_criacao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Comentário de {self.autor.username} em {self.livro.titulo}'