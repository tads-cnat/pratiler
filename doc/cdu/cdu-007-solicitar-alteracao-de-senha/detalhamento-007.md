# CDU007. Solicitar Alteração de senha

- **Ator principal**: Usuário (moderador ou leitor)
- **Atores secundários**:	
- **Resumo**: Usuário realiza a solicitação para alterar sua senha, por problemas de esquecimento da anterior ou segurança.
- **Pré-condição**:
- **Pós-Condição**: Usuáro deverá ter sua senha atualizada de acordo com sua preferência.

## Fluxo Principal
1. Na tela do seu perfil, ou na tela de login o usuário seleciona a opção de alterar senha
2. Sistema solicita e-mail do usuário para envio de confirmação
3. Usuário envia e-mail para receber link de troca de senha
4. Sistema envia e-mail de confirmação para o e-mail enviado pelo usuário
5. Usuário confirma solicitação pelo link enviado no e-mail
6. Sistema leva usuário para tela de troca de senha
7. Usuário digita e redigita abaixo senha nova
8. Usuário confirma a troca de senha
9. Usuário é redirecionado para a página onde solicitou a alteração

## Fluxo de Exceção I - Senhas não conferem (Passo 8 - Fluxo principal)
1. Usuário confirma a troca de senha
2. Sistema notifica usuário informando que a senha digitada não é igual a senha redigitada
3. Passo 9 - Fluxo principal

## Fluxo de Exceção II - Link expirado (Passo 5 - Fluxo principal)
1. Usuário confirma solicitação pelo link enviado no e-mail
2. Sistema informa que o link acessado foi expirado por passar do tempo limite de acesso
3. Passo 9 - Fluxo principal

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
