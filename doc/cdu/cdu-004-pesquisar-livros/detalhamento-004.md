# CDU004. Pesquisar livros

- **Ator principal**: Leitor
- **Atores secundários**:
- **Resumo**: Leitor poderá filtrar os livros através de uma pesquisa.
- **Pré-condição**: Estar autenticado no sistema.
- **Pós-Condição**: Retorna uma lista de livros de acordo com o texto da pesquisa.

## Fluxo Principal

1. &emsp; O Leitor acessa o campo de pesquisa no cabeçalho da página. <br>
2. &emsp; O Leitor insere o texto da pesquisa no campo apropriado. <br>
3. &emsp; O sistema exibe a lista de livros que correspondem aos critérios de pesquisa. <br>

## Fluxo de Exceção I - Nenhum livro encontrado

1. &emsp;Se o sistema não encontrar nenhum livro que corresponda ao texto da pesquisa, ele exibirá uma mensagem informando que nenhum livro foi encontrado.

## Diagrama de Interação (Sequência ou Comunicação)

![CDU_013](../sequencia/PesquisarLivro%20-%20Diagrama%20Sequencia.jpg)

## Diagrama de Classes de Projeto
