# Documentação de Casos de Teste

## Histórico de Alterações

| Data   |      Versão     |  Descrição | Autores|
|----------|-------------|------| ------|
| 13/05/2025|  1.1 | Descrevendo os casos de testes dos CDUS 001, 002, 004 e 017 | Ester Oliveira (CDU 001), Débora Samara dos Santos (CDU 002), Felipe Alves (CDU 004), João Roberto Chaves (CDU 017)|
|  |       |    |   |
|  |  |     |     |

## Introdução 
  Este documento especifica os testes que devem ser realizados para o caso de uso Gerenciar Estante. Ele contém todas as informações necessárias para a construção dos scripts de teste, como preparação do ambiente, dados de entrada e resultados esperados.

### 1.1 VISÃO GERAL DO DOCUMENTO
Além desta seção introdutória, as seções seguintes estão organizadas como descrito abaixo para cada caso de uso.

* Seção 2 – Testes Funcionais
  * Esta seção especifica os testes funcionais para o fluxo principal e para os outros cenários do caso de uso.

* Seção 3 - Testes Não Funcionais
  * Esta seção especifica os testes não funcionais do caso de uso.

### 2 TESTES FUNCIONAIS
#### 2.1 CDU 001. GERENCIAR ESTANTE
#### **2.1.1 Fluxo Principal**
| Situação   |     Entrada 1     |  Entrada 2 | Entrada 3 | Resultado Esperado   |  Resultado Obtido     |  
|----------|----------|----------|----------|----------|----------|
|Leitor autenticado no sistema|Token JWT|  |   | Usuário autenticado |  |   
|Leitor acessa a listagem de livros que está lendo |Select == “Lendo”|  |  | Listagem dos livros que o leitor está lendo|  |  
|Leitor adiciona livro a listagem Lendo|Clica em botão adicionar livro |Input do título do livro desejado para pesquisa |Clica em botão do livro que deseja adicionar|Livro desejado é adicionado à lista Lendo |  |  

#### **2.1.2 Fluxo alternativo I (Lista “Desejo Ler”)**
| Situação   |     Entrada 1     |  Entrada 2 | Entrada 3 | Resultado Esperado   |  Resultado Obtido     |  
|----------|----------|----------|----------|----------|----------|
|Leitor acessa a listagem de livros que deseja ler|Select == “Desejo ler”|  |   |Listagem dos livros que o leitor deseja ler|  | 
|Leitor adiciona livro a listagem Desejo Ler|Clica em botão adicionar livro|Input do título do livro desejado para pesquisa |Clica em botão do livro que deseja adicionar|Livro desejado é adicionado à lista Desejo Ler|  | 

#### **2.1.3 Fluxo alternativo II (Lista “Lidos”)**
| Situação   |     Entrada 1     |  Entrada 2 | Entrada 3 | Resultado Esperado   |  Resultado Obtido     |  
|----------|----------|----------|----------|----------|----------|
|Leitor acessa a listagem de livros que já leu|Select == “Lido”|  |   |Listagem dos livros que o leitor já leu|  | 
|Leitor adiciona livro a listagem Lido|Clica em botão adicionar livro|Input do título do livro desejado para pesquisa |Clica em botão do livro que deseja adicionar|Livro desejado é adicionado à lista Lido|  | 
