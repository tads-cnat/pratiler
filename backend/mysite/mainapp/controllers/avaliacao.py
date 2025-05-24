from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Avaliacao, Livro, Leitor, Interacao
from mainapp.schemas import AvaliacaoSchemaIn, AvaliacaoSchemaOut
from django.http import JsonResponse

@api_controller("/avaliacoes", auth=JWTAuth(), tags=["Avaliacoes"])
class AvaliacaoController:
    @route.get("", response=list[AvaliacaoSchemaOut])
    def listar_avaliacoes(self, request):
        return [{
            "id": avaliacao.id,
            "livro": {
                "id": avaliacao.livro.id,
                "titulo": avaliacao.livro.titulo,
                "sinopse": avaliacao.livro.sinopse,
                "isbn": avaliacao.livro.isbn,
                "n_paginas": avaliacao.livro.n_paginas,
                "capa": avaliacao.livro.capa,
                "autor": {
                    "id": avaliacao.livro.autor.id,
                    "nome": avaliacao.livro.autor.nome
                }
            },
            "leitor": {
                "id": avaliacao.leitor.id,
                "username": avaliacao.leitor.username
            },
            "nota": avaliacao.nota,
            "data_hora": avaliacao.data_hora.isoformat(),
            "texto": avaliacao.texto
        }
        for avaliacao in Avaliacao.objects.all()]

    @route.get("/{avaliacao_id}", response=AvaliacaoSchemaOut)
    def listar_avaliacao(self, request, avaliacao_id: int):
        try:
            avaliacao = Avaliacao.objects.get(id=avaliacao_id)
            return {
                "id": avaliacao.id,
                "livro": {
                    "id": avaliacao.livro.id,
                    "titulo": avaliacao.livro.titulo,
                    "sinopse": avaliacao.livro.sinopse,
                    "isbn": avaliacao.livro.isbn,              
                    "n_paginas": avaliacao.livro.n_paginas,
                    "capa": avaliacao.livro.capa,
                    "autor": {
                        "id": avaliacao.livro.autor.id,
                        "nome": avaliacao.livro.autor.nome
                    }
                },
                "leitor": {
                    "id": avaliacao.leitor.id,
                    "username": avaliacao.leitor.username
                },
                "nota": avaliacao.nota,
                "data_hora": avaliacao.data_hora.isoformat(),
                "texto": avaliacao.texto
            }
        except Avaliacao.DoesNotExist:
            return JsonResponse({"detalhe": "avaliação não encontrada"}, status=404)
        
    @route.post("", response=AvaliacaoSchemaOut)
    def adicionar_avaliacao(self, request, avaliacao: AvaliacaoSchemaIn):
        try:
            livro = Livro.objects.get(id=avaliacao.livro_id)

            #verificando se já existe uma avaliação desse livro feita pelo mesmo leitor
            avaliacao_exists = Avaliacao.objects.filter(livro=livro, leitor=request.user).exists()

            if not avaliacao_exists:
                avaliacao_nova = Avaliacao.objects.create(
                    livro=livro,
                    leitor=request.user,
                    nota=avaliacao.nota,
                    texto=avaliacao.texto
                )
                return {
                    "id": avaliacao_nova.id,
                    "livro": {
                        "id": avaliacao_nova.livro.id,
                        "titulo": avaliacao_nova.livro.titulo,
                        "sinopse": avaliacao_nova.livro.sinopse,
                        "isbn": avaliacao_nova.livro.isbn,              
                        "n_paginas": avaliacao_nova.livro.n_paginas,
                        "capa": avaliacao_nova.livro.capa,
                        "autor": {
                            "id": avaliacao_nova.livro.autor.id,
                            "nome": avaliacao_nova.livro.autor.nome
                        }
                    },
                    "leitor": {
                        "id": avaliacao_nova.leitor.id,
                        "username": avaliacao_nova.leitor.username
                    },
                    "nota": avaliacao_nova.nota,
                    "data_hora": avaliacao_nova.data_hora.isoformat(),
                    "texto": avaliacao_nova.texto
            }
            
            elif avaliacao_exists:
                return JsonResponse({"detalhe": "Já existe uma avaliação sua sobre esse livro"}, status=400)

        except Livro.DoesNotExist:
            return JsonResponse({"detalhe": "livro não encontrado para criação dessa avaliação"}, status=404)
        

