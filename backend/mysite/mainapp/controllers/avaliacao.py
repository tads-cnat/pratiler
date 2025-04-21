from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Avaliacao, Livro, Leitor, Interacao
from mainapp.schemas import AvaliacaoSchemaIn, AvaliacaoSchemaOut

@api_controller("/avaliacao", auth=JWTAuth(), tags=["Avaliacoes"])
class AvaliacaoController:
    @route.get("", response=list[AvaliacaoSchemaOut])
    def listar_avaliacoes(self, request):
        return Avaliacao.objects.all()

    @route.get("/{avaliacao_id}", response=AvaliacaoSchemaOut)
    def listar_avaliacao(self, request, avaliacao_id: int):
        try:
            avaliacao_get = Avaliacao.objects.get(id=avaliacao_id)
            return avaliacao_get
        except Avaliacao.DoesNotExist:
            return JsonResponse({"detalhe": "avaliação não encontrada"}, status=404)
        
    @route.post("/add-avaliacao", response=AvaliacaoSchemaOut)
    def adicionar_avaliacao(self, request, avaliacao: AvaliacaoSchemaIn):
        try:
            livro = Livro.objects.get(id=avaliacao.livro_id)
            leitor = Leitor.objects.get(id=avaliacao.leitor_id)

            #verificando se já existe uma avaliação desse livro feita pelo mesmo leitor
            avaliacao_exists = Avaliacao.objects.filter(livro=livro, leitor=leitor).exists()

            #verificando se o leitor leu todas as páginas do livro
            livro_lido = Interacao.objects.filter(leitor=leitor, livro=livro).first()

            if not avaliacao_exists and livro_lido.status == 'LD':
                avaliacao = Avaliacao.objects.create(
                    livro=livro,
                    leitor=leitor,
                    nota=avaliacao.nota,
                    texto=avaliacao.texto
                )
                Avaliacao.save()
                return avaliacao
            
            else if livro_lido.status != 'LD':
                return JsonResponse({"detalhe": "status do livro não está definido como Lido"}, status=405) #verificar depois se esse é o status ideal

            else if avaliacao_exists:
                return JsonResponse({"detalhe": "já existe uma avaliação realizada por esse leitor e sobre esse livro"}, status=405)

        except Livro.DoesNotExist:
            return JsonResponse({"detalhe": "livro não encontrado para criação dessa avaliação"}, status=404)
        

