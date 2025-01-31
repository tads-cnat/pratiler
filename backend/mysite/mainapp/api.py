from django.http import Http404
from django.shortcuts import get_object_or_404
from ninja import NinjaAPI
from ninja.security import django_auth
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from ninja.responses import JsonResponse

from .models import Livro, Autor, Interação, Leitor, Resenha

from .schemas import *

# API com CSRF ativado para autenticação e endpoints sensíveis
api = NinjaAPI(csrf=True)

@api.get("/set-csrf-token", include_in_schema=False)
def get_csrf_token(request):
    return {"csrftoken": get_token(request)}


@api.post("/login", include_in_schema=False)
def login_view(request, payload: SignInSchema):
    try:
        user = authenticate(request, username=payload.email, password=payload.password)
        if user is not None:
            login(request, user)
            return {"success": True}
        return {"success": False, "message": "Credenciais inválidas, por favor tente novamente"}
    except Exception:
        return {"success": False, "message": "Credenciais inválidas, por favor tente novamente"}



@api.get("/logout", auth=django_auth, include_in_schema=False)
def logout_view(request):
    logout(request)
    return {"message": "Logged out"}


@api.get("/user", auth=django_auth, tags=["Leitores"])
def user(request):
    return {
        "senha": request.user.password,
        "biografia": request.user.biografia,
        "username": request.user.username,
        "email": request.user.email,
        "foto_perfil": f"http://127.0.0.1:8000{request.user.foto_perfil.url.replace('/media', '')}" if request.user.foto_perfil else None
    }


@api.post("/register", include_in_schema=False)
def register(request, payload: RegisterSchema):
    try:
        Leitor.objects.create_user(username=payload.username, email=payload.email, password=payload.password)
        return {"success": "User registered successfully"}
    except Exception as e:
        if "UNIQUE constraint failed" in str(e):
            return {"error": "Email ou nome de usuário já está em uso."}
        return {"error": str(e)}
    

@api.get("/autores", response=list[AutorSchema], tags=["Autores"])
def listar_autores(request):
    """Lista todos os autores."""
    return Autor.objects.all()

@api.get("/livros", response=list[LivroSchema], auth=django_auth, tags=["Livros"])
def listar_livros(request):
    livros = Livro.objects.select_related('autor').all()
    livros_resposta = []

    for livro in livros:
        livro_data = {
            "id": livro.id,
            "titulo": livro.titulo,
            "sinopse": livro.sinopse,
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
    return Leitor.objects.all()

@api.get("/leitores/{leitor_id}", response=LeitorSchema, tags=["Leitores"])
def listar_leitor(request, leitor_id: int):
    """Lista um leitor específico."""
    try:
        leitor = Leitor.objects.get(id=leitor_id)
        return leitor
    except Leitor.DoesNotExist:
        return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)

@api.get("/leitores/{leitor_id}/user", response=UserSchema, tags=["Leitores"])
def listar_user_do_leitor(request, leitor_id: int):
    """Lista um User (Django) específico"""
    try:
        leitor = Leitor.objects.get(id=leitor_id)
        user = leitor.user_django  # Pega o User relacionado ao Leitor
        return user
    except Leitor.DoesNotExist:
        return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)
    

###### Endpoints Interação

@api.get("/interacoes", response=list[InteracaoSchema], tags=['Interações Livro/Leitor'])
def listar_interacoes(request):
    interacoes = Interação.objects.select_related('leitor', 'livro__autor').all()

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
                "sinopse": interacao.livro.sinopse,
                "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
                "n_paginas": interacao.livro.n_paginas,
                "autor":{
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
            "pg_atual": interacao.pg_atual
        }
        for interacao in interacoes
    ]


@api.get("/interacoes/leitor", response=list[InteracaoSchema], tags=['Interações Livro/Leitor'])
def listar_interacoes_lendo_por_leitor(request):
    leitor = request.user
    interacoes = Interação.objects.filter(leitor=leitor.id, status="LN")

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
                "sinopse": interacao.livro.sinopse,
                "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
                "n_paginas": interacao.livro.n_paginas,
                "autor":{
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
            "pg_atual": interacao.pg_atual
        }
        for interacao in interacoes
    ]

@api.get("/interacoes/leitor/quero_ler", response=list[InteracaoSchema], tags=['Interações Livro/Leitor'])
def listar_interacoes_quero_ler_por_leitor(request):
    leitor = request.user

    interacoes = Interação.objects.select_related('leitor', 'livro__autor').filter(leitor=leitor, status='QL')

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
                "sinopse": interacao.livro.sinopse,
                "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
                "n_paginas": interacao.livro.n_paginas,
                "autor":{
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
            "pg_atual": interacao.pg_atual
        }
        for interacao in interacoes
    ]

