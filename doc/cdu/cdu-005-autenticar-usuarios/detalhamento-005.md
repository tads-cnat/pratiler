# CDU005. Autenticar usuário

- **Ator principal**: Usuário (moderador ou leitor)
- **Atores secundários**:	
- **Resumo**: Usuário poderá se autenticar na plataforma, a fim de utilizá-la.
- **Pré-condição**: O usuário não estar logado/autenticado ainda. 
- **Pós-Condição**: O usuário deverá estar autenticado, e com livre acesso das suas respectivas atividades.

## Fluxo Principal
&emsp;&emsp;O usuário, após acessar o link para acesso do site, será levado à página de login, para se autenticar.<br>
&emsp;&emsp;Após preencher os campos definidos com seus dados, os dados enviados serão conferidos, e com sucesso, o usuário estará autenticado e com acesso a plataforma.

## Fluxo Alternativo I - Usuário não tem conta
&emsp;&emsp;Caso o usuário não tenha nenhuma conta cadastrada, ele pode optar por se cadastrar, assim sendo levado ao [CDU006. Cadastrar Usuário](../cdu-006-cadastrar-usuario/detalhamento-006.md)<br>

## Fluxo Alternativo II - Falha no login
&emsp;&emsp;Caso o usuário não complete a autenticação de sua conta, por conta de um dado mal inserido ele terá a opção de tentar preencher novamente.<br>

## Fluxo Alternativo III - Senha incorreta
&emsp;&emsp;Em caso de senha incorreta, o usuário poderá optar por trocar sua senha e então será levado ao [CDU007. Alteração de senha](../cdu-007-solicitar-alteracao-de-senha/detalhamento-007.md).

> Obs. as seções a seguir apenas serão utilizadas na segunda unidade do PDSWeb (segundo orientações do gerente do projeto).

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
