from django.test import TestCase
from django.db import IntegrityError
from mainapp.models import *

class GerenciarEstanteTestCase(TestCase):
    def test_adicionar_livro_na_estante_com_sucesso(self):
        self.leitor_add = Leitor.objects.create_user(nome="Paulo Ricardo", username="Maria3", email="Marianita@email.com", password="pastel123")

        self.livro_add = Livro.objects.create(
            titulo="Livro Teste",
            sinopse="Livro para teste.",
            capa="https://example.com/capa.jpg",
            isbn="978-3-16-1422310-0",
            n_paginas=423,
            autor=Autor.objects.create(nome="Fulano de Tal")
        )

        self.interacao_add = Interacao.objects.create(
            leitor=self.leitor_add,
            livro=self.livro_add,
            status='LN',
            pg_atual=0
        )

        self.assertEqual(self.interacao_add.livro, self.livro_add)
        self.assertEqual(self.interacao_add.leitor, self.leitor_add)
        self.assertEqual(self.interacao_add.status, 'LN')
        self.assertEqual(self.interacao_add.pg_atual, 0)
        
    def test_livros_lendo(self):
        leitor = Leitor.objects.create_user(nome="João Roberto", username="JoaoR", email="joaorobert0@gmail.com", password="joao123")

        l1 = Livro.objects.create(
            titulo="Livro Teste",
            sinopse="Livro para teste.",
            capa="https://example.com/capa.jpg",
            isbn="978-3-16-1422310-0",
            n_paginas=423,
            autor=Autor.objects.create(nome="Fulano de Tal")
        )
        
        l2 = Livro.objects.create(
            titulo="Livro Teste 2",
            sinopse="Outro livro para teste.",
            capa="https://example.com/capa2.jpg",
            isbn="978-3-16-1422310-1",
            n_paginas=300,
            autor=Autor.objects.create(nome="Ciclano de Tal")
        )

        l3 = Livro.objects.create(
            titulo="Livro Teste 3",
            sinopse="Mais um livro para teste.",
            capa="https://example.com/capa3.jpg",
            isbn="978-3-16-1422310-2",
            n_paginas=250,
            autor=Autor.objects.create(nome="Beltrano de Tal")
        )

        for livro in [l1, l2, l3]:
            Interacao.objects.create(
                leitor=leitor,
                livro=livro,
                status='LN',  
                pg_atual=0
            )
        
        self.assertEqual(Interacao.objects.filter(leitor=leitor, status='LN').count(), 3)
   

    def test_livros_quero_ler(self):
        leitor = Leitor.objects.create_user(nome="Maria Joaquina", username="marijoaquina", email="mariajoaquina@gmail.com", password="maria123")

        l1 = Livro.objects.create(
            titulo="Livro Teste",
            sinopse="Livro para teste.",
            capa="https://example.com/capa.jpg",
            isbn="978-3-16-1422310-0",
            n_paginas=423,
            autor=Autor.objects.create(nome="Fulano de Tal")
        )
        
        l2 = Livro.objects.create(
            titulo="Livro Teste 2",
            sinopse="Outro livro para teste.",
            capa="https://example.com/capa2.jpg",
            isbn="978-3-16-1422310-1",
            n_paginas=300,
            autor=Autor.objects.create(nome="Ciclano de Tal")
        )


        for livro in [l1, l2]:
            Interacao.objects.create(
                leitor=leitor,
                livro=livro,
                status='QL',
                pg_atual=0
            )
        
        self.assertEqual(Interacao.objects.filter(leitor=leitor, status='QL').count(), 2)
    
    def test_livros_lido(self):
        leitor = Leitor.objects.create_user(nome="Felipe Ale", username="lipeAlves", email="lipeeeeeee@gmail.com", password="lipe-é-um-bom-gerente")

        l1 = Livro.objects.create(
            titulo="Livro Teste",
            sinopse="Livro para teste.",
            capa="https://example.com/capa.jpg",
            isbn="978-3-16-1422310-0",
            n_paginas=423,
            autor=Autor.objects.create(nome="Fulano de Tal")
        )
        
        l2 = Livro.objects.create(
            titulo="Livro Teste 2",
            sinopse="Outro livro para teste.",
            capa="https://example.com/capa2.jpg",
            isbn="978-3-16-1422310-1",
            n_paginas=300,
            autor=Autor.objects.create(nome="Ciclano de Tal")
        )

        l3 = Livro.objects.create(
            titulo="Livro Teste 3",
            sinopse="Mais um livro para teste.",
            capa="https://example.com/capa3.jpg",
            isbn="978-3-16-1422310-2",
            n_paginas=250,
            autor=Autor.objects.create(nome="Beltrano de Tal")
        )

        for livro in [l1, l2, l3]:
            Interacao.objects.create(
                leitor=leitor,
                livro=livro,
                status='LD',
                pg_atual=0
            )
        
        self.assertEqual(Interacao.objects.filter(leitor=leitor, status='LD').count(), 3)

    def test_adicionar_livro_ja_adicionado(self):
        self.leitor_add = Leitor.objects.create_user(nome="Maria Joaquina", username="marijoaquina", email="marianita@email.com", password="pastel123")

        self.livro_add = Livro.objects.create(
            titulo="Livro Teste",
            sinopse="Livro para teste.",
            capa="https://example.com/capa.jpg",
            isbn="978-3-16-1422310-0",
            n_paginas=423,
            autor=Autor.objects.create(nome="Fulano de Tal")
        )

        self.interacao_add_1 = Interacao.objects.create(
            leitor=self.leitor_add,
            livro=self.livro_add,
            status='LN',
            pg_atual=0
        )
        
        with self.assertRaises(IntegrityError):
            self.interacao_add_2 = Interacao.objects.create(
                leitor=self.leitor_add,
                livro=self.livro_add,
                status='LN',
                pg_atual=0
            )