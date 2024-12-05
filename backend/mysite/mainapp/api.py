from ninja import NinjaAPI
from django.conf import settings
from ninja.security import django_auth
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from ninja.responses import JsonResponse
from django.contrib.auth.decorators import login_required

from . import schemas, models

from .schemas import AutorSchema, LivroSchema, LeitorSchema, UserSchema, InteracaoSchema

# API com CSRF ativado para autenticação e endpoints sensíveis
api = NinjaAPI(csrf=True)

@api.get("/set-csrf-token", include_in_schema=False)
def get_csrf_token(request):
    return {"csrftoken": get_token(request)}


@api.post("/login", include_in_schema=False)
def login_view(request, payload: schemas.SignInSchema):
    try:
        user = authenticate(request, username=payload.email, password=payload.password)
        if user is not None:
            login(request, user)
            return {"success": True}
        return {"success": False, "message": "Credenciais inválidas, por favor tente novamente"}
    except Exception:
        return {"success": False, "message": "Credenciais inválidas, por favor tente novamente"}



@api.post("/logout", auth=django_auth, include_in_schema=False)
def logout_view(request):
    logout(request)
    return {"message": "Logged out"}


@api.get("/user", auth=django_auth, tags=["Leitores"])
def user(request):
    secret_fact = (
        "The moment one gives close attention to any thing, even a blade of grass",
        "it becomes a mysterious, awesome, indescribably magnificent world in itself."
    )
    return {
        "username": request.user.username,
        "email": request.user.email,
        "secret_fact": secret_fact
    }


@api.post("/register", include_in_schema=False)
def register(request, payload: schemas.RegisterSchema):
    try:
        models.Leitor.objects.create_user(username=payload.username, email=payload.email, password=payload.password)
        return {"success": "User registered successfully"}
    except Exception as e:
        if "UNIQUE constraint failed" in str(e):
            return {"error": "Email already exists."}
        return {"error": str(e)}
    

@api.get("/autores", response=list[AutorSchema], tags=["Autores"])
def listar_autores(request):
    """Lista todos os autores."""
    return models.Autor.objects.all()

@api.get("/livros", response=list[LivroSchema], auth=django_auth, tags=["Livros"])
def listar_livros(request):
    livros = models.Livro.objects.select_related('autor').all()
    livros_resposta = []

    for livro in livros:
        livro_data = {
            "id": livro.id,
            "titulo": livro.titulo,
            "descricao": livro.descricao,
            "paginas": livro.n_paginas,
            "isbn": livro.isbn,              
            "n_paginas": livro.n_paginas,    
            "autor":{
                    "id": livro.autor.id,
                    "nome": livro.autor.nome
            },
            "capa": f"http://127.0.0.1:8000{livro.capa.url.replace('/media', '')}" if livro.capa else None,
        }
        livros_resposta.append(livro_data)

    return livros_resposta

@api.get("/leitores", response=list[LeitorSchema], tags=["Leitores"])
def listar_leitores(request):
    """Lista todos os leitores."""
    return models.Leitor.objects.all()

@api.get("/leitores/{leitor_id}", response=LeitorSchema, tags=["Leitores"])
def listar_leitor(request, leitor_id: int):
    """Lista um leitor específico."""
    try:
        leitor = models.Leitor.objects.get(id=leitor_id)
        return leitor
    except models.Leitor.DoesNotExist:
        return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)

@api.get("/leitores/{leitor_id}/user", response=UserSchema, tags=["Leitores"])
def listar_user_do_leitor(request, leitor_id: int):
    """Lista um User (Django) específico"""
    try:
        leitor = models.Leitor.objects.get(id=leitor_id)
        user = leitor.user_django  # Pega o User relacionado ao Leitor
        return user
    except models.Leitor.DoesNotExist:
        return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)
    

###### Endpoints Interação

@api.get("/interacoes", response=list[InteracaoSchema], tags=['Interações Livro/Leitor'])
def listar_interacoes(request):
    interacoes = models.Interação.objects.select_related('leitor', 'livro__autor').all()

    # Serializando
    return [
        {
            "id": interacao.id,
            "leitor": {
                "id": interacao.leitor.id,
                "username": interacao.leitor.username
            },
            "livro": {
                "id": interacao.livro.id,
                "titulo": interacao.livro.titulo,
                "descricao": interacao.livro.descricao,
                "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
                "n_paginas": interacao.livro.n_paginas,
                "autor":{
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
        }
        for interacao in interacoes
    ]


@api.get("/interacoes/leitor", response=list[InteracaoSchema], tags=['Interações Livro/Leitor'])
def listar_interacoes_por_leitor(request):
    leitor = request.user

    interacoes = models.Interação.objects.select_related('leitor', 'livro__autor').filter(leitor=leitor)

    # Serializando
    return [
        {
            "id": interacao.id,
            "leitor": {
                "id": interacao.leitor.id,
                "username": interacao.leitor.username
            },
            "livro": {
                "id": interacao.livro.id,
                "titulo": interacao.livro.titulo,
                "descricao": interacao.livro.descricao,
                "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
                "n_paginas": interacao.livro.n_paginas,
                "autor":{
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
        }
        for interacao in interacoes
    ]