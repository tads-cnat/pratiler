# Documento de Visão

## Histórico de Revisões

| Data                |  Versão             |          Descrição  |  Autores            |
| :------------------ | :------------------ | :------------------ | :------------------ |
| 15/03/2024 | 1.1 | Documento de visão do produto para o PDS Web, sendo mais simples do que a versão original | Ester, Débora, Felipe, João Roberto, João Victor |
| 23/07/2024 | 1.2 | Revisão do documento de visão | Ester |
| 17/10/2024 | 2.1 | Atualização para PDS - distribuído | Ester, Débora, Felipe, João Roberto |


## 1. Objetivo do projeto

Temos como objetivo neste projeto o incentivo da leitura para o Brasil atual, leitura essa que sempre foi algo importantíssimo para o desenvolvimento intelectual do ser humano, e que está se perdendo com o passar dos anos e com o avanço da tecnologia.

## 2. Descrição do problema
| | |
| - | - |
| **Problema** | falta de incentivo e organização no hábito de leitura no Brasil. |
| **Afeta**    | pessoas que não possuem o hábito de leitura e pessoas que tem dificuldade para organizar as suas leituras.| 
| **Impacta**  | no foco, na organização e na concentração das pessoas. |
| **Solução**  | um sistema de rede social em que as pessoas podem compartilhar e organizar suas leituras | 

## 3. Descrição dos usuários 

| Nome | Descrição | Responsabilidade |
| :-: | - | - |
| Visitante | Usuário que ainda não está autenticado no software ou visitou a fim de conhecê-lo. | - Acesso à landing page do sistema, para conhecê-lo<br>- Poderá se cadastrar-se como um novo usuário |
| Leitor | Pessoa cadastrada na rede social que deseja organizar, criar ou fortalecer o hábito de leitura. | - Realizam comentários sobre livros que está lendo, colocando a página em que terminou de ler o livro<br>- Seguir leitores<br>- Realizar resenhas de livros lidos<br>- Criar listas de livros para ler, no estilo de uma to do list<br>- Avaliar um livro que terminou de ler<br>- Comentar e curtir postagens de outros usuários |

## 4. Descrição do ambiente dos usuários

&emsp;&emsp;O ambiente poderá ser acessado publicamente a qualquer momento que o usuário desejar e estiver conectado na rede, deixando seu conteúdo visível aos usuários que estejam acessando o produto. O usuário cadastrado tem como opções realizar postagens como comentários, resenhas e avaliações, responder outras postagens de outros leitores, marcar seus livros favoritos, ler resenhas de livros e organizar suas leituras futuras, adicionando os livros que deseja ler à uma lista.
  
&emsp;&emsp;A intenção do produto é que tudo isso seja feito de forma rápida e intuitiva, sendo mais complexo apenas quando o usuário desejar fazer uma resenha. As leituras podem ser feitas em qualquer lugar, o que torna o uso da rede social diverso, isso pode acabar afetando o uso da rede social por problemas de sinal ou falta de internet, no caso de quando os usuários lêem em locais que não tenha sinal wi-fi, mas as atualizações das leituras podem ser feitas posteriormente em um ambiente mais adequado.
  
&emsp;&emsp;Ainda sobre o sistema, ele deve estar funcionando 24 horas por dia em todos os dias da semana. As tarefas da aplicação devem funcionar sem interrupções, com exceção em momentos de atualização do site com os desenvolvedores.

&emsp;&emsp;Dois sistemas semelhantes são o GoodReads e o Skoob.

## 5. Principais necessidades dos usuários

&emsp;&emsp;Nosso produto atende a necessidade dos usuários de gerenciar sua leitura para que não haja uma perda no seu progresso, sendo um auxílio para a motivação e o incentivo. O sistema possuirá também postagens de opiniões próprias sobre os livros que o usuário leu ou está lendo.

