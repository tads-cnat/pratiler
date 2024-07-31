# CDU006. Cadastrar usuário

- **Ator principal**: Usuário (moderador ou leitor)
- **Atores secundários**:	
- **Resumo**: Usuário poderá se cadastrar na plataforma, a fim de utilizá-la.
- **Pré-condição**:
- **Pós-Condição**: O usuário deverá estar cadastrado e autenticado, com livre acesso das suas respectivas atividades.

## Fluxo Principal
&emsp;&emsp;O usuário, após acessar o link para acesso do site, será levado à página de login, e seleciona a opção "Cadastrar".<br>
&emsp;&emsp;Após preencher os campos definidos com seus dados para o cadastro, como nome, <i>username</i>, email, e senha, os dados enviados para cadastro serão conferidos, e com sucesso, o usuário estará cadastrado e autenticado com acesso a plataforma. Caso seja de sua escolha, poderá selecionar sua foto de perfil e capa do perfil, porém não são necessárias para o cadastro.

## Fluxo de Exceção I - Falha no cadastro
&emsp;&emsp;Caso o usuário falhe na conferência dos dados realizada pelo sistema, em situações de e-mail ou <i>username</i> já cadastrados, ele será notificado sobre qual falha ocorreu e retornará para a página de cadastro, podendo assim tentar novo cadastro com outros dados.<br>

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
