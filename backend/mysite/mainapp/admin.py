from django.contrib import admin
from .models import *

admin.site.register(Leitor)
admin.site.register(Resenha)
admin.site.register(Autor)
admin.site.register(Livro)
admin.site.register(Interação)
admin.site.register(Comentario)

