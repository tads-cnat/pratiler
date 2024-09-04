from .models import Comentario, Usuario
import datetime
from django.utils import timezone

class VerLivrosPopularesService():
    def VerLivrosPopulares():
        #ver comentários mais recentes
        data_recente = timezone.now() - datetime.timedelta(days=15) # cálculo de 15 dias atras
        comentarios_recentes = []
        comentarios = Comentario.objects.all() # todos os comentários
        for i in comentarios:
            if  data_recente <= i.data_hora <= timezone.now():
                comentarios_recentes.append(i) # adiciona os comentários mais recentes
        #ver quais são os livros dos comentários recentes
        livros = [] # vetor de livros
        if(len(comentarios_recentes) >= 3):
            for i in comentarios_recentes:
                if not(i.livro in livros): # evitar repetição
                    livros.append(i.livro) # adiciona livro do comentário sem repetição
        #ver quais são os livros com mais comentários recentes
        livros_populares = [] # livros populares
        if len(livros) >= 3:
            for x in range(0, 3): # só vai mostrar três livros
                mais_comentarios = 0
                livro_popular = livros[0] 
                for l in livros: 
                    if l.comentario_set.count() > mais_comentarios:
                        mais_comentarios = l.comentario_set.count()
                        livro_popular = l
                livros_populares.append(livro_popular)
                livros.remove(livro_popular)
        return livros_populares # retorna os 3 livros mais populares 

class ComentariosRecentesService():
    def ComentariosRecentesGeral():
        data_recente = timezone.now() - datetime.timedelta(days=15)
        comentarios_recentes = []
        comentarios = Comentario.objects.all() # todos os comentários
        for i in comentarios:
            if  data_recente <= i.data_hora <= timezone.now():
                comentarios_recentes.append(i)
        return comentarios_recentes
    
    def ComentariosRecentesUsuario(usuario):
        data_recente = timezone.now() - datetime.timedelta(days=15)
        comentarios = usuario.comentario_set.all()
        comentarios_recentes = []
        for i in comentarios:
            if  data_recente <= i.data_hora <= timezone.now():
                comentarios_recentes.append(i)
        return comentarios_recentes
    
    def ComentariosRecentesSeguindo(id):
        user = Usuario.objects.get(pk=id)
        users_seguindo = user.seguindo
        comentarios_recentes_todos = []
        if users_seguindo.count() > 0:  
            for i in users_seguindo.all():
                comentarios_recentes = []
                comentarios_recentes = ComentariosRecentesService.ComentariosRecentesUsuario(i)
                for x in comentarios_recentes:
                    comentarios_recentes_todos.append(x)
            comentarios_recentes_todos.sort(key=lambda x: x.data_hora, reverse=True)
        return comentarios_recentes_todos
    
class ComentariosRelevantesService():
    def ComentariosRelevantes():
        comentarios = ComentariosRecentesService.ComentariosRecentesGeral()
        comentarios_relevantes = []
        if len(comentarios) > 10:
            for i in range(0, 10):
                if comentarios[i].curtida_set.count() > 2:
                    comentarios_relevantes.append(comentarios[i])
        else:
            for i in comentarios:
                if i.curtida_set.count() > 2:
                    comentarios_relevantes.append(i)
        return comentarios_relevantes