DECLARE def_password TEXT := 'pbkdf2_sha256$260000$...';

-- 2. Inserir 25 Leitores
INSERT INTO
    mainapp_leitor (
        password,
        last_login,
        is_superuser,
        username,
        first_name,
        last_name,
        email,
        is_staff,
        is_active,
        date_joined,
        nome,
        biografia
    )
VALUES
    (
        def_password,
        NULL,
        false,
        'maria123',
        'Maria',
        'Silva',
        'maria@email.com',
        false,
        true,
        '2023-01-15',
        'Maria Silva',
        'Apaixonada por literatura clássica'
    ),
    (
        def_password,
        NULL,
        false,
        'joao456',
        'João',
        'Santos',
        'joao@email.com',
        false,
        true,
        '2023-02-20',
        'João Santos',
        'Leitor de ficção científica'
    ),
    (
        def_password,
        NULL,
        false,
        'ana789',
        'Ana',
        'Oliveira',
        'ana@email.com',
        false,
        true,
        '2023-03-10',
        'Ana Oliveira',
        'Adora biografias'
    ),
    (
        def_password,
        NULL,
        false,
        'carlos012',
        'Carlos',
        'Pereira',
        'carlos@email.com',
        false,
        true,
        '2023-04-05',
        'Carlos Pereira',
        'Fã de mistério e suspense'
    ),
    (
        def_password,
        NULL,
        true,
        'admin',
        'Admin',
        'User',
        'admin@email.com',
        true,
        true,
        '2023-01-01',
        'Admin User',
        'Administrador do sistema'
    ),
    (
        def_password,
        NULL,
        false,
        'lucia345',
        'Lúcia',
        'Fernandes',
        'lucia@email.com',
        false,
        true,
        '2023-05-12',
        'Lúcia Fernandes',
        'Fã de poesia'
    ),
    (
        def_password,
        NULL,
        false,
        'pedro678',
        'Pedro',
        'Almeida',
        'pedro@email.com',
        false,
        true,
        '2023-06-18',
        'Pedro Almeida',
        'Leitor voraz'
    ),
    (
        def_password,
        NULL,
        false,
        'sofia901',
        'Sofia',
        'Costa',
        'sofia@email.com',
        false,
        true,
        '2023-07-22',
        'Sofia Costa',
        'Amo livros de aventura'
    ),
    (
        def_password,
        NULL,
        false,
        'rafael234',
        'Rafael',
        'Martins',
        'rafael@email.com',
        false,
        true,
        '2023-08-30',
        'Rafael Martins',
        'Interessado em filosofia'
    ),
    (
        def_password,
        NULL,
        false,
        'beatriz567',
        'Beatriz',
        'Rocha',
        'beatriz@email.com',
        false,
        true,
        '2023-09-05',
        'Beatriz Rocha',
        'Leio um livro por semana'
    ),
    (
        def_password,
        NULL,
        false,
        'lucas890',
        'Lucas',
        'Lima',
        'lucas@email.com',
        false,
        true,
        '2023-10-10',
        'Lucas Lima',
        'Focado em desenvolvimento pessoal'
    ),
    (
        def_password,
        NULL,
        false,
        'juliana123',
        'Juliana',
        'Santana',
        'juliana@email.com',
        false,
        true,
        '2023-11-15',
        'Juliana Santana',
        'Adoro romances históricos'
    ),
    (
        def_password,
        NULL,
        false,
        'marcos456',
        'Marcos',
        'Oliveira',
        'marcos@email.com',
        false,
        true,
        '2023-12-20',
        'Marcos Oliveira',
        'Colecionador de clássicos'
    ),
    (
        def_password,
        NULL,
        false,
        'camila789',
        'Camila',
        'Souza',
        'camila@email.com',
        false,
        true,
        '2024-01-25',
        'Camila Souza',
        'Leitora de fantasia'
    ),
    (
        def_password,
        NULL,
        false,
        'andre012',
        'André',
        'Carvalho',
        'andre@email.com',
        false,
        true,
        '2024-02-01',
        'André Carvalho',
        'Interessado em ciência'
    ),
    (
        def_password,
        NULL,
        false,
        'patricia345',
        'Patrícia',
        'Barbosa',
        'patricia@email.com',
        false,
        true,
        '2024-03-08',
        'Patrícia Barbosa',
        'Fã de suspense psicológico'
    ),
    (
        def_password,
        NULL,
        false,
        'roberto678',
        'Roberto',
        'Dias',
        'roberto@email.com',
        false,
        true,
        '2024-04-12',
        'Roberto Dias',
        'Leitor de não-ficção'
    ),
    (
        def_password,
        NULL,
        false,
        'fernanda901',
        'Fernanda',
        'Nunes',
        'fernanda@email.com',
        false,
        true,
        '2024-05-18',
        'Fernanda Nunes',
        'Amo livros de viagem'
    ),
    (
        def_password,
        NULL,
        false,
        'gabriel234',
        'Gabriel',
        'Ferreira',
        'gabriel@email.com',
        false,
        true,
        '2024-06-22',
        'Gabriel Ferreira',
        'Interessado em história'
    ),
    (
        def_password,
        NULL,
        false,
        'isabela567',
        'Isabela',
        'Gomes',
        'isabela@email.com',
        false,
        true,
        '2024-07-30',
        'Isabela Gomes',
        'Leitora de ficção distópica'
    ),
    (
        def_password,
        NULL,
        false,
        'thiago890',
        'Thiago',
        'Ribeiro',
        'thiago@email.com',
        false,
        true,
        '2024-08-05',
        'Thiago Ribeiro',
        'Fã de biografias'
    ),
    (
        def_password,
        NULL,
        false,
        'vanessa123',
        'Vanessa',
        'Monteiro',
        'vanessa@email.com',
        false,
        true,
        '2024-09-10',
        'Vanessa Monteiro',
        'Amo livros de arte'
    ),
    (
        def_password,
        NULL,
        false,
        'leonardo456',
        'Leonardo',
        'Pires',
        'leonardo@email.com',
        false,
        true,
        '2024-10-15',
        'Leonardo Pires',
        'Leitor de mistério'
    ),
    (
        def_password,
        NULL,
        false,
        'aline789',
        'Aline',
        'Machado',
        'aline@email.com',
        false,
        true,
        '2024-11-20',
        'Aline Machado',
        'Interessada em psicologia'
    ),
    (
        def_password,
        NULL,
        false,
        'hugo012',
        'Hugo',
        'Teixeira',
        'hugo@email.com',
        false,
        true,
        '2024-12-25',
        'Hugo Teixeira',
        'Colecionador de edições raras'
    );

