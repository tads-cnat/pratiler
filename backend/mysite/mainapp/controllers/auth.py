
from django.contrib.auth import authenticate, login, logout
from ninja_extra import route, api_controller
from ninja_jwt.authentication import JWTAuth
from ninja_jwt.controller import NinjaJWTDefaultController
from mainapp.models import Leitor
from mainapp.schemas import SignInSchema, RegisterSchema
from django.http import JsonResponse

@api_controller("/auth", tags=["Autenticação"])
class AuthController(NinjaJWTDefaultController):
    @route.post("/login")
    def login_view(self, request, payload: SignInSchema):
        try:
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
            return JsonResponse({"message": "Credenciais inválidas, por favor tente novamente"}, status=400)
        except Exception:
            return JsonResponse({"message": "Credenciais inválidas, por favor tente novamente"}, status=400)

    @route.get("/logout", auth=JWTAuth())
    def logout_view(self, request):
        logout(request)
        return {"message": "Logged out"}

    @route.post("/register")
    def register(self, request, payload: RegisterSchema):
        try:
            Leitor.objects.create_user(nome=payload.nome, username=payload.username, email=payload.email, password=payload.password)
            return {"success": "User registered successfully"}
        except Exception as e:
            if "UNIQUE constraint failed" in str(e):
                return {"error": "Email ou nome de usuário já está em uso."}
            return {"error": str(e)}