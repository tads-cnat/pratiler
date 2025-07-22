from django.db import IntegrityError
from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Interacao, Leitor, Livro
from mainapp.schemas import ErrorSchema, InteracaoFilter, InteracaoSchema, InteracaoSchemaIn, InteracaoSchemaUpdate
from ninja import Query


@api_controller("/interacoes", auth=JWTAuth(), tags=["Interações Livro/Leitor"])
class InteracaoController:
    @route.get("", response=list[InteracaoSchema])
    def listar_interacoes(self, request, filters: InteracaoFilter = Query(...)):
        leitor = Leitor.objects.get(username=filters.username) if filters.username else request.user
        status = filters.get_status()
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

    @route.post("", response={200: InteracaoSchema, 404: ErrorSchema})
    def criar_interacao(self, request, interacao_in: InteracaoSchemaIn):
        leitor = request.user

        try:
            livro = Livro.objects.get(id=interacao_in.livro_id)
            interacao = Interacao.objects.create(
                leitor=leitor,
                livro=livro,
                status=interacao_in.status,
                pg_atual=livro.n_paginas if interacao_in.status == 'LD' else interacao_in.pg_atual
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
        except Livro.DoesNotExist:
            return 404, {"message": "Livro não encontrado"}
        except IntegrityError:
            return 400, {"message": "Este livro já está na sua estante"}

    @route.get("/{int:id}", response={200: InteracaoSchema, 404: ErrorSchema})
    def listar_interacao_id(self, request, id: int):
        try:
            interacao = Interacao.objects.select_related('leitor', 'livro__autor').get(id=id)
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
            return 404, {"message": "Interação não encontrada"}


    @route.put("/{int:id}", response={200: InteracaoSchema, 404: ErrorSchema})
    def atualizar_interacao(self, request, id: int, interacao_update: InteracaoSchemaUpdate):
        try:
            interacao = Interacao.objects.get(id=id)
            interacao.status = interacao_update.status if interacao_update.status else interacao.status
            interacao.pg_atual = interacao_update.pg_atual if interacao_update.pg_atual else interacao.pg_atual
            interacao.save()
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
            return 404, {"message": "Interação não encontrada"}