-- 3. Configurar relacionamentos de seguidores (pelo menos 20 relacionamentos)
INSERT INTO
    mainapp_leitor_seguindo (from_leitor_id, to_leitor_id)
VALUES
    (2, 1),
    (3, 1),
    (6, 1),
    (8, 1),
    (10, 1),
    (12, 1),
    (14, 1),
    (16, 1),
    (18, 1),
    (20, 1),
    (1, 2),
    (3, 2),
    (5, 2),
    (7, 2),
    (9, 2),
    (11, 2),
    (13, 2),
    (15, 2),
    (17, 2),
    (19, 2),
    (1, 3),
    (2, 3),
    (4, 3),
    (6, 3),
    (8, 3),
    (10, 3),
    (12, 3),
    (14, 3),
    (16, 3),
    (18, 3),
    (20, 3),
    (1, 4),
    (3, 4),
    (5, 4),
    (7, 4),
    (9, 4),
    (11, 4),
    (13, 4),
    (15, 4),
    (17, 4),
    (19, 4),
    (2, 5),
    (4, 5),
    (6, 5),
    (8, 5),
    (10, 5),
    (12, 5),
    (14, 5),
    (16, 5),
    (18, 5),
    (20, 5),
    (1, 6),
    (3, 6),
    (7, 6),
    (9, 6),
    (11, 6),
    (13, 6),
    (15, 6),
    (17, 6),
    (19, 6),
    (21, 6),
    (2, 7),
    (4, 7),
    (6, 7),
    (8, 7),
    (10, 7),
    (12, 7),
    (14, 7),
    (16, 7),
    (18, 7),
    (20, 7),
    (1, 8),
    (3, 8),
    (5, 8),
    (7, 8),
    (9, 8),
    (11, 8),
    (13, 8),
    (15, 8),
    (17, 8),
    (19, 8),
    (2, 9),
    (4, 9),
    (6, 9),
    (8, 9),
    (10, 9),
    (12, 9),
    (14, 9),
    (16, 9),
    (18, 9),
    (20, 9),
    (1, 10),
    (3, 10),
    (5, 10),
    (7, 10),
    (9, 10),
    (11, 10),
    (13, 10),
    (15, 10),
    (17, 10),
    (19, 10);

INSERT INTO
    mainapp_leitor_seguidores (from_leitor_id, to_leitor_id)
VALUES
    (2, 1),
    (3, 1),
    (4, 1),
    (6, 1),
    (8, 1),
    (10, 1),
    (12, 1),
    (14, 1),
    (16, 1),
    (18, 1),
    (1, 2),
    (3, 2),
    (5, 2),
    (7, 2),
    (9, 2),
    (11, 2),
    (13, 2),
    (15, 2),
    (17, 2),
    (19, 2),
    (1, 3),
    (2, 3),
    (4, 3),
    (6, 3),
    (8, 3),
    (10, 3),
    (12, 3),
    (14, 3),
    (16, 3),
    (18, 3),
    (20, 3),
    (1, 4),
    (3, 4),
    (5, 4),
    (7, 4),
    (9, 4),
    (11, 4),
    (13, 4),
    (15, 4),
    (17, 4),
    (19, 4),
    (2, 5),
    (4, 5),
    (6, 5),
    (8, 5),
    (10, 5),
    (12, 5),
    (14, 5),
    (16, 5),
    (18, 5),
    (20, 5),
    (1, 6),
    (3, 6),
    (7, 6),
    (9, 6),
    (11, 6),
    (13, 6),
    (15, 6),
    (17, 6),
    (19, 6),
    (21, 6),
    (2, 7),
    (4, 7),
    (6, 7),
    (8, 7),
    (10, 7),
    (12, 7),
    (14, 7),
    (16, 7),
    (18, 7),
    (20, 7),
    (1, 8),
    (3, 8),
    (5, 8),
    (7, 8),
    (9, 8),
    (11, 8),
    (13, 8),
    (15, 8),
    (17, 8),
    (19, 8),
    (2, 9),
    (4, 9),
    (6, 9),
    (8, 9),
    (10, 9),
    (12, 9),
    (14, 9),
    (16, 9),
    (18, 9),
    (20, 9),
    (1, 10),
    (3, 10),
    (5, 10),
    (7, 10),
    (9, 10),
    (11, 10),
    (13, 10),
    (15, 10),
    (17, 10),
    (19, 10);

