from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from ninja_extra import route, api_controller
from ninja_jwt.authentication import JWTAuth
from ninja_jwt.controller import NinjaJWTDefaultController
from mainapp.models import Leitor
from mainapp.schemas import ErrorSchema, SignInSchema, RegisterSchema, UserSchema


@api_controller("/auth", tags=["Autenticação"])
class AuthController(NinjaJWTDefaultController):
    @route.post("/login", response={200: UserSchema, 400: ErrorSchema})
    def login_view(self, request, payload: SignInSchema):
        user = authenticate(request, username=payload.email, password=payload.password)
        if user is not None:
            login(request, user)
            return {
                    "id": request.user.id,
                    "nome": request.user.nome,
                    "biografia": request.user.biografia,
                    "username": request.user.username,
                    "email": request.user.email,
                    "foto_perfil": f"http://127.0.0.1:8000{request.user.foto_perfil.url.replace('/media', '')}" if request.user.foto_perfil else ""
                }
        return 400, {"message": "E-mail ou senha inválidos, por favor tente novamente"}

    @route.get("/logout", auth=JWTAuth())
    def logout_view(self, request):
        logout(request)

    @route.post("/register", response={200: UserSchema, 400: ErrorSchema})
    def register(self, request, payload: RegisterSchema):
        try:
            leitor = Leitor.objects.create_user(nome=payload.nome, username=payload.username, email=payload.email, password=payload.password)
            return {
                    "id": leitor.id,
                    "nome": leitor.nome,
                    "biografia": leitor.biografia,
                    "username": leitor.username,
                    "email": leitor.email,
                    "foto_perfil": f"http://127.0.0.1:8000{leitor.foto_perfil.url.replace('/media', '')}" if leitor.foto_perfil else ""
                }
        except IntegrityError as e:
            error_message = str(e)
            return 400, {"message": "Email ou nome de usuário já está em uso." if "UNIQUE constraint failed" in error_message else error_message}