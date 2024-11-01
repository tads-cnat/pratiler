# CDU020. Alterar senha por link

- **Ator principal**: Usuário (visitante ou leitor)
- **Atores secundários**:	
- **Resumo**: Usuário confirma link recebido para alterar sua senha 
- **Pré-condição**: Ter recebido o link de alteração de senha
- **Pós-Condição**: Usuário tem sua senha alterada

## Fluxo Principal
1. Usuário confirma solicitação pelo link enviado no e-mail
2. Sistema leva usuário para tela de troca de senha
3. Usuário digita e redigita abaixo senha nova
4. Usuário confirma a troca de senha
5. Usuário é redirecionado para a página onde solicitou a alteração

## Fluxo de Exceção I - Senhas não conferem 
1. Usuário confirma a troca de senha
2. Sistema notifica usuário informando que a senha digitada não é igual a senha redigitada

## Fluxo de Exceção II - Link expirado 
1. Usuário confirma solicitação pelo link enviado no e-mail
2. Sistema informa que o link acessado foi expirado por passar do tempo limite de acesso

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
