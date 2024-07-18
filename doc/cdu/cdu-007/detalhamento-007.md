# CDU007. Alteração de senha

- **Ator principal**: Usuário (moderador ou leitor)
- **Atores secundários**:	
- **Resumo**: Usuário poderá alterar a sua senha, por problemas de esquecimento da anterior ou segurança.
- **Pré-condição**: Usuário precisa ter uma conta cadastrada
- **Pós-Condição**: O usuário deverá estar com sua senha atualizada de acordo com a preferida.

## Fluxo Principal
1. Usuário seleciona a opção de alterar senha
2. Sistema solicita e-mail do usuário para envio de confirmação
3. Usuário envia e-mail para receber link de troca de senha
4. Sistema envia e-mail de confirmação para o e-mail cadastrado do usuário
5. Usuário recebe e-mail e confirma solicitação
6. Sistema redireciona usuário para troca de senha
7. Usuário digita nova senha e redigita logo abaixo
8. Usuário confirma troca de senha
9. Sistema confere senhas e confirma a troca
10. Usuário é redirecionado a página de login

## Fluxo de Exceção I - Senhas não conferem (Passo 6 - Fluxo Principal)
1. Usuário confirma troca de senha
2. Sistema notifica usuário que as senhas não conferem
3. retorna ao passo 5 do Fluxo principal
   
> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
