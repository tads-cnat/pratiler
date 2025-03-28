from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Autor
from mainapp.schemas import AutorSchema


@api_controller("/autores", auth=JWTAuth(), tags=["Autores"])
class AutorController:
    @route.get("", response=list[AutorSchema])
    def listar_autores(self, request):
        """Lista todos os autores."""
        return Autor.objects.all()