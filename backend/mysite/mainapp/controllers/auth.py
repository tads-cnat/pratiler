
from django.contrib.auth import authenticate, login, logout
from django.middleware.csrf import get_token
from ninja_extra import route, api_controller
from ninja.security import django_auth
from mainapp.models import Leitor
from mainapp.schemas import SignInSchema, RegisterSchema, UserSchema

@api_controller("/auth", tags=["Autenticação"])
class AuthController:
    @route.get("/set-csrf-token")
    def set_csrf_token(self, request):
        return {"csrftoken": get_token(request)}

    @route.post("/login")
    def login_view(self, request, payload: SignInSchema):
        try:
            user = authenticate(request, username=payload.email, password=payload.password)
            if user is not None:
                login(request, user)
                return {"success": True}
            return {"success": False, "message": "Credenciais inválidas, por favor tente novamente"}
        except Exception:
            return {"success": False, "message": "Credenciais inválidas, por favor tente novamente"}

    @route.get("/logout", auth=django_auth)
    def logout_view(self, request):
        logout(request)
        return {"message": "Logged out"}

    @route.get("/user", auth=django_auth, response=UserSchema)
    def user(self, request):
        return {
            "id": request.user.id,
            "biografia": request.user.biografia,
            "username": request.user.username,
            "email": request.user.email,
            "foto_perfil": f"http://127.0.0.1:8000{request.user.foto_perfil.url.replace('/media', '')}" if request.user.foto_perfil else ""
        }

    @route.post("/register")
    def register(self, request, payload: RegisterSchema):
        try:
            Leitor.objects.create_user(username=payload.username, email=payload.email, password=payload.password)
            return {"success": "User registered successfully"}
        except Exception as e:
            if "UNIQUE constraint failed" in str(e):
                return {"error": "Email ou nome de usuário já está em uso."}
            return {"error": str(e)}