-- 4. Inserir 25 Autores
INSERT INTO
    mainapp_autor (nome)
VALUES
    ('Machado de Assis'),
    ('Clarice Lispector'),
    ('George Orwell'),
    ('J.K. Rowling'),
    ('Agatha Christie'),
    ('J.R.R. Tolkien'),
    ('Stephen King'),
    ('Jane Austen'),
    ('Fiódor Dostoiévski'),
    ('Gabriel García Márquez'),
    ('José Saramago'),
    ('Haruki Murakami'),
    ('Toni Morrison'),
    ('Virginia Woolf'),
    ('Franz Kafka'),
    ('Ernest Hemingway'),
    ('William Shakespeare'),
    ('Charles Dickens'),
    ('Mark Twain'),
    ('F. Scott Fitzgerald'),
    ('Jorge Amado'),
    ('Érico Veríssimo'),
    ('Guimarães Rosa'),
    ('Lygia Fagundes Telles'),
    ('Carlos Drummond de Andrade');

-- 5. Inserir 30 Livros
INSERT INTO
    mainapp_livro (titulo, sinopse, capa, isbn, n_paginas, autor_id)
VALUES
    (
        'Dom Casmurro',
        'Clássico da literatura brasileira que explora ciúme e ambiguidades.',
        'dom_casmurro.jpg',
        '978853590',
        256,
        1
    ),
    (
        'A Hora da Estrela',
        'Última obra de Clarice, retrata a vida simples de Macabéa.',
        'hora_estrela.jpg',
        '978857164',
        96,
        2
    ),
    (
        '1984',
        'Distopia sobre vigilância governamental e controle da informação.',
        '1984.jpg',
        '978852540',
        416,
        3
    ),
    (
        'Harry Potter e a Pedra Filosofal',
        'Primeiro livro da saga do jovem bruxo Harry Potter.',
        'hp_pedra.jpg',
        '978853251',
        264,
        4
    ),
    (
        'Assassinato no Expresso do Oriente',
        'Famoso caso do detetive Hercule Poirot.',
        'expresso_oriente.jpg',
        '978852541',
        256,
        5
    ),
    (
        'Memórias Póstumas de Brás Cubas',
        'Narrado por um defunto autor, crítica à sociedade.',
        'bras_cubas.jpg',
        '978853590',
        240,
        1
    ),
    (
        'O Senhor dos Anéis: A Sociedade do Anel',
        'Primeiro volume da trilogia épica de fantasia.',
        'sociedade_anel.jpg',
        '978853361',
        576,
        6
    ),
    (
        'O Iluminado',
        'Clássico do terror sobre um hotel mal-assombrado.',
        'iluminado.jpg',
        '978858105',
        464,
        7
    ),
    (
        'Orgulho e Preconceito',
        'Romance clássico sobre Elizabeth Bennet e Mr. Darcy.',
        'orgulho_preconceito.jpg',
        '978859431',
        424,
        8
    ),
    (
        'Crime e Castigo',
        'Drama psicológico sobre um estudante que comete um assassinato.',
        'crime_castigo.jpg',
        '978852542',
        608,
        9
    ),
    (
        'Cem Anos de Solidão',
        'Realismo mágico que conta a história da família Buendía.',
        'cem_anos.jpg',
        '978850101',
        448,
        10
    ),
    (
        'Ensaio sobre a Cegueira',
        'Romance distópico sobre uma epidemia de cegueira branca.',
        'cegueira.jpg',
        '978853591',
        352,
        11
    ),
    (
        'Kafka à Beira-Mar',
        'Narrativa surreal que mistura realidade e fantasia.',
        'kafka_beira_mar.jpg',
        '978853592',
        480,
        12
    ),
    (
        'Amada',
        'História de uma ex-escrava assombrada pelo fantasma de sua filha.',
        'amada.jpg',
        '978853593',
        352,
        13
    ),
    (
        'Mrs. Dalloway',
        'Romance que acompanha um dia na vida de Clarissa Dalloway.',
        'mrs_dalloway.jpg',
        '978853594',
        224,
        14
    ),
    (
        'A Metamorfose',
        'Conto sobre Gregor Samsa que acorda transformado em inseto.',
        'metamorfose.jpg',
        '978853595',
        128,
        15
    ),
    (
        'O Velho e o Mar',
        'História de um pescador cubano e sua luta com um peixe gigante.',
        'velho_mar.jpg',
        '978853596',
        128,
        16
    ),
    (
        'Romeu e Julieta',
        'Tragédia shakespeariana sobre o amor proibido.',
        'romeu_julieta.jpg',
        '978853597',
        288,
        17
    ),
    (
        'Grandes Esperanças',
        'Romance de formação sobre o órfão Pip.',
        'grandes_esperancas.jpg',
        '978853598',
        672,
        18
    ),
    (
        'As Aventuras de Huckleberry Finn',
        'Aventura de um menino e um escravo fugitivo no Mississippi.',
        'huckleberry.jpg',
        '978853599',
        384,
        19
    ),
    (
        'O Grande Gatsby',
        'Retrato da sociedade americana dos anos 1920.',
        'grande_gatsby.jpg',
        '978853600',
        208,
        20
    ),
    (
        'Dona Flor e Seus Dois Maridos',
        'Comédia sobre uma viúva cujo primeiro marido volta como fantasma.',
        'dona_flor.jpg',
        '978853601',
        432,
        21
    ),
    (
        'O Tempo e o Vento',
        'Épico sobre a formação do Rio Grande do Sul.',
        'tempo_vento.jpg',
        '978853602',
        680,
        22
    ),
    (
        'Grande Sertão: Veredas',
        'Monólogo de Riobaldo sobre seu passado como jagunço.',
        'grande_sertao.jpg',
        '978853603',
        624,
        23
    ),
    (
        'As Meninas',
        'Romance que acompanha três jovens estudantes em um pensionato.',
        'as_meninas.jpg',
        '978853604',
        288,
        24
    ),
    (
        'A Rosa do Povo',
        'Coletânea de poemas de Drummond sobre a condição humana.',
        'rosa_povo.jpg',
        '978853605',
        256,
        25
    ),
    (
        'O Hobbit',
        'Aventura de Bilbo Bolseiro em busca do tesouro de Smaug.',
        'hobbit.jpg',
        '978853606',
        336,
        6
    ),
    (
        'It: A Coisa',
        'História de um grupo de crianças que enfrenta um ser maligno.',
        'it.jpg',
        '978853607',
        1104,
        7
    ),
    (
        'Persuasão',
        'Último romance completo de Jane Austen sobre segundas chances no amor.',
        'persuasao.jpg',
        '978853608',
        288,
        8
    ),
    (
        'Os Irmãos Karamázov',
        'Última obra de Dostoiévski, explora a natureza humana.',
        'irmaos_karamazov.jpg',
        '978853609',
        840,
        9
    );

