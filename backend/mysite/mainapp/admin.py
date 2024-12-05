from django.contrib import admin
from .models import Leitor,Autor, Livro, Interação, Comentario

admin.site.register(Leitor)

admin.site.register(Autor)
admin.site.register(Livro)
admin.site.register(Interação)
admin.site.register(Comentario)


