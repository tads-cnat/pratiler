from ninja import NinjaAPI
from ninja.responses import JsonResponse # Retornar Json ao inves de Dict
from .schemas import AutorSchema, LivroSchema, LeitorSchema, UserSchema, ResenhaSchema
from .models import Autor, Livro, Leitor, Resenha
from django.shortcuts import get_object_or_404


api = NinjaAPI()

# GETS
@api.get("/autores", response=list[AutorSchema])
def listar_autores(request):
    """Lista todos os autores."""
    return Autor.objects.all()

@api.get("/livros", response=list[LivroSchema])
def listar_livros(request):
    """Lista todos os livros."""
    return Livro.objects.all()

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

@api.get("/resenhas", response=list[LivroSchema])
def listar_resenhas(request):
    """Lista todoas as resenhas."""
    return Resenha.Objects.all()

# fazer os POSTS
## Não vai ter post livro no momento porque vamos consumir uma API depois ao invés de criar os livros manualmente
@api.post("/resenhas/", response=ResenhaSchema)
def criar_resenha(request, data: ResenhaSchema):
        """Cria uma nova resenha."""

        # o livro e o leitor existem?? (Verificação)
        livro = get_object_or_404(Livro, id=data.livro)
        leitor = get_object_or_404(Leitor, id=data.leitor)

        # Já foi feita uma resenha para esse livro?? 
         # Verifica se já existe uma resenha desse leitor para este livro
        if not Resenha.objects.filter(livro=livro, leitor=leitor).exists():
            # se  não existe, cria resenha



# fazer os PUTS


# fazer os DELETES