-- 6. Inserir 50 Interações
INSERT INTO
    mainapp_interacao (leitor_id, livro_id, status, pg_atual)
VALUES
    -- Leitores 1-5
    (1, 1, 'LD', 256),
    (1, 3, 'LN', 120),
    (1, 5, 'QL', 0),
    (1, 7, 'LD', 576),
    (1, 9, 'LN', 200),
    (2, 3, 'LD', 416),
    (2, 4, 'LN', 150),
    (2, 6, 'LD', 240),
    (2, 8, 'QL', 0),
    (2, 10, 'LN', 300),
    (3, 2, 'LD', 96),
    (3, 6, 'LN', 80),
    (3, 11, 'LD', 448),
    (3, 15, 'LN', 100),
    (3, 20, 'QL', 0),
    (4, 1, 'LD', 256),
    (4, 4, 'LD', 264),
    (4, 7, 'LN', 300),
    (4, 12, 'QL', 0),
    (4, 18, 'LD', 288),
    (5, 5, 'LD', 256),
    (5, 10, 'LN', 400),
    (5, 15, 'QL', 0),
    (5, 20, 'LD', 208),
    (5, 25, 'LN', 100),
    -- Leitores 6-10
    (6, 2, 'LD', 96),
    (6, 7, 'LN', 200),
    (6, 12, 'QL', 0),
    (6, 17, 'LD', 288),
    (6, 22, 'LN', 300),
    (7, 3, 'LD', 416),
    (7, 8, 'LN', 200),
    (7, 13, 'QL', 0),
    (7, 18, 'LD', 288),
    (7, 23, 'LN', 400),
    (8, 4, 'LD', 264),
    (8, 9, 'LN', 200),
    (8, 14, 'QL', 0),
    (8, 19, 'LD', 672),
    (8, 24, 'LN', 100),
    (9, 5, 'LD', 256),
    (9, 10, 'LN', 300),
    (9, 15, 'QL', 0),
    (9, 20, 'LD', 208),
    (9, 25, 'LN', 150),
    (10, 6, 'LD', 240),
    (10, 11, 'LN', 200),
    (10, 16, 'QL', 0),
    (10, 21, 'LD', 432),
    (10, 26, 'LN', 100),
    -- Leitores 11-15
    (11, 7, 'LD', 576),
    (11, 12, 'LN', 200),
    (11, 17, 'QL', 0),
    (11, 22, 'LD', 680),
    (11, 27, 'LN', 200),
    (12, 8, 'LD', 464),
    (12, 13, 'LN', 200),
    (12, 18, 'QL', 0),
    (12, 23, 'LD', 624),
    (12, 28, 'LN', 500),
    (13, 9, 'LD', 424),
    (13, 14, 'LN', 200),
    (13, 19, 'QL', 0),
    (13, 24, 'LD', 288),
    (13, 29, 'LN', 150),
    (14, 10, 'LD', 608),
    (14, 15, 'LN', 100),
    (14, 20, 'QL', 0),
    (14, 25, 'LD', 256),
    (14, 30, 'LN', 400),
    (15, 11, 'LD', 448),
    (15, 16, 'LN', 100),
    (15, 21, 'QL', 0),
    (15, 26, 'LD', 256),
    (15, 1, 'LN', 100);

