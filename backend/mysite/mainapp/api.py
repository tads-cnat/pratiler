from ninja_extra import NinjaExtraAPI

from mainapp.controllers.auth import AuthController
from mainapp.controllers.autor import AutorController
from mainapp.controllers.avaliacao import AvaliacaoController
from mainapp.controllers.curtida import CurtidaController
from mainapp.controllers.interacao import InteracaoController
from mainapp.controllers.leitor import LeitorController
from mainapp.controllers.livro import LivroController
from mainapp.controllers.postagem import PostagemController
from mainapp.controllers.resenha import ResenhaController

api = NinjaExtraAPI(title="Pratiler API", version="1.0.0", description="API do PDS Pratiler", urls_namespace="pratiler")
api.register_controllers(AuthController,
                          AutorController,
                          AvaliacaoController,
                          CurtidaController,
                          InteracaoController,
                          LeitorController,
                          LivroController,
                          PostagemController,
                          ResenhaController)