&emsp;&emsp;Vale salientar que para os leitores é importante colocar a quantidade de páginas lidas, para que haja monitoramento sobre suas leituras, assim cada usuário poderá perceber seu processo de evolução no hábito de leitura, a partir de dados que podem ser exibidos de forma visual.

## 6. Alternativas concorrentes

| | **Pontos fortes** | **Pontos fracos** | **Semelhanças com o nosso projeto** | **Diferenciação do nosso projeto em relação aos dois similares** |
| :-: | - | - | - | - |
| **Skoob** | - Colocar a quantidade de páginas lidas<br>- Fazer comentários a cada parte lida<br>- Grande variedade de livros com várias edições diferentes<br>- Seguir outros leitores e ver o que eles estão lendo e os comentários que fazem<br>- Avaliar e fazer resenhas dos livros lidos | - Ter que fazer login toda vez que entra no aplicativo<br>- Interface complicada<br>- Parece um site para comprar livros, e não para incentivar a leitura | - Colocar a quantidade de páginas lidas<br>- Avaliar e fazer resenhas dos livros lidos<br>- Seguir outros leitores e ver o que eles estão lendo e os comentários que fazem <br>- Responder os comentários sobre livros de outros usuários<br>- Fazer comentários a cada parte lida | - Melhor funcionalidade e visibilidade |
| **GoodReads** | - Conexão com e-mail, amazon ou Apple<br>- Fórum de discussão sobre livro<br>- Possibilidade de ver quem também está lendo um livro específico<br>- Opção de classificar livros em estrelas<br>- Função de adicionar amigos por nome, e-mail ou por link de convite de amizade<br>- Portal de notícias sobre novos lançamentos e entrevistas com autores<br> - Possibilita conversas com os autores dos livros<br>- Função de criar grupos/comunidades<br>- Possibilidade de criar desafios de leitura<br>- Função de visualizar recomendações de livros de amigos |  | - Fórum de discussão sobre livro <br>- Opção de classificar livros em estrelas |  |



## 7. Visão geral do produto

&emsp;&emsp;Precisa ter uma interface semelhante às interfaces de rede social, além disso o sistema deve possuir uma interface para ser utilizada em navegadores de computadores pessoais com a devida responsividade, ser chamativo e interessante em sua landing page para atrair novos usuários. Uma **API externa** será utilizada para recuperar os dados dos livros. 

&emsp;&emsp;O sistema deve estar funcionando 24 horas por dia em todos os dias da semana. As tarefas da aplicação devem funcionar sem interrupções, com exceção em momentos de atualização do site com os desenvolvedores, que será programada e notificada aos clientes da aplicação. 


## 8. Requisitos funcionais