-- -- leitor teste
(26, 1, 'LD', 256),
(26, 3, 'LN', 120),
(26, 5, 'QL', 0),
(26, 7, 'LD', 576),
(26, 9, 'LN', 200),
(26, 4, 'LN', 150),
(26, 6, 'LD', 240),
(26, 8, 'QL', 0),
(26, 10, 'LN', 300),
(26, 2, 'LD', 96),
(26, 11, 'LD', 448),
(26, 15, 'LN', 100),
(26, 20, 'QL', 0),
(26, 12, 'QL', 0),
(26, 18, 'LD', 288),
(26, 25, 'LN', 100),
(26, 17, 'LD', 288),
(26, 22, 'LN', 300),
(26, 13, 'QL', 0),
(26, 23, 'LN', 400),
(26, 14, 'QL', 0),
(26, 19, 'LD', 672),
(26, 24, 'LN', 100),
(26, 16, 'QL', 0),
(26, 21, 'LD', 432),
(26, 26, 'LN', 100),
(26, 27, 'LN', 200),
(26, 28, 'LN', 500),
(26, 29, 'LN', 150),
(26, 30, 'LN', 400);

-- 7. Inserir 50 Postagens
INSERT INTO
    mainapp_postagem (
        interacao_id,
        texto,
        data_hora,
        pagina_inicial,
        pagina_final
    )
