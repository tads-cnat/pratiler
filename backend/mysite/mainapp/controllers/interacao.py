from django.http import Http404
from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Interacao, Leitor, Livro
from mainapp.schemas import InteracaoFilter, InteracaoSchema, InteracaoSchemaIn
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

    @route.post("", response=InteracaoSchema)
    def criar_interacao(self, request, interacao_in: InteracaoSchemaIn):
        leitor = request.user

        try:
            livro = Livro.objects.get(id=interacao_in.livro_id)
        except Livro.DoesNotExist:
            return {"error": "Livro não encontrado"}, 404

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

    @route.get("/{int:id}")
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
            return {"detail": "Interacao não encontrada ou não pertence ao usuário"}


    @route.put("/{int:id}")
    def atualizar_interacao(self, request, id: int, interacao_in: InteracaoSchemaIn):
        try:
            interacao = Interacao.objects.get(id=id)
            interacao.status = interacao_in.status
            interacao.save()
            return {"success": True, "message":"Leitura atualizada!"}
        except Interacao.DoesNotExist:
            raise Http404("Interacao não encontrada")