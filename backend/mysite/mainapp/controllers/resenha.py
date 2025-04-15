from django.http import JsonResponse
from django.shortcuts import get_object_or_404
from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Leitor, Livro, Resenha
from mainapp.schemas import ResenhaSchema


@api_controller("/resenhas", auth=JWTAuth(), tags=["Resenhas"])
class ResenhaController:
    @route.get("", response=list[ResenhaSchema])
    def listar_resenhas(self, request):
        """Lista todoas as resenhas."""
        return Resenha.objects.all()

    @route.get("/{username}", response=list[ResenhaSchema])
    def resenhas_por_leitor(self, request, username: str):
        """Lista as resenhas de um usuário."""
        leitor = get_object_or_404(Leitor, username=username)
        if not leitor:
            return JsonResponse({"detalhe": "Leitor não encontrado."}, status=404)
        return Resenha.objects.filter(leitor=leitor)

    @route.post("", response=ResenhaSchema)
    def criar_resenha(self, request, data: ResenhaSchema):
            """Cria uma nova resenha."""

            livro = get_object_or_404(Livro, id=data.livro)
            leitor = get_object_or_404(Leitor, id=data.leitor)
 
            if not Resenha.objects.filter(livro=livro, leitor=leitor).exists():
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

    @route.put("/{resenha_id}", response=ResenhaSchema) 
    def atualizar_resenha(self, request, resenha_id: int, data: ResenhaSchema):
        """Atualiza uma resenha existente."""
        resenha = get_object_or_404(Resenha, id=resenha_id)

        livro = get_object_or_404(Livro, id=data.livro)
        leitor = get_object_or_404(Leitor, id=data.leitor)

        resenha.livro = livro
        resenha.titulo = data.titulo
        resenha.leitor = leitor
        resenha.texto = data.texto
        resenha.data_hora = data.data_hora

        resenha.save()
        return resenha

    @route.delete("/{resenha_id}", response={204: None})
    def deletar_resenha(self, request, resenha_id: int):
        resenha = get_object_or_404(Resenha, id=resenha_id)
        resenha.delete()
        return 204, None