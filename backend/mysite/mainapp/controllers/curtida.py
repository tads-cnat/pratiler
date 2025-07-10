from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth

from mainapp.models import Curtida, Postagem
from mainapp.schemas import CurtidaSchema

@api_controller("/curtidas", auth=JWTAuth(), tags=["Curtidas"])
class CurtidaController:
    @route.post("", response=int)
    def curtir_postagem(self, request, curtida: CurtidaSchema):
        leitor = request.user
        postagem = Postagem.objects.get(id=curtida.postagem_id)
        curtida = Curtida.objects.filter(postagem=postagem, leitor_id=leitor.id)
        if curtida:
            curtida.delete()
        else:
            Curtida.objects.create(postagem=postagem, leitor_id=leitor.id)
        return Curtida.objects.filter(postagem=postagem).count()