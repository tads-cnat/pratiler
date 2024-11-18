from ninja import Schema

class SignInSchema(Schema):
    email: str
    password: str