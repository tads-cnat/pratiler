import { useState } from 'react';
import searchCss from '../../assets/css/Search/Search.module.css';
import { MagnifyingGlass } from 'phosphor-react';
import { Facade } from './Facade';
import { useNavigate } from 'react-router-dom';

export function Search() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const getBooks = Facade(search, setBooks);

  const handleChange = (e) => {
    const input_content = e.target.value;
    setSearch(input_content);
  };

  const handleBookClick = (bookId) => {
    navigate(`/livro-busca/${bookId}`);
  };

  const searchKeyPress = (evt) => {
    if (evt.key === 'Enter') {
      evt.preventDefault();
      getBooks();
    }
  };

  return (
    <>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          getBooks();
        }}
      >
        <button type="submit" className={searchCss.button}>
          <MagnifyingGlass size={22} color="#3D3569" weight="bold" />
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
              <button onClick={() => handleBookClick(b.id)}>
                <img src={b.volumeInfo.imageLinks?.smallThumbnail} alt="Capa do livro." />
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
