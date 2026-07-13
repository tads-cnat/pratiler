# SMELL 1: Wildcard Import (Importar com *)
from math import *  

# SMELL 2: Comparação redundante com Booleanos ou None
def checar_status(usuario):
    if usuario.is_active == True:
        return "Ativo"
    
    variavel_inutil = "Nao sirvo para nada" # SMELL 3: variável inútil
    return "Inativo"

