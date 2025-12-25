import React, { useState, useEffect } from 'react';
import { Plus, CaretCircleDown } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

/* CSS */
import bookcaseCss from '../../assets/css/Bookcase/Bookcase.module.css';

/* Store */
import { useAuthStore } from '../Global/authStore';

/* Componentes */
import { Header } from '../Global/HeaderGlobal';
import { CardBook } from './CardBook';
import { SemResultados } from '../SemResultado';
import { fetchAvailableBooks } from './utils';

export function Bookcase() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();
  useEffect(() => {
    async function checkAuth() {
      if (!isAuthenticated) {
        navigate('/login'); // Redireciona para login se não autenticado
      }
    }
    checkAuth();
  }, [navigate, isAuthenticated]);

  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('Lendo');

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      const endpoints = new Map([
        ['Lendo', 'LN'],
        ['Quero Ler', 'QL'],
        ['Lidos', 'LD'],
      ]);
      const endpoint = endpoints.get(filter);

      await fetchAvailableBooks('interacoes', { status: endpoint })
        .then((response) => {
          setBooks(response.data);
        })
        .catch((err) => {
          setError('Erro ao mostrar os Livros: ', err.response.data);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchBooks();
  }, [filter]);

  if (loading) {
    return <p>Carregando Dados....</p>;
  }

  return (
    <>
      <Header />
      <div className={bookcaseCss.sectionBox}>
        <div className={bookcaseCss.listButtons}>
          <form action="#">
            <select name="categories" id="categorie" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="Lendo">
                Leituras Atuais <CaretCircleDown />{' '}
              </option>
              <option value="Quero Ler">Querendo Ler</option>
              <option value="Lidos">Lidos</option>
            </select>
          </form>
          <button className={bookcaseCss.btnPlusBook} onClick={() => navigate(`/adicionar-livro`)}>
            Adicionar Livro
            <Plus className={bookcaseCss.iconPlus} weight="bold" />
          </button>
        </div>
        {books.length === 0 && <SemResultados titulo="Sem Livros por Aqui" tamanho="G" />}
        <div className={bookcaseCss.sectionCards}>
          {error && <p>{error}</p>}
          {books.map((book) => (
            <CardBook
              key={book.id}
              id={book.id}
              img={book.livro.capa}
              title={book.livro.titulo}
              autor={book.livro.autor.nome}
              pages={book.livro.n_paginas}
              status={book.status}
              onDetailsClick={(id) => navigate(`/interacoes/${id}`)}
              onUpdate={() => setFilter('Lidos')}
            />
          ))}
        </div>
      </div>
    </>
  );
}
