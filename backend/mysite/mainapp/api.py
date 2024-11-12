from django.conf import settings
from ninja import NinjaAPI
from ninja.responses import JsonResponse # Retornar Json ao inves de Dict
from .schemas import AutorSchema, LivroSchema, LeitorSchema, UserSchema
from .models import Autor, Livro, Leitor

api = NinjaAPI()

@api.get("/autores", response=list[AutorSchema])
def listar_autores(request):
    """Lista todos os autores."""
    return Autor.objects.all()

@api.get("/livros", response=list[LivroSchema])
def listar_livros(request):
    """Lista todos os livros."""
    livros = Livro.objects.all()
    livros_resposta = []

    for livro in livros:
        livro_data = {
            "id": livro.id,
            "titulo": livro.titulo,
            "descricao": livro.descricao,
            "paginas": livro.n_paginas,
            "isbn": livro.isbn,              
            "n_paginas": livro.n_paginas,    
            "autor_id": livro.autor_id,
            "capa": f"http://127.0.0.1:8000{livro.capa.url.replace('/media', '')}" if livro.capa else None,
        }
        livros_resposta.append(livro_data)

    return livros_resposta

@api.get("/leitores", response=list[LeitorSchema])
def listar_leitores(request):
    """Lista todos os leitores."""
    return Leitor.objects.all()

@api.get("/leitores/{leitor_id}", response=LeitorSchema)
def listar_leitor(request, leitor_id: int):
    """Lista um leitor específico."""
    try:
        leitor = Leitor.objects.get(id=leitor_id)
        return leitor
    except Leitor.DoesNotExist:
        return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)

@api.get("/leitores/{leitor_id}/user", response=UserSchema)
def listar_user_do_leitor(request, leitor_id: int):
    """Lista um User (Django) específico"""
    try:
        leitor = Leitor.objects.get(id=leitor_id)
        user = leitor.user_django  # Pega o User relacionado ao Leitor
        return user
    except Leitor.DoesNotExist:
        return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)