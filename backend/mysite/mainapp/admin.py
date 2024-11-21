from django.contrib import admin
from .models import Leitor,Autor, Livro

admin.site.register(Leitor)

admin.site.register(Autor)
admin.site.register(Livro)

