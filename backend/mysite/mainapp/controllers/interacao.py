from django.http import Http404
from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Interacao, Leitor, Livro
from mainapp.schemas import InteracaoSchema
from ninja import Query


@api_controller("/interacoes", auth=JWTAuth(), tags=["Interações Livro/Leitor"])
class InteracaoController:
    @route.get("", response=list[InteracaoSchema])
    def listar_interacoes(self, request):
        interacoes = Interacao.objects.select_related('leitor', 'livro__autor').all()

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
                    "capa": interacao.livro.capa,
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

    @route.get("/leitor", response=list[InteracaoSchema])
    def listar_interacoes_por_leitor(self, request, username: str, status: list[str] = Query(["QL", "LN", "LD"])):
        leitor = Leitor.objects.get(username=username)
        interacoes = Interacao.objects.select_related('leitor', 'livro__autor').filter(leitor=leitor, status__in=status)

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
                    "isbn": interacao.livro.isbn,
                    "sinopse": interacao.livro.sinopse,
                    "capa": interacao.livro.capa,
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

    @route.post("/leitor", response=InteracaoSchema)
    def criar_interacao(self, request, livro_id: int, status: str):
        leitor = request.user

        try:
            livro = Livro.objects.get(id=livro_id)
        except Livro.DoesNotExist:
            return {"error": "Livro não encontrado"}, 404

        interacao = Interacao.objects.create(
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
                "isbn": interacao.livro.isbn,
                "sinopse": interacao.livro.sinopse,
                "capa": interacao.livro.capa,
                "n_paginas": interacao.livro.n_paginas,
                "autor": {
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
            "pg_atual": interacao.pg_atual
        }

    @route.post("/leitor/lendo", response=InteracaoSchema)
    def criar_interacao_lendo(self, request, livro_id: int):
        leitor = request.user

        try:
            livro = Livro.objects.get(id=livro_id)
        except Livro.DoesNotExist:
            return {"error": "Livro não encontrado"}, 404

        interacao = Interacao.objects.create(
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
                "isbn": interacao.livro.isbn,
                "capa": interacao.livro.capa,
                "n_paginas": interacao.livro.n_paginas,
                "autor": {
                    "id": interacao.livro.autor.id,
                    "nome": interacao.livro.autor.nome
                }
            },
            "status": interacao.status,
            "pg_atual": interacao.pg_atual
        }

    @route.get("/leitor/{int:id}", response=InteracaoSchema)
    def listar_interacao_id(self, request, id: int):
        try:
            leitor = request.user
            interacao = Interacao.objects.select_related('leitor', 'livro__autor').get(livro_id=id, leitor=leitor)

            return {
                "id": interacao.id,
                "leitor": {
                    "id": interacao.leitor.id,
                    "username": interacao.leitor.username
                },
                "livro": {
                    "id": interacao.livro.id,
                    "titulo": interacao.livro.titulo,
                    "isbn": interacao.livro.isbn,
                    "sinopse": interacao.livro.sinopse,
                    "capa": interacao.livro.capa,
                    "n_paginas": interacao.livro.n_paginas,
                    "autor": {
                        "id": interacao.livro.autor.id,
                        "nome": interacao.livro.autor.nome
                    }
                },
                "status": interacao.status,
                "pg_atual": interacao.pg_atual
            }
        except Interacao.DoesNotExist:
            return {"detail": "Interacao não encontrada ou não pertence ao usuário"}, 404


    @route.put("/{id}/marcar-como-lido", )
    def marcar_como_lido(self, request, id: int):
        try:
            interacao = Interacao.objects.get(id=id, leitor=request.user)
            interacao.status = "LD"
            interacao.save()
            return {"success": True, "message":"Livro marcado como lido com sucesso!"}
        except Interacao.DoesNotExist:
            raise Http404("Interacao não encontrada")