VALUES
    -- Postagens dos primeiros 10 leitores
    (
        1,
        'Finalmente li Dom Casmurro! Que narrativa incrível do Machado.',
        '2023-05-10 14:30:00',
        200,
        256
    ),
    (
        2,
        'Estou adorando 1984, mas é assustador como algumas coisas são atuais.',
        '2023-06-15 09:45:00',
        100,
        120
    ),
    (
        3,
        'Mal posso esperar para começar a ler Assassinato no Expresso do Oriente!',
        '2023-07-01 10:00:00',
        0,
        0
    ),
    (
        4,
        'Terminei O Senhor dos Anéis: A Sociedade do Anel. Que jornada épica!',
        '2023-08-12 18:20:00',
        500,
        576
    ),
    (
        5,
        'Orgulho e Preconceito está me encantando. Elizabeth Bennet é incrível!',
        '2023-09-05 15:30:00',
        150,
        200
    ),
    (
        6,
        '1984 foi uma leitura perturbadora mas necessária. Recomendo a todos!',
        '2023-04-22 16:45:00',
        400,
        416
    ),
    (
        7,
        'Harry Potter nunca decepciona. Relendo depois de anos e amando novamente.',
        '2023-07-10 20:15:00',
        120,
        150
    ),
    (
        8,
        'Memórias Póstumas de Brás Cubas é hilário e profundo ao mesmo tempo.',
        '2023-05-18 11:10:00',
        200,
        240
    ),
    (
        9,
        'Ansioso para começar O Iluminado. Ouvi dizer que é assustador!',
        '2023-10-01 09:00:00',
        0,
        0
    ),
    (
        10,
        'Crime e Castigo está me deixando angustiado, mas não consigo parar de ler.',
        '2023-09-20 14:30:00',
        250,
        300
    ),
    (
        11,
        'A Hora da Estrela me deixou pensativa por dias. Clarice é genial!',
        '2023-03-28 12:45:00',
        80,
        96
    ),
    (
        12,
        'Memórias Póstumas de Brás Cubas é diferente de tudo que já li.',
        '2023-06-10 10:20:00',
        50,
        80
    ),
    (
        13,
        'Cem Anos de Solidão mudou minha forma de ver a literatura.',
        '2023-08-05 17:30:00',
        400,
        448
    ),
    (
        14,
        'Mrs. Dalloway tem uma escrita tão fluida e poética.',
        '2023-09-15 13:15:00',
        80,
        100
    ),
    (
        15,
        'Quero ler O Grande Gatsby há tempos, finalmente vou começar!',
        '2023-10-02 08:00:00',
        0,
        0
    ),
    (
        16,
        'Dom Casmurro é daqueles livros que você termina e fica remoendo por semanas.',
        '2023-05-18 16:40:00',
        200,
        256
    ),
    (
        17,
        'Harry Potter marcou minha infância e continua marcando minha vida adulta.',
        '2023-07-25 19:30:00',
        200,
        264
    ),
    (
        18,
        'O Senhor dos Anéis está me levando para uma aventura incrível!',
        '2023-08-30 15:20:00',
        250,
        300
    ),
    (
        19,
        'Ansioso para começar Ensaio sobre a Cegueira, ouvi ótimas recomendações.',
        '2023-10-05 10:00:00',
        0,
        0
    ),
    (
        20,
        'Romeu e Julieta é tão trágico quanto belo. Shakespeare era um gênio.',
        '2023-09-10 14:00:00',
        200,
        288
    ),
    (
        21,
        'Assassinato no Expresso do Oriente tem um dos melhores plots que já li.',
        '2023-06-22 18:30:00',
        200,
        256
    ),
    (
        22,
        'Crime e Castigo está me deixando sem fôlego. Que construção psicológica!',
        '2023-08-15 20:00:00',
        350,
        400
    ),
    (
        23,
        'O Iluminado está me dando pesadelos, mas não consigo parar de ler!',
        '2023-09-28 22:15:00',
        150,
        200
    ),
    (
        24,
        'Orgulho e Preconceito é tão atual mesmo tendo sido escrito há tanto tempo.',
        '2023-07-18 16:30:00',
        300,
        424
    ),
    (
        25,
        'Grandes Esperanças está me surpreendendo a cada página.',
        '2023-08-25 14:45:00',
        400,
        500
    ),
    (
        26,
        'A Hora da Estrela é pequeno em tamanho, mas enorme em significado.',
        '2023-05-20 11:20:00',
        50,
        96
    ),
    (
        27,
        'O Senhor dos Anéis é minha fuga perfeita para mundos fantásticos.',
        '2023-07-30 17:00:00',
        400,
        576
    ),
    (
        28,
        'Kafka à Beira-Mar é tão surreal que às vezes não sei o que é real ou não.',
        '2023-09-10 15:30:00',
        100,
        200
    ),
    (
        29,
        'Amada é uma história poderosa sobre o passado que nunca nos abandona.',
        '2023-08-18 14:20:00',
        250,
        352
    ),
    (
        30,
        'A Metamorfose é perturbadora e fascinante ao mesmo tempo.',
        '2023-07-15 12:00:00',
        80,
        128
    ),
    (
        31,
        'O Velho e o Mar é tão simples e tão profundo. Hemingway é mestre.',
        '2023-06-28 10:30:00',
        80,
        128
    ),
    (
        32,
        'Romeu e Julieta me fez chorar como se fosse a primeira vez que lia.',
        '2023-09-05 16:45:00',
        200,
        288
    ),
    (
        33,
        'Grandes Esperanças está me mostrando o quanto Dickens era genial.',
        '2023-08-20 15:15:00',
        500,
        672
    ),
    (
        34,
        'As Aventuras de Huckleberry Finn é divertido e profundo ao mesmo tempo.',
        '2023-07-22 14:00:00',
        200,
        384
    ),
    (
        35,
        'O Grande Gatsby captura tão bem a essência dos anos 1920.',
        '2023-06-15 13:30:00',
        150,
        208
    ),
    (
        36,
        'Dona Flor e Seus Dois Maridos é hilário e muito bem escrito.',
        '2023-05-30 12:45:00',
        300,
        432
    ),
    (
        37,
        'O Tempo e o Vento é uma aula de história e literatura brasileira.',
        '2023-08-10 17:30:00',
        500,
        680
    ),
    (
        38,
        'Grande Sertão: Veredas tem uma linguagem única que me encanta.',
        '2023-09-18 16:20:00',
        400,
        624
    ),
    (
        39,
        'As Meninas retrata tão bem a juventude e as inquietações da época.',
        '2023-07-25 15:10:00',
        200,
        288
    ),
    (
        40,
        'A Rosa do Povo tem poemas que falam direto ao coração.',
        '2023-06-20 11:45:00',
        150,
        256
    ),
    (
        41,
        'O Hobbit é uma aventura deliciosa para todas as idades.',
        '2023-05-15 10:30:00',
        250,
        336
    ),
    (
        42,
        'It: A Coisa está me dando pesadelos, mas é tão bem escrito que não consigo parar.',
        '2023-08-28 22:00:00',
        800,
        1104
    ),
    (
        43,
        'Persuasão é tão sutil e emocionante. Jane Austen no seu melhor.',
        '2023-09-22 14:15:00',
        200,
        288
    ),
    (
        44,
        'Os Irmãos Karamázov está me fazendo refletir sobre a natureza humana.',
        '2023-10-01 16:30:00',
        600,
        840
    ),
    (
        45,
        'Dom Casmurro me deixou com mais perguntas do que respostas.',
        '2023-06-10 12:00:00',
        200,
        256
    ),
    (
        46,
        'Harry Potter e a Pedra Filosofal me transporta de volta à minha infância.',
        '2023-07-05 19:45:00',
        200,
        264
    ),
    (
        47,
        '1984 é cada vez mais relevante nos dias de hoje.',
        '2023-08-15 18:30:00',
        300,
        416
    ),
    (
        48,
        'A Hora da Estrela é um soco no estômago literário.',
        '2023-05-25 17:15:00',
        50,
        96
    ),
    (
        49,
        'Cem Anos de Solidão é mágico do começo ao fim.',
        '2023-09-10 15:00:00',
        300,
        448
    ),
    (
        50,
        'Mrs. Dalloway mostra um dia comum de forma extraordinária.',
        '2023-07-20 14:30:00',
        150,
        224
    );

-- 8. Inserir 50 Curtidas
INSERT INTO
    mainapp_curtida (postagem_id, leitor_id)
VALUES
    -- Curtidas variadas para as primeiras 20 postagens
    (1, 2),
    (1, 3),
    (1, 4),
    (1, 5),
    (1, 6),
    (2, 1),
    (2, 3),
    (2, 5),
    (2, 7),
    (2, 9),
    (3, 1),
    (3, 2),
    (3, 4),
    (3, 6),
    (3, 8),
    (4, 2),
    (4, 3),
    (4, 5),
    (4, 7),
    (4, 10),
    (5, 1),
    (5, 4),
    (5, 6),
    (5, 8),
    (5, 9),
    (6, 1),
    (6, 3),
    (6, 5),
    (6, 7),
    (6, 10),
    (7, 2),
    (7, 4),
    (7, 6),
    (7, 8),
    (7, 9),
    (8, 1),
    (8, 3),
    (8, 5),
    (8, 7),
    (8, 10),
    (9, 2),
    (9, 4),
    (9, 6),
    (9, 8),
    (9, 9),
    (10, 1),
    (10, 3),
    (10, 5),
    (10, 7),
    (10, 10);

