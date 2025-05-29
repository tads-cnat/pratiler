from django.test import TestCase
from mainapp.models import *
# Create your tests here.
# Passo 1: Selecionar as classes para as quais
# iremos construir testes de unidade.
# Passo 2: Construir uma classe de testes no
# arquivo tests.py
# Passo 3: Herdar da classe TestCase
# Passo 4: Criar os métodos de teste.
# ◦ Devem iniciar com a palavra “test”.
# ◦ Devem testar condições de sucesso e falha.

class GerenciarEstanteTestCase(TestCase):
    # Cria os dados necessários para os testes
    def setUp(self):
        # LIVROS
        # Livro 1
        self.livro = Livro.objects.create(
            titulo="O Senhor dos Anéis: A Sociedade do Anel",
            sinopse="Uma jornada épica pela Terra Média.",
            capa="https://example.com/capa.jpg",
            isbn="978-3-16-148410-0",
            n_paginas=423,
            autor=Autor.objects.create(nome="J.R.R. Tolkien")
        )

        # Livro 2
        self.livro2 = Livro.objects.create(
            titulo="O Hobbit",
            sinopse="A aventura de Bilbo Bolseiro.",
            capa="https://example.com/capa2.jpg",
            isbn="978-3-16-148410-1",
            n_paginas=310,
            autor=Autor.objects.create(nome="J.R.R. Tolkien")
        ) 
        # Livro 3 
        self.livro3 = Livro.objects.create(
            titulo="1984",
            sinopse="Uma distopia sobre vigilância e controle.",
            capa="https://example.com/capa3.jpg",
            isbn="978-3-16-148410-2",
            n_paginas=328,
            autor=Autor.objects.create(nome="George Orwell")
        )
        # Livro 4 
        self.livro4 = Livro.objects.create(
            titulo="Dom Casmurro",
            sinopse="A história de Bentinho e Capitu.",
            capa="https://example.com/capa4.jpg",
            isbn="978-3-16-148410-3",
            n_paginas=256,
            autor=Autor.objects.create(nome="Machado de Assis")
        )
        # Livro 5 
        self.livro5 = Livro.objects.create(
            titulo="A Moreninha",
            sinopse="Um romance sobre amor e ciúmes.",
            capa="https://example.com/capa5.jpg",
            isbn="978-3-16-148410-4",
            n_paginas=200,
            autor=Autor.objects.create(nome="Joaquim Manuel de Macedo")
        )

        # LEITORES E INTERAÇÕES
        # Leitor 1 
        self.leitor1 = Leitor.objects.create_user(nome="Ramon Vieira", username="Romeu", email="romeu@email.com", password="coxinha123")
        
        # Interação do Leitor 1 com o Livro
        self.interacao = Interacao.objects.create(
            leitor1=self.leitor,
            livro=self.livro,
            status='LN',  # Lendo
            pg_atual=0 
        )

        # Leitor 2
        self.leitor2 = Leitor.objects.create_user(nome="Paulo Ricardo", username="RicardoP", email="ricard@email.com", password="batata123")

        # Leitor 3
        self.leitor3 = Leitor.objects.create_user(nome="Paulo Ricardo", username="Maria", email="Marianita@email.com", password="pastel123")

    # Testes
    # 01 - Adicionar livro que já existe na estante
    # 02 - Listar livros que o leitor está lendo
    # 03 - Listar livros que o leitor quer ler  
    # 04 - Listar livros que o leitor está leu 


       
