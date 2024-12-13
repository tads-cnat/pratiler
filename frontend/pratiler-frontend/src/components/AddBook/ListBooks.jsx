/* eslint-disable no-unused-vars */
import css from '../../assets/css/AddBook/ListBooks.module.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '../Global/authStore';
import { Minibook } from './Minibook';
export function ListBooks(){

    const navigate = useNavigate();

    const { isAuthenticated } = useAuthStore();
    useEffect(() => {
        async function checkAuth() {
          if (!isAuthenticated) {
            navigate('/login'); // Redireciona para login se não autenticado
          }
        }
        checkAuth();
    }, [navigate]);

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBooks = async () => {
        setLoading(true);
        try{
            const response = await axios.get('http://localhost:8000/api/livros-disponiveis', {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            });
            console.log("Dados recebidos:", response.data);
            setBooks(response.data);
        } catch(error){
            setError("Erro ao mostrar os Livros");
        } finally{
            setLoading(false);
        }
    }

    useEffect(() =>{
        fetchBooks();
    }, []);


    if (loading) {
        return <p>Carregando Dados....</p>;
    }

    return(
        <>
            <div className={css.listBooks}>
                {(error) ? error : books.map((book) => (
                    <Minibook 
                        key={book.id}
                        img={book.capa}
                        title={book.titulo}
                        autor={book.autor.nome}
                        id={book.id}
                    /> 
                ))}
            </div>
        </>
    )
}