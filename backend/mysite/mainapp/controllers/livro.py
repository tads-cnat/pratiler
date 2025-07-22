from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Autor, Interacao, Livro
from mainapp.schemas import ErrorSchema, LivroSchema, LivroSchemaIn

@api_controller("/livros", auth=JWTAuth(), tags=["Livros"])
class LivroController:
    @route.get("", response=list[LivroSchema])
    def listar_livros(self, request):
        livros = Livro.objects.select_related('autor').all()
        return [{
                "id": livro.id,
                "titulo": livro.titulo,
                "sinopse": livro.sinopse,
                "isbn": livro.isbn,              
                "n_paginas": livro.n_paginas,    
                "autor":{
                        "id": livro.autor.id,
                        "nome": livro.autor.nome
                },
                "capa": livro.capa,
            } for livro in livros]
    
    @route.get("/resenha", response=list[LivroSchema])
    def listar_livros_para_escrever_resenha(self, request):
        resenhas_leitor = request.user.resenha_set.all().values_list('livro_id', flat=True)
        interacao_leitor = request.user.interacao_set.select_related('livro').filter(status='LD')
        livros_para_resenha = interacao_leitor.exclude(livro__id__in=resenhas_leitor)

        return [{
                "id": interacao.livro.id,
                "titulo": interacao.livro.titulo,
                "sinopse": interacao.livro.sinopse,
                "isbn": interacao.livro.isbn,              
                "n_paginas": interacao.livro.n_paginas,    
                "autor":{
                        "id": interacao.livro.autor.id,
                        "nome": interacao.livro.autor.nome
                },
                "capa": interacao.livro.capa,
        } for interacao in livros_para_resenha]

    @route.get("/livros-disponiveis", response=list[LivroSchema])
    def livros_disponiveis(self, request):
        leitor = request.user
        interacoes_leitor = Interacao.objects.filter(leitor=leitor).values_list('livro_id', flat=True)
        livros_disponiveis = Livro.objects.exclude(id__in=interacoes_leitor)
        return [{
                "id": livro.id,
                "titulo": livro.titulo,
                "sinopse": livro.sinopse,
                "isbn": livro.isbn,  
                "n_paginas": livro.n_paginas,    
                "autor":{
                        "id": livro.autor.id,
                        "nome": livro.autor.nome
                },
                "capa": livro.capa,
            } for livro in livros_disponiveis]
        
    @route.post("", response=LivroSchema)
    def adicionar_livro(self, request, livro_in: LivroSchemaIn):
        livro = Livro.objects.filter(isbn=livro_in.isbn).first()
        if not livro:
            autor_livro = Autor.objects.filter(nome=livro_in.autor)
            if not autor_livro:
                autor_livro = Autor.objects.create(nome=livro_in.autor)

            livro = Livro.objects.create(
                titulo=livro_in.titulo,
                sinopse=livro_in.sinopse,
                capa=livro_in.capa,
                n_paginas=livro_in.n_paginas,
                isbn =livro_in.isbn,
                autor=autor_livro,
            )

        return {
            "id": livro.id,
            "titulo": livro.titulo,
            "sinopse": livro.sinopse,
            "isbn": livro.isbn,              
            "n_paginas": livro.n_paginas,    
            "autor":{
                    "id": livro.autor.id,
                    "nome": livro.autor.nome
            },
            "capa": livro.capa,
        }

    @route.get("/{isbn}", response={200: LivroSchema, 404: ErrorSchema})
    def buscar_livro(self, request, isbn: str):
        try:
            livro = Livro.objects.get(isbn=isbn)
            return {
                "id": livro.id,
                "titulo": livro.titulo,
                "sinopse": livro.sinopse,
                "isbn": livro.isbn,              
                "n_paginas": livro.n_paginas,    
                "autor":{
                        "id": livro.autor.id,
                        "nome": livro.autor.nome
                },
                "capa": livro.capa,
            }
        except Livro.DoesNotExist:
            return 404, {"message": "Livro não encontrado"}