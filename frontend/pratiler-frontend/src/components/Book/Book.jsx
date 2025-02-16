import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { externalAxios, internalAxios } from "../Global/axiosInstances";
import { Header } from "../Global/HeaderGlobal";
import bookCss from "../../assets/css/Book/Book.module.css"
import { setCsrf, getCsrf } from "../Global/authStore";
import { useNavigate } from "react-router-dom";

export function Book(){
    const {id} = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBookDetails = async () => {
          try {
            const response = await externalAxios.get(
              `https://www.googleapis.com/books/v1/volumes/${id}`
            );
            setBook(response.data);
          } catch (error) {
            console.error("Erro ao buscar detalhes do livro: ", error);
          }
        };
    
        fetchBookDetails();
    }, [id]);

    const sendBook = async (e) => {
      console.log(e);
      try {
        await setCsrf();
        await internalAxios.post(
          "salvar-livro",
          {
                titulo: e.volumeInfo.title,
                sinopse: e.volumeInfo.description,
                capa: e.volumeInfo.imageLinks?.thumbnail,
                n_paginas: e.volumeInfo.pageCount,
                isbn: e.volumeInfo.industryIdentifiers[0].identifier,
                autor: e.volumeInfo.authors[0],
          },
          {
            headers: {
              'X-Csrftoken': await getCsrf()
            },
            withCredentials: true,
          }
        );
  
        const response = await internalAxios.get(`buscar-livro/${e.volumeInfo.industryIdentifiers[0].identifier}`);
        const book_response = response.data
  
        await internalAxios.post(
          `interacoes/leitor/lendo?livro_id=${book_response.id}`, {}, {
              headers: {
                  'X-Csrftoken': await getCsrf()
              }
        });

        navigate('/livros');
  
      } catch (error) {
        console.log("Erro ao adicionar o livro: ", error.response.data);
      }
    };

    return (
      <>
          <Header></Header>

          {book ? (
          <div className={bookCss.detalhesLivro}>
              <div>
                  <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Capa do livro" className={bookCss.capa}/>
              </div>

              <div className={bookCss.infosLivro}>
                  <h1>{book.volumeInfo.title}</h1>
                  <p><strong>Autor(a):</strong> {book.volumeInfo.authors}</p>
                  <p><strong>Sinopse:</strong> {book.volumeInfo.description}</p>
                  <button onClick={() => sendBook(book)}>Começar leitura</button>
              </div>
          </div>
          ) : ( <p>Carregando...</p> )}
      </>
        
    );
}