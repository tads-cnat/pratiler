# CDU018. Autenticar usuário

- **Ator principal**: Visitante
- **Atores secundários**:	
- **Resumo**: Visitante poderá se autenticar na plataforma, a fim de utilizá-la.
- **Pré-condição**: O visitante não estar logado/autenticado ainda. 
- **Pós-Condição**: O visitante deverá estar autenticado como leitor, e com livre acesso das suas respectivas atividades.

## Fluxo Principal
&emsp;&emsp;O usuário, após acessar o endereço para acesso do site, será levado à página de login, para se autenticar.<br>
&emsp;&emsp;Após preencher os campos definidos com suas credenciais de e-mail, ou *username*, e senha, as credenciais serão conferidas, e com sucesso, o usuário estará autenticado e com acesso a plataforma.

## Fluxo Alternativo I - usuário não tem conta
&emsp;&emsp;Caso o usuário não tenha nenhuma conta cadastrada, ele pode optar por se cadastrar, assim sendo levado ao [CDU005. Cadastrar usuário](../cdu-005-cadastrar-usuario/detalhamento-005.md)<br>

## Fluxo Alternativo II - Falha no login
&emsp;&emsp;Caso o usuário não complete a autenticação de sua conta, por conta de uma credencial mal inserida ele terá a opção de tentar preencher com suas credenciais novamente.<br>

## Fluxo Alternativo III - Recuperação de senha
1. Na tela do seu perfil em configurações, ou na tela de login o usuário seleciona a opção de alterar senha
4. Sistema envia e-mail de confirmação para o e-mail cadastrado nos dados do usuário


> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