@api.get("/interacoes/leitor/lidos", response=list[InteracaoSchema], tags=['Interações Livro/Leitor'])
def listar_interacoes_lidas_por_leitor(request):
    leitor = request.user

    interacoes = Interação.objects.select_related('leitor', 'livro__autor').filter(leitor=leitor, status="LD")

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
                "sinopse": interacao.livro.sinopse,
                "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
                "n_paginas": interacao.livro.n_paginas,
                "autor":{
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
            "pg_atual": interacao.pg_atual
        }
        for interacao in interacoes
    ]

@api.post("/interacoes/leitor", auth=django_auth, response=InteracaoSchema, tags=['Interações Livro/Leitor'])
def criar_interacao(request, livro_id: int, status: str):
    leitor = request.user

    try:
        livro = Livro.objects.get(id=livro_id)
    except Livro.DoesNotExist:
        return api.create_response(request, {"error": "Livro não encontrado"}, status=404)

    interacao = Interação.objects.create(
        leitor=leitor,
        livro=livro,
        status=status
    )

    return {
        "id": interacao.id,
        "leitor": {
            "id": interacao.leitor.id,
            "username": interacao.leitor.username
        },
        "livro": {
            "id": interacao.livro.id,
            "titulo": interacao.livro.titulo,
            "sinopse": interacao.livro.sinopse,
            "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
            "n_paginas": interacao.livro.n_paginas,
            "autor": {
                "id": interacao.livro.autor.id,
                "nome": interacao.livro.autor.nome
            }
        },
        "status": interacao.status,
        "pg_atual": interacao.pg_atual
    }

@api.post("/interacoes/leitor/lendo", auth=django_auth, response=InteracaoSchema, tags=['Interações Livro/Leitor'])
def criar_interacao_lendo(request, livro_id: int):
    leitor = request.user

    try:
        livro = Livro.objects.get(id=livro_id)
    except Livro.DoesNotExist:
        return api.create_response(request, {"error": "Livro não encontrado"}, status=404)

    interacao = Interação.objects.create(
        leitor=leitor,
        livro=livro,
        status='LN'
    )

    return {
        "id": interacao.id,
        "leitor": {
            "id": interacao.leitor.id,
            "username": interacao.leitor.username
        },
        "livro": {
            "id": interacao.livro.id,
            "titulo": interacao.livro.titulo,
            "sinopse": interacao.livro.sinopse,
            "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
            "n_paginas": interacao.livro.n_paginas,
            "autor": {
                "id": interacao.livro.autor.id,
                "nome": interacao.livro.autor.nome
            }
        },
        "status": interacao.status,
        "pg_atual": interacao.pg_atual
    }

