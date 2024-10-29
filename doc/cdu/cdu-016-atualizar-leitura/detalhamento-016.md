# CDU016. Atualizar leitura

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: O leitor irá atualizar as páginas do livro que está lendo
- **Pré-condição**: Ser usuário do tipo leitor e estar logado no sistema 
- **Pós-Condição**: Quantidade de páginas lidas do seu livro atualizada

## Fluxo Principal
&emsp; 01. O leitor clicará em um botão para atualizar leitura <br>
&emsp; 02. O sistema irá mostrar uma tela de comentário com dados de página final e um comentário opcional<br>
&emsp; 03. O leitor preenche as informações e clica em enviar/salvar<br>
&emsp; 04. O sistema salva os dados e salva as alterações no sistema<br>
&emsp; 05. O sistema exibe uma mensagem de que ocorreu tudo bem e as alterações foram salvas.<br>

## Fluxo Alternativo I - Leitor não preenche o comentário
&emsp; 02.a. Se o leitor não preencher o comentário, deixará o campo de texto vazio e vai para o passo 03. seguindo normalmente o fluxo.
## Fluxo Alternativo II - Leitor tenta sair sem salvar as alterações
&emsp; 03.a. O leitor tenta sair da tela sem salvar, então o sistema exibe uma mensagem perguntando se ele quer sair da tela mesmo ou salvar as alterações. Se ele quiser salvar, segue para o fluxo principal 04.

## Fluxo de Exceção I -

## Diagrama de Interação (Sequência ou Comunicação)

![lorem](../sequencia/AtualizarLeitura%20-%20Diagrama%20Sequencia.jpg)

## Diagrama de Classes de Projeto

![CDU_018](../../projeto/CDU_016.jpg)
