# CDU019. Atualizar leitura

- **Ator principal**: Leitor
- **Atores secundários**:	 
- **Resumo**: O leitor 
- **Pré-condição**: Ser usuário do tipo leitor e estar logado no sistema 
- **Pós-Condição**: Quantidade de páginas lidas do seu livro atualizada

## Fluxo Principal
&emsp;&ems; 01. O leitor clicará em um botão para atualizar leitura <br>
&emsp;&ems; 02. O sistema irá mostrar uma tela de comentário com dados de página final e um comentário opcional<br>
&emsp;&ems; 03. O leitor preenche as informações e clica em enviar/salvar<br>
&emsp;&ems; 04. O sistema salva os dados e salva as alterações no sistema<br>
&emsp;&ems; 05. O sistema exibe uma mensagem de que ocorreu tudo bem e as alterações foram salvas.<br>

## Fluxo Alternativo I - Leitor não preenche o comentário
&emsp;&emsp; 02.a. Se o leitor não preencher o comentário, deixará o campo de texto vazio e vai para o passo 03. seguindo normalmente o fluxo.
## Fluxo Alternativo II - Leitor tenta sair sem salvar as alterações
&emsp;&emsp; 03.a. O leitor tenta sair da tela sem salvar, então o sistema exibe uma mensagem perguntando se ele quer sair da tela mesmo ou salvar as alterações. Se ele quiser salvar, segue para o fluxo principal 04.

## Fluxo de Exceção I - O sistema não consegue salvar as informações
&emsp;&emsp; 04.a. O sistema mostra uma mensagem pedindo para que o leitor envie novamente os dados e segue para o fluxo principal 04.

## Diagrama de Interação (Sequência ou Comunicação)

> Substituir pela imagem correspondente...

## Diagrama de Classes de Projeto

> Substituir pela imagem contendo as classes (modelo, visão e templates) que implementam o respectivo CDU...
