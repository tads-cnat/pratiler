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
            "data": avaliacao.data_hora.isoformat(),
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
                "data": avaliacao.data_hora.isoformat(),
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
                avaliacao = Avaliacao.objects.create(
                    livro=livro,
                    leitor=request.user,
                    nota=avaliacao.nota,
                    texto=avaliacao.texto
                )
                return avaliacao
            
            elif avaliacao_exists:
                return JsonResponse({"detalhe": "Já existe uma avaliação sua sobre esse livro"}, status=400)

        except livro.DoesNotExist:
            return JsonResponse({"detalhe": "livro não encontrado para criação dessa avaliação"}, status=404)
        

