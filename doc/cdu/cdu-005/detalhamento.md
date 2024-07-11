# CDU005. Autenticar usuário

- **Ator principal**: Usuário (moderador ou leitor)
- **Atores secundários**:	
- **Resumo**: Usuário poderá se cadastrar ou se autenticar na plataforma, a fim de utilizá-la.
- **Pré-condição**:
- **Pós-Condição**: O usuário deverá estar cadastrado ou autenticado, e com livre acesso das suas respectivas atividades.

## Fluxo Principal
&emsp;&emsp;O usuário, após acessar o link para acesso do site, será levado à página de login, para se autenticar.<br>
&emsp;&emsp;Após preencher os campos definidos com seus dados, os dados enviados serão conferidos, e com sucesso, o usuário estará autenticado e com acesso a plataforma.

## Fluxo Alternativo I - Usuário não tem conta
&emsp;&emsp;Caso o usuário não tenha nenhuma conta cadastrada, ele será levado à página de cadastro, onde terá que preencher dados além dos dados de autenticação para cadastrar e autenticar sua conta.<br>
&emsp;&emsp;Após o cadastro ter sucesso, o usuário estará autenticado com sua nova conta.

## Fluxo Alternativo II - Falha no login
&emsp;&emsp;Caso o usuário não complete a autenticação de sua conta, por conta de um dado mal inserido, receberá uma mensagem informando que os dados de e-mail ou senha não estão corretos.<br>
&emsp;&emsp;Em caso de senha incorreta, o usuário terá a opção de recriá-la, informando correntamente email cadastrado e acessando-o, clicando no link de acesso único e expirável e, por conseguinte, poderá cadastrar uma nova senha.

## Fluxo de Exceção I - Falha no cadastro
&emsp;&emsp;Caso haja algum problema em algum dado do cadastro do usuário, seu cadastro não será completo e o usuário será notificado a respeito da não conclusão do cadastro e será redirecionado para a página de login.

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
