# Documento de Visão

## Histórico de Revisões

| Data                |  Versão             |          Descrição  |  Autores            |
| :------------------ | :------------------ | :------------------ | :------------------ |
| 15/03/2024 | 1.1 | Documento de visão do produto para o PDS Web, sendo mais simples do que a versão original | Ester, Débora, Felipe, João Roberto, João Victor |
| 23/07/2024 | 1.2 | Revisão do documento de visão | Ester |


## 1. Objetivo do projeto

Temos como objetivo neste projeto o incentivo da leitura para o Brasil atual, leitura essa que sempre foi algo importantíssimo para o desenvolvimento intelectual do ser humano, e que está se perdendo com o passar dos anos e com o avanço da tecnologia.

## 2. Descrição do problema
| | |
| - | - |
| **Problema** | falta de incentivo ao hábito de leitura no Brasil. |
| **Afeta**    | grandes grupos de pessoas que não possuem esse hábito. |  
| **Impacta**  | no foco e na concentração das pessoas que não lêem, e também ajuda a criar analfabetos funcionais |
| **Solução**  | um  sistema de leitura que promove a organização das leituras, eventos literários e incentiva o hábito e gosto pela leitura na comunidade. | 

## 3. Descrição dos usuários 

| Nome | Descrição | Responsabilidade |
| :-: | - | - |
| Visitante | Usuário que ainda não teve uma primeira experiência com o produto e o visitou a fim de conhecê-lo. | - Acesso à landing page do sistema, para conhecê-lo<br>- Poderá se cadastrar-se como um novo usuário |
| Leitor | Pessoa cadastrada na rede social que deseja organizar, criar ou fortalecer o hábito de leitura. | - Realizam comentários sobre livros que está lendo, colocando a página em que terminou de ler o livro<br>- Seguir leitores<br>- Realizar resenhas de livros<br>- Criar listas de livros para ler, no estilo de uma to do list<br>- Curtir outros comentários<br>- Avaliar um livro que terminou de ler<br>- Comentar em postagens de outros usuários |
| Moderador | Administrador do sistema | - Gerenciar os livros da aplicação |

## 4. Descrição do ambiente dos usuários

&emsp;&emsp;O ambiente poderá ser acessado publicamente a qualquer momento que o usuário desejar e estiver conectado na rede, deixando seu conteúdo visível aos usuários que estejam acessando o produto. O usuário cadastrado tem como opções realizar postagens como comentários, resenhas e avaliações, responder outras postagens de outros leitores, marcar seus livros favoritos, ler resenhas de livros e organizar suas leituras futuras, adicionando os livros que deseja ler à uma lista.
  
&emsp;&emsp;A intenção do produto é que tudo isso seja feito de forma rápida e intuitiva, sendo mais complexo apenas quando o usuário desejar fazer uma resenha. As leituras podem ser feitas em qualquer lugar, o que torna o uso da rede social diverso, isso pode acabar afetando o uso da rede social por problemas de sinal ou falta de internet, no caso de quando os usuários lêem em locais que não tenha sinal wi-fi, mas as atualizações das leituras podem ser feitas posteriormente em um ambiente mais adequado.
  
&emsp;&emsp;Ainda sobre o sistema, ele deve estar funcionando 24 horas por dia em todos os dias da semana. As tarefas da aplicação devem funcionar sem interrupções, com exceção em momentos de atualização do site com os desenvolvedores.

&emsp;&emsp;Dois sistemas semelhantes são o GoodReads e o Skoob.

## 5. Principais necessidades dos usuários

&emsp;&emsp;Nosso produto atende a necessidade dos usuários de gerenciar sua leitura para que não haja uma perda no seu progresso, sendo um auxílio para a motivação e o incentivo. O sistema possuirá também postagens de opiniões próprias sobre os livros que o usuário leu ou está lendo, criando uma conversação rápida com os leitores do livro que responderem sua postagem.

&emsp;&emsp;Além disso, tem o propósito de incentivar a leitura nesse contexto de falta de atenção e possível desmotivação. Vale salientar que para os leitores é importante colocar a quantidade de páginas lidas, para que haja monitoramento sobre suas leituras, assim cada usuário poderá perceber seu processo de evolução no hábito de leitura, a partir de dados que podem ser exibidos de forma visual.

## 6. Alternativas concorrentes

| | **Pontos fortes** | **Pontos fracos** | **Semelhanças com o nosso projeto** | **Diferenciação do nosso projeto em relação aos dois similares** |
| :-: | - | - | - | - |
| **Skoob** | - Colocar a quantidade de páginas lidas<br>- Fazer comentários a cada parte lida<br>- Grande variedade de livros com várias edições diferentes<br>- Seguir outros leitores e ver o que eles estão lendo e os comentários que fazem<br>- Avaliar e fazer resenhas dos livros lidos | - Ter que fazer login toda vez que entra no aplicativo<br>- Interface complicada<br>- Parece um site para comprar livros, e não para incentivar a leitura | - Colocar a quantidade de páginas lidas<br>- Avaliar e fazer resenhas dos livros lidos<br>- Seguir outros leitores e ver o que eles estão lendo e os comentários que fazem <br>- Responder os comentários sobre livros de outros usuários<br>- Fazer comentários a cada parte lida | - Melhor funcionalidade e visibilidade |
| **GoodReads** | - Conexão com e-mail, amazon ou Apple<br>- Fórum de discussão sobre livro<br>- Possibilidade de ver quem também está lendo um livro específico<br>- Opção de classificar livros em estrelas<br>- Função de adicionar amigos por nome, e-mail ou por link de convite de amizade<br>- Portal de notícias sobre novos lançamentos e entrevistas com autores<br> - Possibilita conversas com os autores dos livros<br>- Função de criar grupos/comunidades<br>- Possibilidade de criar desafios de leitura<br>- Função de visualizar recomendações de livros de amigos |  | - Fórum de discussão sobre livro <br>- Opção de classificar livros em estrelas |  |



