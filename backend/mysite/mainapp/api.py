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

@api.get("/resenhas", response=list[ResenhaSchema])
def listar_resenhas(request):
    """Lista todoas as resenhas."""
    return Resenha.objects.all()

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
            resenha = Resenha.objects.create(
                livro=livro,
                titulo=data.titulo,
                leitor=leitor,
                texto=data.texto,
                data_hora=data.data_hora
            )
            return resenha

        else:
            return JsonResponse({"detalhe": "Resenha já existe para este livro e leitor."}, status=400)
        
# fazer os PUTS
@api.put("/resenhas/{resenha_id}", response=ResenhaSchema) 
def atualizar_resenha(request, resenha_id: int, data: ResenhaSchema):
    """Atualiza uma resenha existente."""
    resenha = get_object_or_404(Resenha, id=resenha_id) # seleciona a resenha pelo id

    livro = get_object_or_404(Livro, id=data.livro)
    leitor = get_object_or_404(Leitor, id=data.leitor)

    resenha.livro = livro
    resenha.titulo = data.titulo
    resenha.leitor = leitor
    resenha.texto = data.texto
    resenha.data_hora = data.data_hora

    resenha.save()
    return resenha
    
# fazer os DELETES
@api.delete("/resenhas/{resenha_id}", response={204: None})
def deletar_resenha(request, resenha_id: int):
    resenha = get_object_or_404(Resenha, id=resenha_id)
    resenha.delete()
    return 204, None
