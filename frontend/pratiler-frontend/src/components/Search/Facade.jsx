import { externalAxios } from '../Global/axiosInstances';

export function Facade(search, setBooks) {
  const getBooks = async () => {
    const url =
      'https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAk5yGHrwwr_CH_3f3UeuA__GBUpT0MOr8';
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