-- 9. Inserir 25 Resenhas
INSERT INTO
    mainapp_resenha (livro_id, leitor_id, titulo, texto, data_hora)
VALUES
    (
        1,
        1,
        'Um clássico atemporal',
        'Dom Casmurro é daqueles livros que nos fazem questionar a realidade e a percepção dos fatos. Machado de Assis constrói uma narrativa cheia de ambiguidades que deixam o leitor duvidando até do narrador. A genialidade está justamente nessa construção que permite múltiplas interpretações.',
        '2023-05-12 10:00:00'
    ),
    (
        3,
        2,
        'Assustadoramente atual',
        '1984 foi escrito em 1949 mas parece descrever aspectos da nossa sociedade atual. A vigilância constante, o controle da informação, a manipulação da linguagem - tudo isso ressoa fortemente no mundo contemporâneo. Uma leitura essencial para entender os perigos do autoritarismo.',
        '2023-04-25 15:30:00'
    ),
    (
        2,
        3,
        'A simplicidade que comove',
        'Clarice Lispector consegue, com sua prosa única, dar profundidade à vida simples de Macabéa. É um livro curto mas intenso, que permanece na mente do leitor muito tempo após a última página. A forma como retrata a invisibilidade social é comovente e perturbadora.',
        '2023-03-30 12:45:00'
    ),
    (
        4,
        4,
        'O início de uma jornada mágica',
        'Harry Potter e a Pedra Filosofal introduz um mundo tão rico e detalhado que é impossível não se encantar. Relendo como adulto, percebo camadas que passavam despercebidas na infância. Rowling cria personagens complexos mesmo num livro voltado para crianças.',
        '2023-07-05 11:20:00'
    ),
    (
        5,
        5,
        'Mistério clássico',
        'Assassinato no Expresso do Oriente mostra Agatha Christie no seu melhor. O detetive Poirot é carismático e perspicaz, e o desfecho é surpreendente. A forma como todos os passageiros têm algo a esconder cria uma teia fascinante de possibilidades.',
        '2023-06-02 14:15:00'
    ),
    (
        6,
        6,
        'Defunto autor, vivo enredo',
        'Memórias Póstumas de Brás Cubas é revolucionário tanto na forma quanto no conteúdo.',
        '2023-08-14 16:00:00'
    ),
    (
        7,
        7,
        'A Jornada do Anel',
        'Tolkien cria um mundo tão rico e detalhado que parece real. A Sociedade do Anel estabelece personagens complexos e um enredo que só melhora nos livros seguintes. A amizade entre os personagens é comovente.',
        '2023-08-14 16:00:00'
    ),
    (
        8,
        8,
        'O Horror do Overlook',
        'King transforma um hotel aparentemente comum em um palco de terror psicológico. A deterioração mental de Jack Torrance é assustadoramente bem construída.',
        '2023-09-30 19:30:00'
    ),
    (
        9,
        9,
        'Orgulho e Preconceito Revisitado',
        'Elizabeth Bennet continua sendo uma das personagens femininas mais bem escritas da literatura. A crítica social de Austen permanece relevante dois séculos depois.',
        '2023-07-20 13:15:00'
    ),
    (
        10,
        10,
        'O Peso da Culpa',
        'Dostoiévski explora a psicologia do crime como ninguém. Raskólnikov é um dos personagens mais complexos que já li. A descrição de São Petersburgo é vívida.',
        '2023-09-22 15:25:00'
    ),
    (
        11,
        11,
        'Realismo Mágico em seu Ápice',
        'Márquez tece uma narrativa que mistura o cotidiano com o fantástico de forma natural. A história da família Buendía em Macondo é inesquecível.',
        '2023-08-07 12:35:00'
    ),
    (
        12,
        12,
        'Quando Todos Ficam Cegos',
        'Saramago mostra como a sociedade pode desmoronar rapidamente. A escrita sem pontuação tradicional cria um ritmo único que aumenta a sensação de desespero.',
        '2023-10-07 17:45:00'
    ),
    (
        13,
        13,
        'O Mundo de Murakami',
        'Kafka à Beira-Mar é uma jornada surreal que mistura realidade e sonho. Personagens excêntricos e situações inexplicáveis que fazem sentido no universo do autor.',
        '2023-09-12 11:55:00'
    ),
    (
        14,
        14,
        'O Fantasma do Passado',
        'Toni Morrison cria uma narrativa poderosa sobre o legado traumático da escravidão. Sethe é uma personagem inesquecível, marcada por escolhas impossíveis.',
        '2023-08-20 18:05:00'
    ),
    (
        15,
        15,
        'Um Dia na Vida',
        'Woolf transforma um dia comum em uma exploração profunda da mente humana. O fluxo de consciência captura a essência do pensamento como nenhum outro estilo.',
        '2023-09-17 14:15:00'
    ),
    (
        16,
        16,
        'A Transformação',
        'Kafka cria uma metáfora existencial perfeita sobre alienação e incompreensão. Gregor Samsa é um dos personagens mais trágicos da literatura.',
        '2023-07-17 10:25:00'
    ),
    (
        17,
        17,
        'O Mar como Metáfora',
        'Hemingway em sua essência: prosa enxuta que carrega enorme profundidade. Santiago representa a luta humana contra forças maiores.',
        '2023-06-30 15:35:00'
    ),
    (
        18,
        18,
        'Amor Proibido',
        'Shakespeare captura a intensidade do amor juvenil e a tragédia do ódio entre famílias. Os diálogos são tão poderosos hoje quanto no século XVI.',
        '2023-09-12 20:45:00'
    ),
    (
        19,
        19,
        'As Expectativas de Pip',
        'Dickens mostra como as ambições podem cegar para o que realmente importa. Miss Havisham é uma das personagens mais memoráveis que já criei.',
        '2023-08-27 16:55:00'
    ),
    (
        20,
        20,
        'Aventura no Mississippi',
        'Twain combina aventura com crítica social de forma magistral. A amizade entre Huck e Jim é o coração do livro.',
        '2023-07-24 13:05:00'
    ),
    (
        21,
        21,
        'O Sonho Americano',
        'Fitzgerald captura a essência dos anos 1920 e a ilusão do sonho americano. Gatsby é ao mesmo tempo grandioso e tragicamente humano.',
        '2023-06-17 18:15:00'
    );

