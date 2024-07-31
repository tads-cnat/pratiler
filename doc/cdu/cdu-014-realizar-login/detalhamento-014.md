# CDU014. Realizar login

- **Ator principal**: Usuário
- **Atores secundários**:	 
- **Resumo**: Usuário poderá se autenticar no sistema fornecendo suas credenciais de login.
- **Pré-condição**: Usuário deve ter uma conta registrada no sistema.
- **Pós-Condição**: Usuário estará autenticado e poderá acessar as funcionalidades do sistema.

## Fluxo Principal
1. &emsp;O usuário acessa a página de login.
2. &emsp;O usuário insere seu nome de usuário e senha nos campos apropriados.
3. &emsp;O usuário clica no botão de login para submeter as credenciais.
4. &emsp;O sistema verifica as credenciais fornecidas:
   - &emsp;Se as credenciais estiverem corretas, o sistema autentica o usuário.
5. &emsp;O sistema redireciona o usuário para a página inicial, onde ele pode acessar as funcionalidades do sistema.

## Fluxo de Exceção I - Credenciais inválidas
1. &emsp;Se o sistema verificar que as credenciais fornecidas são inválidas:
   - &emsp;O sistema exibe uma mensagem de erro informando que o nome de usuário ou senha estão incorretos.
   - &emsp;O usuário permanece na página de login e pode tentar novamente.

## Fluxo de Exceção II - Campos obrigatórios não preenchidos
1. &emsp;Se o usuário tentar submeter o formulário de login sem preencher todos os campos obrigatórios:
   - &emsp;O sistema exibe uma mensagem informando que todos os campos devem ser preenchidos.
   - &emsp;O usuário permanece na página de login e pode preencher os campos faltantes.

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...