from django.contrib import admin
from .models import Autor, Interacao, Leitor, Livro, Postagem, Resenha

admin.site.register(Leitor)
admin.site.register(Resenha)
admin.site.register(Autor)
admin.site.register(Livro)
admin.site.register(Interacao)
admin.site.register(Postagem)
