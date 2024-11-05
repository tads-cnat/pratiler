from typing import List
from ninja import NinjaAPI

from .schemas import *
from .models import *

## colocar o que antes eram as views
api = NinjaAPI()

@api.get('listar_livros/', response=List[LivroSchema])
def listar_livros(request):
    livros = Livro.objects.all
    response = [{"titulo":  livro.id, "titulo": livro.titulo, "descricao": livro.descricao, "capa": livro.capa, "isbn": livro.isbn, "n_paginas": livro.n_paginas, "autor": livro.autor} for livro in livros]
    return response



