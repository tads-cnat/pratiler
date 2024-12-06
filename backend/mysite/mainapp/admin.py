from django.contrib import admin
from .models import Autor, Livro, Leitor, Resenha

admin.site.register(Autor)
admin.site.register(Livro)
admin.site.register(Leitor)
admin.site.register(Resenha)
