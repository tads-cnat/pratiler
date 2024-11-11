/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import axios from 'axios'

export function Bookcase() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchBooks = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/livros')
            setBooks(response.data)
        } catch (error) {
            console.error("Erro ao buscar Lviros: ", error);
            setError("Erro ao mostrar os Livros")
        } finally {
            setLoading(false);
        }
    }


    useEffect(() =>{
        fetchBooks()
    }, [])

    if (loading) {
        return <p>Carregando Dados....</p>;
    }

    

    return(
        <>
            {/* Vários Componentes */}
            <div>
                <h1>Lista de Livros</h1>
                {error && <p>{error}</p>}
                <ul>
                    {books.map((book) => (
                        <li key='book.id'> {book.titulo}</li>
                    ))}

                </ul>
            </div>
        </>
    )
}