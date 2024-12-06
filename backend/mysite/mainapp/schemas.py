from ninja import ModelSchema, Schema
from django.contrib.auth.models import User
from .models import Autor, Livro, Leitor, Resenha

class SignInSchema(Schema):
    email: str
    password: str

class RegisterSchema(Schema):
    email: str
    password: str
    username: str

class AutorSchema(ModelSchema):
    class Config:
        model = Autor
        model_fields = '__all__'  # Defini todos os campos para a API

class LivroSchema(ModelSchema):
    class Config:
        model = Livro 
        model_fields = '__all__'

class UserSchema(ModelSchema):
    class Config:
        model = User
        model_fields = ['id', 'username', 'email', 'first_name', 'last_name']

class LeitorSchema(ModelSchema):
    class Config:
        model = Leitor
        model_fields = '__all__'

class ResenhaSchema(ModelSchema):
     class Config:
         model = Resenha 
         model_fields = '__all__' 

# class ComentarioSchema(ModelSchema):
#     class Config:
#         model = Comentario  
#         model_fields = ['id', 'livro', 'leitor', 'texto', 'data_hora', 'pagina_final']