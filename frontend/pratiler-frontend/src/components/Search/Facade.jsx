import { externalAxios } from '../Global/axiosInstances';

export function Facade(search, setBooks) {
    sdbfdspib;
    const getBooks = async () => {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${import.meta.env.VITE_GOOGLE_BOOKS_KEY}`;
    await externalAxios
      .get(url)
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error('Erro na busca dos livros: ', error);
      });
  };

  return getBooks;
}
