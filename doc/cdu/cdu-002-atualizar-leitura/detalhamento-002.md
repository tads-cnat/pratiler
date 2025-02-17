# CDU002. Atualizar leitura

- **Ator principal**: Leitor
- **Atores secundários**:
- **Resumo**: O leitor irá atualizar as páginas do livro que está lendo
- **Pré-condição**: Estar logado no sistema
- **Pós-Condição**: Quantidade de páginas lidas do seu livro deve estar atualizada

## Fluxo Principal

1.  &emsp; O sistema irá mostrar uma tela de comentário no _Feed_ com dados de livro selecionado, página inicial e página final da leitura e uma caixa de texto para escrever sobre a leitura<br>
2.  &emsp; O leitor preenche as informações e clica em Postar<br>
3.  &emsp; O sistema salva os dados e salva as alterações no sistema<br>

## Fluxo Alternativo I - Leitor insere página final menor do que a página inicial

01.a. &emsp; O leitor tenta inserir a página final menor do que a página inicial.
02.b. &emsp; O sistema impede o registro da postagem e envia um feedback ao leitor.

## Fluxo Alternativo I - Leitor insere página final maior do que a quantidade de páginas do livro selecionado

01.a. &emsp; O leitor tenta inserir a página final maior do que a quantidade de páginas do livro selecionado.
02.b. &emsp; O sistema impede o registro da postagem e envia um feedback ao leitor.

## Diagrama de Interação (Sequência ou Comunicação)

![lorem](../sequencia/AtualizarLeitura%20-%20Diagrama%20Sequencia.jpg)

## Diagrama de Classes de Projeto

![CDU_018](../../projeto/CDU_002.jpg)