| Código | Nome | Descrição | Prioridade |
| - | - | - | :-: |
| F01 | Login de usuário | O leitor consegue acesso ao sistema através do login | <kbd>Alta</kbd> |
| F02 | Cadastro de usuário | O visitante pode se cadastrar clicando em um botão de cadastro e inserindo dados (nome, e-mail, senha etc) | <kbd>Alta</kbd> |
| F03 | Realização de comentários nas postagens | O leitor pode deixar um comentário em qualquer postagem  | <kbd>Alta</kbd> |
| F04 | Realização de postagens | O leitor pode fazer postagens no feed sobre seus livros, atualizando as leituras. Os comentários devem ser textos curtos e devem ser sobre um livro específico. Nesses comentários, o leitor deve dizer em que página ele terminou de ler o livro. | <kbd>Alta</kbd> |
| F05 | Vínculo com leitores | O leitor pode seguir outros leitores a fim de acompanhar as postagens do leitor seguido | <kbd>Média</kbd> |
| F06 | Adição de livros na estante própria | O leitor pode registrar os livros que começou, que quer começar a ler ou que já terminou de ler a fim de gerenciar as suas leituras. | <kbd>Alta</kbd> |
| F07 | Postagem de resenhas | O leitor poderá adicionar a resenha sobre um livro que leu. Uma resenha se tratará de uma discussão sobre um livro que o usuário terminou de ler, que poderá ser mais longo do que uma avaliação, além de possuir título. | <kbd>Alta</kbd> |
| F08 | Logout do usuário | O leitor deixa de ter acesso ao sistema até o seu próximo login | <kbd>Alta</kbd> |
| F09 | Pesquisa de leitores e livros | O leitor pode pesquisar em uma barra de pesquisa por perfis de leitores e por livros já cadastrados no sistema | <kbd>Média</kbd> |
| F10 | Postagem de avaliações | Ao terminar de ler um livro, o leitor pode adicionar uma nota e dizer o que achou do livro com um breve texto. O leitor pode também adicionar um livro que ele já leu para avaliar, sem necessidade de monitorar pelo app. | <kbd>Média</kbd> |
| F11 | Atualização de informações do perfil do leitor | O leitor pode editar as informações sobre o seu perfil. Através do botão de configurações | <kbd>Baixa</kbd> |
| F12 | Curtidas em postagens | O leitor poderá curtir postagens | <kbd>Média</kbd> |
| F13 | Marcação dos dias em que leu | Será exibido no perfil do leitor um calendário que mostra marcado os dias em que ele adicionou comentários ao sistema, caracterizando uma leitura no dia | <kbd>Baixa</kbd> |
| F14 | Acompanhamento de leitores | Será possível acessar o perfil dos leitores, acessando visualmente as suas postagens feitas, a sua estante, e as suas resenhas publicadas | <kbd>Média</kbd> |
| F15 | Visualização de livros mais populares | Poderá ser acessado uma página com os livros mais comentados em um período de 15 dias, intitulados de "Livros Populares" no sistema | <kbd>Alta</kbd> |
| F16 | Visualização de postagens gerais | O leitor terá acesso a uma página onde terão as publicações de todos os leitores, ordenadas pela data de publicação de forma decrescente | <kbd>Alta</kbd> |
| F17 | Visualização de postagens de leitores vinculados | O leitor terá acesso a uma página onde terão as publicações de todos os seus leitores vinculados, ou seja, que o leitor está seguindo. As publicações serão ordenadas pela data de publicação de forma decrescente | <kbd>Alta</kbd> |

## 9. Requisitos não-funcionais

| Código              |  Nome               |          Descrição  |  Categoria          |  Classificação      |
| :- | :- | :- | :-: | :-: |
| NF01 | Controle de acesso Usuário | Só usuários autenticados podem ter acesso ao sistema | <kbd>Segurança</kbd> | <kbd>Obrigatório</kbd> |
| NF02 | Uso de um BD Relacional | O uso de um BD Relacional para consultar dados salvos de livros já registrados por usuários | <kbd>Interoperabilidade</kbd> | <kbd>Obrigatório</kbd> |
| NF03 | Interface semelhante a uma rede social | Interface familiar as interfaces das redes sociais mais usadas | <kbd>Padrões</kbd> | <kbd>Obrigatório</kbd> |
| NF04 | Interface dinâmica e convidativa | Interface com elementos agradáveis e dinâmicos a fim de deixar o usuário  mais à vontade | <kbd>Usabilidade</kbd> | <kbd>Desejável</kbd> |
| NF05 | Site responsivo | Interfaces adaptáveis ao tamanho da resolução dos computadores dos usuários | <kbd>Usabilidade</kbd> | <kbd>Obrigatório</kbd> |
| NF06 | Uso de uma API externa | O site utilizará uma API externa para caso um usuário queira ler um livro que não existe no sistema, adicionando-o ao banco de dados da aplicação | <kbd>Interoperabilidade</kbd> | <kbd>Obrigatório</kbd>|
| NF07 | Sistema distribuído | A aplicação utilizará duas frameworks para separar a parte de Back-end e de Front-end | <kbd>Implementação</kbd> | <kbd>Obrigatório</kbd> |
