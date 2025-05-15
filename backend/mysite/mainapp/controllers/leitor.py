from django.http import JsonResponse
from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Leitor
from mainapp.schemas import LeitorSchema, PerfilSchema, UserSchema


@api_controller("/leitores", auth=JWTAuth(), tags=["Leitores"])
class LeitorController:
    @route.get("", response=list[LeitorSchema])
    def listar_leitores(self, request):
        """Lista todos os leitores."""
        return Leitor.objects.all()

    @route.get("/{username}", response=PerfilSchema)
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
            return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)

    @route.get("/{leitor_id}/user", response=UserSchema)
    def listar_user_do_leitor(self, request, leitor_id: int):
        """Lista um User (Django) específico"""
        try:
            leitor = Leitor.objects.get(id=leitor_id)
            user = leitor.user_django
            return user
        except Leitor.DoesNotExist:
            return JsonResponse({"detalhe": "leitor não encontrado"}, status=404)