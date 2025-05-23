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

#### 2.2 CDU 002. ATUALIZAR LEITURA
#### **2.2.1 Fluxo Principal**

| Situação (Livro de 112 páginas) | Entrada 1 (Livro) | Entrada 2 (Pág. Inicial) | Entrada 3 (Pág. Final) | Entrada 4 (Texto) | Resultado Esperado | Resultado Obtido |
|---|---|---|---|---|---|---|
| Pág. Inicial negativa Pág. Final 2. Há texto escrito | “Quem Mexeu no Meu Queijo?” | -1 | 2 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | O sistema não deixa inserir uma página de início e também não deixaria números negativos nas páginas de início ou final caso houvesse a possibilidade | O sistema não deixa cadastrar a página inicial. |
| Pág. Inicial 0  Pág. Final negativa. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 0 | -1 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Não permitir o cadastro de números negativos | O sistema não permite o cadastro de páginas finais negativas. Aparece uma mensagem de “O valor deve ser maior ou igual a 1.” |
| Pág. Inicial 0  Pág. Final 0. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 0 | 0 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Não permitir o cadastro de página final como 0. | O sistema não permite o cadastro de páginas finais como 0. Aparece uma mensagem de “O valor deve ser maior ou igual a 1.” |
| Pág. Inicial 0  Pág. Final 10. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 0 | 10 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Atualização cadastrada com sucesso.  |  |
| Pág. Inicial 1 Pág. Final 3. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 1 | 3 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Atualização cadastrada com sucesso.  |  |
| Pág. Inicial 50 Pág. Final 55. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 50 | 55 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Atualização cadastrada com sucesso.  |  |
| Pág. Inicial 50 Pág. Final 55. Não há nada escrito | “Quem Mexeu no Meu Queijo?” | 50 | 55 | “ “ | É necessário escrever algum texto para que seja possível cadastrar. |  |
| Pág. Inicial 50  Pág. Final 50. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 50 | 50 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Não é permitido cadastrar a mesma página inicial e final. |  |
| Pág. Inicial 50 Pág. Final 111. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 50 | 111 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Atualização cadastrada com sucesso.  |  |
| Pág. Inicial 50 Pág. Final 112. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 50 | 112 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Atualização cadastrada com sucesso.  |  |
| Pág. Inicial 50 Pág. Final 113. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 50 | 113 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Não há permissão para cadastro de páginas finais maiores que o limite do livro. |  |
| Pág. Inicial 111 Pág. Final 112. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 111 | 112 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | Atualização cadastrada com sucesso.  |  |
| Pág. Inicial 112 Há texto escrito | “Quem Mexeu no Meu Queijo?” | 112 | - | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | O livro já estará lido. Não deve ser possível que cadastre mais páginas.  |  |
| Pág. Inicial 112 Pág. Final 112. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 112 | 112 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | O livro já estará lido. Não deve ser possível que cadastre mais páginas.  |  |
| Pág. Inicial 112 Pág. Final 113. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 112 | 113 | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | O livro já estará lido. Não deve ser possível que se cadastre mais páginas.  |  |
| Pág. Inicial 113. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 113 | - | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | O livro já estará lido. Não deve ser possível que se cadastre mais páginas e não deve haver como cadastrar páginas além do máximo. |  |
| Pág. Inicial 200. Há texto escrito | “Quem Mexeu no Meu Queijo?” | 200 | - | “Lorem ipsum dolor sit amet, consectetur adipiscing elit.” | O livro já estará lido. Não deve ser possível que se cadastre mais páginas e não deve haver como cadastrar páginas além do máximo. |  |

#### 2.3 CDU 004. PESQUISAR LIVROS
#### **2.3.1 Fluxo Principal**
| Situação | Entrada 1 | Resultado Esperado | Resultado Obtido |
|---|---|---|---|
| Usuário quer pesquisar um livro pelo seu nome completo | A Culpa é das Estrelas | Uma lista de itens que contenham o nome do livro pesquisado | Uma lista de itens que contenham o nome do livro pesquisado |
| Usuário quer pesquisar um livro pelo seu nome parcial | A Culpa é | Uma lista de itens que contenham o nome do livro pesquisado parcialmente | Uma lista de itens que contenham o nome do livro pesquisado parcialmente |
| Usuário quer pesquisar um livro pelo nome completo do(a) autor(a) | Colleen Hoover | Uma lista de itens que contenham o nome do autor pesquisado | Uma lista de itens que contenham o nome do autor pesquisado |
| Usuário quer pesquisar um livro pelo nome parcial do(a) autor(a) | Cooll | Uma lista de itens que contenham o nome do autor pesquisado parcialmente | Uma lista de itens que contenham o nome do autor pesquisado parcialmente |
| Usuário faz a pesquisa sem informar nada no campo de pesquisa  | “” | Uma mensagem informando que a pesquisa não resultou em nenhum item  | Não acontece nada ao pesquisar sem nada no campo de pesquisa |
| Usuário faz a pesquisa sem os acentos do nome do livro | Memorias Postumas de Bras Cubas | Uma lista de itens que contenham o nome do livro pesquisado  | Uma lista de itens que contenham o nome do livro pesquisado  |

#### **2.3.2 Testes Não-Funcionais**
#### 2.3.2.1 Teste de Usabilidade
| Categoria | Usabilidade | 
|---|---|
| Automatizado | Não |  
| Duração | 10 minutos |  
| Executado | Sim |  
| Responsável |  Felipe Alves de Vasconcelos |  
| Data | 13/05/2025 |  

**Procedimentos:**
Realizei a pesquisa normalmente para ver o funcionamento da resposta do sistema a pesquisa

**Critérios de Aceitação:**
Espera-se que ao pesquisar, o resultado apareça apertando a tecla Enter ou clicando no ícone da Lupa na barra de pesquisa

**Resultado:**
O resultado da pesquisa aparece após realizar a pesquisa mais de uma vez, não chegando ao resultado esperado pelos critérios de aceitação

#### 2.4 CDU 017. GERENCIAR PERFIL
#### **2.4.1 Fluxo Alternativo IV (Configurações de perfil)** 
| Situação | Entrada(s) | Resultado Esperado | Resultado Obtido |
|---|---|---|---|
| Usuário atualiza foto de perfil | 1. Clicar em "Alterar foto" 2. Selecionar imagem JPG/PNG válida 3. Clicar em "Salvar" | Foto é atualizada imediatamente no perfil com mensagem de confirmação |  |
| Usuário tenta deixar nome em branco | 1. Clicar em "Editar perfil" 2. Apagar conteúdo do campo "Nome" 3. Clicar em "Salvar" | Sistema exibe mensagem "Nome é obrigatório" e não salva as alterações |  |
| Usuário altera senha com sucesso | 1. Clicar em "Alterar senha" 2. Preencher senha atual correta 3. Inserir nova senha válida 4. Confirmar nova senha | Sistema exibe "Senha alterada com sucesso" e solicita novo login |  |
| Usuário erra senha atual ao tentar alterar | 1. Clicar em "Alterar senha" 2. Digitar senha atual incorreta 3. Tentar confirmar | Sistema exibe "Senha atual incorreta" e mantém senha anterior |  |
| Usuário excede limite de caracteres na bio | 1. Clicar em "Editar biografia" 2. Digitar texto com mais de 500 caracteres | Sistema impede digitação adicional e exibe "Limite: 500 caracteres" |  |
| Usuário cancela edições não salvas | 1. Modificar vários campos 2. Clicar em "Cancelar" | Perfil mantém configurações originais sem alterações |  |







