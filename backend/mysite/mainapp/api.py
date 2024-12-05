from ninja import NinjaAPI
from django.conf import settings
from ninja.security import django_auth
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from ninja.responses import JsonResponse
from django.contrib.auth.decorators import login_required

from . import schemas, models

from .schemas import AutorSchema, LivroSchema, LeitorSchema, UserSchema

# API com CSRF ativado para autenticação e endpoints sensíveis
api = NinjaAPI(csrf=True)

@api.get("/set-csrf-token")
def get_csrf_token(request):
    return {"csrftoken": get_token(request)}


@api.post("/login")
def login_view(request, payload: schemas.SignInSchema):
    try:
        user = authenticate(request, username=payload.email, password=payload.password)
        if user is not None:
            login(request, user)
            return {"success": True}
        return {"success": False, "message": "Credenciais inválidas, por favor tente novamente"}
    except Exception:
        return {"success": False, "message": "Credenciais inválidas, por favor tente novamente"}



@api.get("/logout", auth=django_auth)
def logout_view(request):
    logout(request)
    return {"message": "Logged out"}


@api.get("/user", auth=django_auth)
def user(request):
    secret_fact = (
        "The moment one gives close attention to any thing, even a blade of grass",
        "it becomes a mysterious, awesome, indescribably magnificent world in itself."
    )
    return {
        "descricao": request.user.descricao,
        "username": request.user.username,
        "email": request.user.email,
        "foto_perfil": f"http://127.0.0.1:8000{request.user.foto_perfil.url.replace('/media', '')}" if request.user.foto_perfil else None,
        "secret_fact": secret_fact
    }


@api.post("/register")
def register(request, payload: schemas.RegisterSchema):
    try:
        models.Leitor.objects.create_user(username=payload.username, email=payload.email, password=payload.password)
        return {"success": "User registered successfully"}
    except Exception as e:
        if "UNIQUE constraint failed" in str(e):
            return {"error": "Email already exists."}
        return {"error": str(e)}
    

@api.get("/autores", response=list[AutorSchema])
def listar_autores(request):
    """Lista todos os autores."""
    return models.Autor.objects.all()

@api.get("/livros", response=list[LivroSchema], auth=django_auth)
def listar_livros(request):
    livros = models.Livro.objects.all()
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
    return models.Leitor.objects.all()

@api.get("/leitores/{leitor_id}", response=LeitorSchema)
def listar_leitor(request, leitor_id: int):
    """Lista um leitor específico."""
    try:
        leitor = models.Leitor.objects.get(id=leitor_id)
        return leitor
    except models.Leitor.DoesNotExist:
        return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)

@api.get("/leitores/{leitor_id}/user", response=UserSchema)
def listar_user_do_leitor(request, leitor_id: int):
    """Lista um User (Django) específico"""
    try:
        leitor = models.Leitor.objects.get(id=leitor_id)
        user = leitor.user_django  # Pega o User relacionado ao Leitor
        return user
    except models.Leitor.DoesNotExist:
        return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)