-- 10. Inserir 30 Avaliações
INSERT INTO
    mainapp_avaliacao (livro_id, leitor_id, data_hora, nota, texto)
VALUES
    (
        1,
        1,
        '2023-05-11 09:00:00',
        5,
        'Obra prima da literatura brasileira.'
    ),
    (
        1,
        4,
        '2023-05-20 14:00:00',
        4,
        'Excelente, mas exige atenção do leitor.'
    ),
    (
        3,
        2,
        '2023-04-23 16:30:00',
        5,
        'Livro essencial para entender os perigos do autoritarismo.'
    ),
    (
        2,
        3,
        '2023-03-29 11:20:00',
        5,
        'Clarice no seu melhor.'
    ),
    (
        4,
        5,
        '2023-07-05 20:00:00',
        5,
        'Encantador para todas as idades.'
    ),
    (
        5,
        1,
        '2023-06-01 10:15:00',
        4,
        'Enredo inteligente e personagens marcantes.'
    ),
    (
        7,
        6,
        '2023-08-13 15:30:00',
        5,
        'Épico de fantasia que define o gênero.'
    ),
    (
        8,
        7,
        '2023-09-29 18:45:00',
        4,
        'Terror psicológico magistral.'
    ),
    (
        9,
        8,
        '2023-07-19 12:00:00',
        5,
        'Romance perfeito com personagens inesquecíveis.'
    ),
    (
        10,
        9,
        '2023-09-21 14:20:00',
        5,
        'Profundidade psicológica impressionante.'
    ),
    (
        11,
        10,
        '2023-08-06 11:30:00',
        5,
        'Realismo mágico em sua melhor expressão.'
    ),
    (
        12,
        11,
        '2023-10-06 16:40:00',
        4,
        'Distopia perturbadora e necessária.'
    ),
    (
        13,
        12,
        '2023-09-11 10:50:00',
        4,
        'Surreal e fascinante, típico Murakami.'
    ),
    (
        14,
        13,
        '2023-08-19 17:00:00',
        5,
        'Narrativa poderosa sobre o legado da escravidão.'
    ),
    (
        15,
        14,
        '2023-09-16 13:10:00',
        4,
        'Fluxo de consciência brilhante.'
    ),
    (
        16,
        15,
        '2023-07-16 09:20:00',
        5,
        'Metáfora existencial genial.'
    ),
    (
        17,
        16,
        '2023-06-29 14:30:00',
        4,
        'História de superação emocionante.'
    ),
    (
        18,
        17,
        '2023-09-11 19:40:00',
        5,
        'Tragédia amorosa atemporal.'
    ),
    (
        19,
        18,
        '2023-08-26 15:50:00',
        4,
        'Romance de formação rico em detalhes.'
    ),
    (
        20,
        19,
        '2023-07-23 11:00:00',
        5,
        'Aventura clássica com profundidade social.'
    ),
    (
        21,
        20,
        '2023-06-16 16:10:00',
        5,
        'Retrato perfeito dos anos 1920.'
    ),
    (
        22,
        21,
        '2023-05-31 12:20:00',
        4,
        'Comédia brasileira de alta qualidade.'
    ),
    (
        23,
        22,
        '2023-08-11 17:30:00',
        5,
        'Épico fundamental da literatura brasileira.'
    ),
    (
        24,
        23,
        '2023-09-19 13:40:00',
        5,
        'Linguagem revolucionária e poética.'
    ),
    (
        25,
        24,
        '2023-07-26 10:50:00',
        4,
        'Retrato sensível da juventude feminina.'
    ),
    (
        26,
        25,
        '2023-06-21 15:00:00',
        5,
        'Poesia que fala direto à alma.'
    ),
    (
        27,
        1,
        '2023-05-16 11:10:00',
        5,
        'Aventura fantástica para todas as idades.'
    ),
    (
        28,
        2,
        '2023-08-29 21:20:00',
        4,
        'Terror denso e atmosférico.'
    ),
    (
        29,
        3,
        '2023-09-23 14:30:00',
        5,
        'Romance de maturidade emocionante.'
    ),
    (
        30,
        4,
        '2023-10-02 16:40:00',
        5,
        'Obra-prima que explora a natureza humana.'
    );