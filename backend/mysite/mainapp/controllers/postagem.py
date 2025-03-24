from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Curtida, Interacao, Livro, Postagem
from mainapp.schemas import CurtidaSchema, PostagemListSchemaOut, PostagemSchemaOut


@api_controller("/postagens", auth=JWTAuth(), tags=["Postagens"])
class PostagemController:
    @route.post("/", response=PostagemSchemaOut)
    def criar_postagem(self, request, postagem: PostagemSchemaOut):

        livro_id = postagem.livro_id
        livro = Livro.objects.get(id=livro_id)
        if livro.n_paginas < postagem.pagina_final:
            return {"detail": "Página final maior que o total de páginas do livro"}, 400
        leitor = request.user
        interacao = Interacao.objects.get(livro_id=livro_id, leitor_id=leitor.id)

        nova_postagem = Postagem.objects.create(
            interacao=interacao,
            texto=postagem.texto,
            pagina_inicial=postagem.pagina_inicial,
            pagina_final=postagem.pagina_final
        )

        interacao.pg_atual = postagem.pagina_final
        interacao.save()

        return {
            "id": nova_postagem.id,
            "interacao": nova_postagem.interacao.id,
            "texto": nova_postagem.texto,
            "pagina_inicial": nova_postagem.pagina_inicial,
            "pagina_final": nova_postagem.pagina_final,
            "data_hora": nova_postagem.data_hora.isoformat(),
            "leitor": {
                "id": nova_postagem.interacao.leitor.id,
                "username": nova_postagem.interacao.leitor.username
            },
            "livro": {
                "id": nova_postagem.interacao.livro.id,
                "titulo": nova_postagem.interacao.livro.titulo,
                "sinopse": nova_postagem.interacao.livro.sinopse,
                "isbn": nova_postagem.interacao.livro.isbn,              
                "n_paginas": nova_postagem.interacao.livro.n_paginas,    
                "autor":{
                        "id": nova_postagem.interacao.livro.autor.id,
                        "nome": nova_postagem.interacao.livro.autor.nome
                },
                "capa": nova_postagem.interacao.livro.capa,
            }
        }

    @route.get("/", response=list[PostagemListSchemaOut])
    def listar_postagens(self, request):
        postagens = Postagem.objects.all()
        return [
            {
                "id": postagem.id,
                "texto": postagem.texto,
                "pagina_inicial": postagem.pagina_inicial,
                "pagina_final": postagem.pagina_final,
                "data_hora": postagem.data_hora.isoformat(),
                "curtidas": Curtida.objects.filter(postagem_id=postagem.id).count(),
                "curtido": bool(Curtida.objects.filter(postagem_id=postagem.id, leitor_id=request.user.id)),
                "leitor": {
                    "id": postagem.interacao.leitor.id,
                    "username": postagem.interacao.leitor.username
                },
                "livro": {
                    "id": postagem.interacao.livro.id,
                    "titulo": postagem.interacao.livro.titulo,
                    "sinopse": postagem.interacao.livro.sinopse,
                    "isbn": postagem.interacao.livro.isbn,              
                    "n_paginas": postagem.interacao.livro.n_paginas,    
                    "autor":{
                            "id": postagem.interacao.livro.autor.id,
                            "nome": postagem.interacao.livro.autor.nome
                    },
                    "capa": postagem.livro.capa,
                }
            }
            for postagem in postagens
        ]
    @route.post("/curtir", response=int)
    def curtir_postagem(self, request, curtida: CurtidaSchema):
        leitor = request.user
        postagem = Postagem.objects.get(id=curtida.postagem_id)
        curtida = Curtida.objects.filter(postagem=postagem, leitor_id=leitor.id)
        if curtida:
            curtida.delete()
        else:
            Curtida.objects.create(postagem=postagem, leitor_id=leitor.id)
        return Curtida.objects.filter(postagem=postagem).count()