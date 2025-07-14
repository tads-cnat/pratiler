from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Leitor
from mainapp.schemas import ErrorSchema, LeitorSchema, PerfilSchema


@api_controller("/leitores", auth=JWTAuth(), tags=["Leitores"])
class LeitorController:
    @route.get("", response=list[LeitorSchema])
    def listar_leitores(self, request):
        return [{
            "id": leitor.id,
            "nome": leitor.nome
        }
        for leitor in Leitor.objects.all()]

    @route.get("/{username}", response={200: PerfilSchema, 404: ErrorSchema})
    def listar_leitor(self, request, username: str):
        """Lista um leitor específico."""
        try:
            leitor = Leitor.objects.get(username=username)
            return {
                "leitor": {
                    "id": leitor.id,
                    "nome": leitor.nome,
                    "email": leitor.email,
                    "username": leitor.username,
                    "foto_perfil": f"http://127.0.0.1:8000{leitor.foto_perfil.url.replace('/media', '')}" if leitor.foto_perfil else "",
                    "biografia": leitor.biografia,
                }, 
                "seguidores": leitor.seguidores.count(),
                "seguindo": leitor.seguindo.count(),
                "seguidor": leitor in request.user.seguindo.all()
            }
        except Leitor.DoesNotExist:
            return 404, {"message": "Leitor não encontrado"}