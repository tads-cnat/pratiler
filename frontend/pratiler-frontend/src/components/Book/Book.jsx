import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

/* Components */
import { Header } from '../Global/HeaderGlobal';

/* CSS */
import bookCss from '../../assets/css/Book/Book.module.css';

/* Store */
import { externalAxios, internalAxios } from '../Global/axiosInstances';

export function Book() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  const fetchDescritpion = (desc) => {
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(desc, 'text/html');
    return htmlDoc.querySelector('body').innerText;
  };

  useEffect(() => {
    const fetchBookDetails = async () => {
      await externalAxios
        .get(`https://www.googleapis.com/books/v1/volumes/${id}`)
        .then((response) => {
          setBook(response.data);
        })
        .catch((error) => {
          console.error('Erro ao buscar detalhes do livro: ', error);
        });
    };
    fetchBookDetails();
  }, [id]);

  const sendBook = async (e) => {
    const isbn = e.volumeInfo.industryIdentifiers[0].identifier;

    const desc = fetchDescritpion(e.volumeInfo.description);

    const postResponse = await internalAxios.post('livros', {
      titulo: e.volumeInfo.title,
      sinopse: desc,
      capa: e.volumeInfo.imageLinks?.thumbnail,
      n_paginas: e.volumeInfo.pageCount,
      isbn,
      autor: e.volumeInfo.authors[0],
    });
    if (postResponse.status === 201)
      await internalAxios.get(`livros/${isbn}`).then(async (response) => {
        await internalAxios.post('interacoes', { livro_id: response.data.id, status: 'LN' }).then(() => {
          navigate('/livros');
        });
      });
  };

  return (
    <>
      <Header />

      {book ? (
        <div className={bookCss.detalhesLivro}>
          <div>
            <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Capa do livro" className={bookCss.capa} />
          </div>

          <div className={bookCss.infosLivro}>
            <h1>{book.volumeInfo.title}</h1>
            <p>
              <strong>Autor(a):</strong> {book.volumeInfo.authors}
            </p>
            <p>
              <strong>Sinopse:</strong> {fetchDescritpion(book.volumeInfo.description)}
            </p>
            <button onClick={() => sendBook(book)}>Começar leitura</button>
          </div>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </>
  );
}
