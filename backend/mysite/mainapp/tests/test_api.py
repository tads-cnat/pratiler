import requests
import pytest

BASE_URL = "http://localhost:8000/api/"


def get_auth_token():
    login_data = {"username": "admin@example.com", "password": "senha123"}
    response = requests.post(f"{BASE_URL}login/", json=login_data)
    assert response.status_code == 200
    return response.json()["access_token"]  # Adapte para o formato da sua API


# 2. Use o token nos testes
def test_protected_endpoint():
    token = get_auth_token()
    headers = {"Authorization": f"Bearer {token}"}

    response = requests.get(f"{BASE_URL}protected/", headers=headers)
    assert response.status_code == 200
