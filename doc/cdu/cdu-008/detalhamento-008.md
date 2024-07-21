# CDU008. Alteração de senha

- **Ator principal**: Usuário (moderador ou leitor)
- **Atores secundários**:	
- **Resumo**: Usuário altera a sua senha, por problemas de esquecimento da anterior ou segurança.
- **Pré-condição**: Usuário terá que ter um link válido para troca de senha
- **Pós-Condição**: O usuário deverá estar com a sua senha atualizada de acordo com sua preferência.

## Fluxo principal

1. Usuário acessa link de troca de senha
2. Sistema leva usuário para tela de troca de senha
3. Usuário digita e redigita abaixo senha nova
4. Usuário confirma a troca de senha

## Fluxo de Exceção I - Senhas não conferem (Passo 4 - Fluxo principal)

1. Usuário confirma a troca de senha
2. Sistema notifica usuário informando que a senha digitada não é igual a senha redigitada
3. Passo 2 - Fluxo principal

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
