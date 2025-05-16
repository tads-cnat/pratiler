import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/* Components */
import { Minibook } from "./Minibook";
import { SemResultados } from "../SemResultado";

/* CSS */
import css from "../../assets/css/AddBook/ListBooks.module.css";

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
          <SemResultados titulo="Sem livros disponíveis. Pesquise mais livros para visualizá-los." />
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
