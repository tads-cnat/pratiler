import { externalAxios, internalAxios } from "../Global/axiosInstances";
import { useState } from "react";
import searchCss from "../../assets/css/Search/Search.module.css";
import { setCsrf, getCsrf } from "../Global/authStore";
import { MagnifyingGlass } from 'phosphor-react';

export function Search() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  const getBooks = async () => {
    const url =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      search +
      "&key=AIzaSyAk5yGHrwwr_CH_3f3UeuA__GBUpT0MOr8";

    try {
      const response = await externalAxios.get(url);
      setBooks(response.data);
    } catch (error) {
      console.error("Erro na busca dos livros: ", error);
    }
  };

  const searchKeyPress = (evt) => {
    if (evt.key === "Enter") {
      getBooks();
    }
  };

  const handleChange = (e) => {
    const input_content = e.target.value;
    setSearch(input_content);
  };

  const sendBook = async (e) => {
    console.log(e);
    try {
      await setCsrf();
      const request = await internalAxios.post(
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
    } catch (error) {
      console.log("Erro ao adicionar o livro: ", error);
    }
  };

  return (
    <>
      <form action="#">
        <button onClick={getBooks} className={searchCss.button}>
          <MagnifyingGlass size={22} color='#221D57' weight='bold'/>
        </button>
        <input
          type="text"
          className={searchCss.searchBar}
          value={search}
          onChange={handleChange}
          onKeyUp={searchKeyPress}
        />
      </form>
      <div className={searchCss.booksResult}>
        <ul>
          {books.items?.map((b) => (
            <li key={b.id}>
              <button onClick={() => sendBook(b)}>
                <img
                  src={b.volumeInfo.imageLinks?.smallThumbnail}
                  alt="Capa do livro."
                />
                <h3>{b.volumeInfo.title}</h3>
                <p>Autor(a): {b.volumeInfo.authors}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