## 7. Visão geral do produto

&emsp;&emsp;Precisa ter uma interface semelhante às interfaces de rede social, além disso o sistema deve possuir uma interface para ser utilizada em navegadores de computadores pessoais com a devida responsividade, ser chamativo e interessante em sua landing page para atrair novos usuários, como também deverá ter um banco de dados em que os livros serão armazenados.

&emsp;&emsp;O sistema deve estar funcionando 24 horas por dia em todos os dias da semana. As tarefas da aplicação devem funcionar sem interrupções, com exceção em momentos de atualização do site com os desenvolvedores. 


## 8. Requisitos funcionais

| Código | Nome | Descrição | Prioridade |
| - | - | - | :-: |
| F01 | Efetuar login de usuário | O leitor e o moderador conseguem acesso ao sistema através do login | <kbd>Alta</kbd> |
| F02 | Efetuar cadastro de usuário | O visitante pode se cadastrar clicando em um botão de cadastro e inserindo dados (nome, e-mail, senha etc) | <kbd>Alta</kbd> |
| F03 | Realizar comentários sobre postagens e curtir comentários | O leitor pode deixar um comentário sobre qualquer postagem ou curtí-la | <kbd>Alta</kbd> |
| F04 | Fazer postagens | O leitor pode fazer postagens no feed sobre seus livros, atualizando as leituras. Os comentários devem ser textos curtos e devem ser sobre um livro específico. Nesses comentários, o leitor deve dizer em que página ele terminou de ler o livro. | <kbd>Alta</kbd> |
| F05 | Seguir outros leitores | O leitor pode seguir outros usuários a fim de facilitar o acesso às postagens do usuário seguido | <kbd>Média</kbd> |
| F06 | Registrar livro | O leitor pode registrar os livros que começou ou quer começar a ler, a fim de gerenciar a leitura sobre ele. Se o leitor adicionar um livro que ele já iniciou a leitura, ele deve inserir a quantidade de páginas que leu e um comentário sobre o que está achando da leitura, o que já será postado no feed como uma nova postagem. | <kbd>Alta</kbd> |
| F07 | Adicionar resenha | O leitor poderá adicionar a resenha sobre um livro que leu. Uma resenha se tratará de uma discussão sobre um livro que o usuário terminou de ler, que poderá ser mais longo do que uma avaliação, além de possuir título. | <kbd>Alta</kbd> |
| F08 | Efetuar logout usuário | O leitor e o moderador deixam de ter acesso ao sistema até o seu próximo login | <kbd>Alta</kbd> |
| F09 | Pesquisar leitores e livros | O leitor pode pesquisar em uma barra de pesquisa por perfis de leitores e por livros já cadastrados no sistema | <kbd>Média</kbd> |
| F10 | Adicionar livros à lista de “Desejo ler” | O leitor irá adicionar livros à uma lista de livros que ele deseja ler futuramente | <kbd>Alta</kbd> |
| F11 | Adicionar avaliações | Ao terminar de ler um livro, o leitor pode adicionar uma nota e dizer o que achou do livro. Caso ele queira fazer um texto mais longo do que um comentário, ele terá que fazer uma resenha. O leitor pode também adicionar um livro que ele já leu para avaliar, sem necessidade de monitorar pelo app. | <kbd>Média</kbd> |
| F12 | Editar informações do perfil do leitor | O leitor pode editar as informações sobre o seu perfil. Através do botão de configurações | <kbd>Baixa</kbd> |
| F13 | Adicionar livros à leituras recentes | O leitor terá uma lista de leituras que ele está realizando. Ao invés de adicionar o livro à lista de desejo, ele pode adicionar o livro diretamente à lista de leituras recentes | <kbd>Alta</kbd> |
| F14 | Adicionar livros ao sistema | O moderador poderá adicionar livros ao sistema, informando seus dados, como número de páginas, autor, título, ISBN e sinopse |  <kbd>Alta</kbd> | 
## 9. Requisitos não-funcionais

| Código              |  Nome               |          Descrição  |  Categoria          |  Classificação      |
| :- | :- | :- | :-: | :-: |
| NF01 | Controle de acesso Usuário | Só usuários autenticados podem ter acesso ao sistema | <kbd>Segurança</kbd> | <kbd>Obrigatório</kbd> |
| NF02 | Uso de um BD Relacional | O uso de um BD Relacional para consultar dados salvos de livros já registrados por usuários | <kbd>Interoperabilidade</kbd> | <kbd>Obrigatório</kbd> |
| NF03 | Interface semelhante a uma rede social | Interface familiar as interfaces das redes sociais mais usadas | <kbd>Padrões</kbd> | <kbd>Obrigatório</kbd> |
| NF04 | Interface dinâmica e convidativa | Interface com elementos agradáveis e dinâmicos a fim de deixar o usuário  mais à vontade | <kbd>Usabilidade</kbd> | <kbd>Desejável</kbd> |
| NF05 | Site responsivo | Interfaces adaptáveis ao tamanho da resolução dos computadores dos usuários | <kbd>Usabilidade</kbd> | <kbd>Obrigatório</kbd> |