@api.get("interacoes/leitor/{int:id}", response=InteracaoSchema, tags=['Interações Livro/Leitor'])
def listar_interacao_id(request, id:int):
    try:
        leitor = request.user
        interacao = Interação.objects.select_related('leitor', 'livro__autor').get(livro_id=id, leitor=leitor)

        return{
            "id": interacao.id,
            "leitor": {
                "id": interacao.leitor.id,
                "username": interacao.leitor.username
            },
            "livro": {
                "id": interacao.livro.id,
                "titulo": interacao.livro.titulo,
                "sinopse": interacao.livro.sinopse,
                "capa": request.build_absolute_uri(interacao.livro.capa.url) if interacao.livro.capa else None,
                "n_paginas": interacao.livro.n_paginas,
                "autor": {
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
            "pg_atual": interacao.pg_atual
        }
    except Interação.DoesNotExist:
        return api.create_response(request, {"detail": "Interação não encontrada ou não pertence ao usuário"}, status=404)
    

@api.put("/interacoes/{id}/marcar-como-lido", tags=["Interações Livro/Leitor"])
def marcar_como_lido(request, id:int):
    try:
        interacao = Interação.objects.get(id=id, leitor=request.user)
        interacao.status = "LD"
        interacao.save()
        return {"success": True, "message":"Livro marcado como lido com sucesso!"}
    except Interação.DoesNotExist:
        raise Http404("Interação não encontrada")




@api.get("/resenhas", response=list[ResenhaSchema], tags=["Resenhas"])
def listar_resenhas(request):
    """Lista todoas as resenhas."""
    return Resenha.objects.all()

# fazer os POSTS
## Não vai ter post livro no momento porque vamos consumir uma API depois ao invés de criar os livros manualmente
@api.post("/resenhas/", response=ResenhaSchema, tags=["Resenhas"])
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
@api.put("/resenhas/{resenha_id}", response=ResenhaSchema, tags=["Resenhas"]) 
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
@api.delete("/resenhas/{resenha_id}", response={204: None}, tags=["Resenhas"])
def deletar_resenha(request, resenha_id: int):
    resenha = get_object_or_404(Resenha, id=resenha_id)
    resenha.delete()
    return 204, None


@api.get("/livros-disponiveis", response=list[LivroSchema], auth=django_auth, tags=['Livros'])
def livros_disponiveis(request):
    try:
        leitor = request.user
        interacoes_leitor = Interação.objects.filter(leitor=leitor).values_list('livro_id', flat=True)

        livros_disponiveis = Livro.objects.exclude(id__in=interacoes_leitor)

        livros_resposta = []

        for livro in livros_disponiveis:
            livro_data = {
                "id": livro.id,
                "titulo": livro.titulo,
                "sinopse": livro.sinopse,
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
    except Livro.DoesNotExist:
        return api.create_response(request, {"detail": "Livros não encontrados"}, status=404)

# ...existing code...

from .models import Comentario, Interação
from .schemas import ComentarioSchemaIn, InteracaoSchema, ComentarioSchemaOut

@api.post("/comentarios", response={201: ComentarioSchemaOut}, tags=["Comentarios"])
def criar_comentario(request, comentario: ComentarioSchemaIn):
    # Criar o comentário
    livro_id = comentario.livro_id
    leitor = request.user
    interacao = Interação.objects.get(livro_id=livro_id, leitor_id=leitor.id)

    novo_comentario = Comentario.objects.create(
        interacao=interacao,
        texto=comentario.texto,
        pagina_inicial=comentario.pagina_inicial,
        pagina_final=comentario.pagina_final
    )

    interacao.pg_atual = comentario.pagina_final
    interacao.save()

    comentario_data = {
        "id": novo_comentario.id,
        "interacao": novo_comentario.interacao.id,
        "texto": novo_comentario.texto,
        "pagina_inicial": novo_comentario.pagina_inicial,
        "pagina_final": novo_comentario.pagina_final,
        "data_hora": novo_comentario.data_hora.isoformat(),  # Convert datetime to string
        "leitor": {
            "id": novo_comentario.interacao.leitor.id,
            "username": novo_comentario.interacao.leitor.username
        },
        "livro": {
            "id": novo_comentario.interacao.livro.id,
            "titulo": novo_comentario.interacao.livro.titulo,
            "sinopse": novo_comentario.interacao.livro.sinopse,
            "isbn": novo_comentario.interacao.livro.isbn,              
            "n_paginas": novo_comentario.interacao.livro.n_paginas,    
            "autor":{
                    "id": novo_comentario.interacao.livro.autor.id,
                    "nome": novo_comentario.interacao.livro.autor.nome
            },
            "capa": f"http://127.0.0.1:8000{novo_comentario.interacao.livro.capa.url.replace('/media', '')}" if novo_comentario.interacao.livro.capa else None,
        }
    }

    return comentario_data

# ...existing code...

from .schemas import ComentarioSchemaOut

@api.get("/comentarios", response=list[ComentarioSchemaOut], tags=["Comentarios"])
def listar_comentarios(request):
    comentarios = Comentario.objects.all()
    comentarios_resposta = [
        {
            "id": comentario.id,
            "texto": comentario.texto,
            "pagina_inicial": comentario.pagina_inicial,
            "pagina_final": comentario.pagina_final,
            "data_hora": comentario.data_hora.isoformat(),  # Convert datetime to string
            "leitor": {
                "id": comentario.interacao.leitor.id,
                "username": comentario.interacao.leitor.username
            },
            "livro": {
                "id": comentario.interacao.livro.id,
                "titulo": comentario.interacao.livro.titulo,
                "sinopse": comentario.interacao.livro.sinopse,
                "isbn": comentario.interacao.livro.isbn,              
                "n_paginas": comentario.interacao.livro.n_paginas,    
                "autor":{
                        "id": comentario.interacao.livro.autor.id,
                        "nome": comentario.interacao.livro.autor.nome
                },
                "capa": f"http://127.0.0.1:8000{comentario.interacao.livro.capa.url.replace('/media', '')}" if comentario.interacao.livro.capa else None,
            }
        }
        for comentario in comentarios
    ]
    print()
    return comentarios_resposta