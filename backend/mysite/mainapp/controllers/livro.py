from django.shortcuts import get_object_or_404
from ninja_extra import api_controller, route
from ninja_jwt.authentication import JWTAuth
from mainapp.models import Autor, Interacao, Livro
from mainapp.schemas import LivroSchema, LivroSchemaIn

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

    @route.get("/livros-disponiveis")
    def livros_disponiveis(self, request):
        try:
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
        except Livro.DoesNotExist:
            return {"detail": "Livros não encontrados"}, 404
        
    @route.post("/salvar-livro")
    def adicionar_livro(self, request, livro: LivroSchemaIn):
        livro_existencia = Livro.objects.filter(isbn=livro.isbn)

        if not livro_existencia:
            autor_livro = Autor.objects.filter(nome=livro.autor).first()
            if not autor_livro:
                autor_livro = Autor.objects.create(nome=livro.autor)

            Livro.objects.create(
                titulo=livro.titulo,
                sinopse=livro.sinopse,
                capa=livro.capa,
                n_paginas=livro.n_paginas,
                isbn =livro.isbn,
                autor=autor_livro,
            )

    @route.get("/buscar-livro/{livro_isbn}", response=LivroSchema)
    def buscar_livro(self, request, livro_isbn: str):
        livro_get = get_object_or_404(Livro, isbn=livro_isbn)
        return livro_get