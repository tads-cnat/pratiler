import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/* Components */
import { Minibook } from "./Minibook";

/* CSS */
import css from "../../assets/css/AddBook/ListBooks.module.css";
import bookcaseCss from "../../assets/css/Bookcase/Bookcase.module.css";

/* Images */
import noBooks from "../../assets/img/no-books.png";

/* Store */
import { useAuthStore } from "../Global/authStore";
import { internalAxios } from "../Global/axiosInstances";

export function ListBooks() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthStore();
  useEffect(() => {
    async function checkAuth() {
      if (!isAuthenticated) {
        navigate("/login"); // Redireciona para login se não autenticado
      }
    }
    checkAuth();
  }, [navigate]);

  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBooks = async () => {
    setLoading(true);
    await internalAxios
      .get("livros/livros-disponiveis")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        setError("Erro ao mostrar os Livros: ", error.response.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  if (loading) {
    return <p>Carregando Dados....</p>;
  }

  return (
    <>
      <div className={css.listBooks}>
        {error ? (
          error
        ) : books.length === 0 ? (
          <div className={bookcaseCss.sectionCards}>
            <div className={bookcaseCss.boxNoBooks}>
              <h1 className={bookcaseCss.titleNoBooks}>
                {" "}
                Sem livros disponíveis. Pesquise mais livros para visualizá-los
                aqui
              </h1>
              <img
                className={bookcaseCss.noBooks}
                src={noBooks}
                alt="Nenhum livro encontrado"
              />
            </div>
          </div>
        ) : (
          books.map((book) => (
            <Minibook
              key={book.id}
              img={book.capa}
              title={book.titulo}
              autor={book.autor.nome}
              id={book.id}
            />
          ))
        )}
      </div>
    </>
  );
}
