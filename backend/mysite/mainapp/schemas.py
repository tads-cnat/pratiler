from typing import Optional, Literal
from pydantic import HttpUrl
from ninja import Schema

class LivroSchema(Schema):
    id: int
    titulo:str 
    descricao:Optional[str]
    capa:  Optional[HttpUrl]
    isbn: str
    n_paginas:int
    autor:str 

class AutorSchema(Schema):
    id: int
    nome: str

# falta comentario, resenha, avaliacao, curtida e interage 


