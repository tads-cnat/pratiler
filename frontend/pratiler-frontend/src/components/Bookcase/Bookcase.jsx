/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import axios from 'axios';
import { getCookie } from "../Global/authStore";
import { Plus, CaretCircleDown } from 'phosphor-react';
import { Header } from "../Global/HeaderGlobal";
import { CardBook } from "./CardBook";
import { useNavigate } from "react-router-dom";


import bookcaseCss from '../../assets/css/Bookcase/Bookcase.module.css';

export function Bookcase() {

    const csrftoken = getCookie('csrftoken');
    const navigate = useNavigate();

    useEffect(() => {
        async function checkAuth() {
          const response = await fetch('http://localhost:8000/api/user', { credentials: 'include' });
          if (!response.ok) {
            navigate('/login'); // Redireciona para login se não autenticado
          }
        }
        checkAuth();
    }, [navigate]);

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    /* const user = axios.get('http://localhost:8000/api/user', {
        headers: {
            'X-CSRFToken': getCookie('csrftoken'),
            'Content-Type': 'application/json',
        },
        withCredentials: true,
    }); */
    
    const fetchBooks = async () => {
        try{
            const response = await axios.get('http://localhost:8000/api/interacoes/leitor',{
                headers: {
                    'X-CSRFToken': csrftoken, // Inclui o CSRF token
                },
                withCredentials: true,
            }) ;
            console.log("Dados recebidos:", response.data);
            setBooks(response.data);
        } catch (error) {
            console.error("Erro ao buscar Livros: ", error);
            setError("Erro ao mostrar os Livros");
        } finally {
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
            <Header />
            <div className={bookcaseCss.sectionBox}>
                <div className={bookcaseCss.listButtons}>
                    <form action="#">
                        <select name="categories" id="categorie">
                            <option value="leituras-atuais">Leituras Atuais <CaretCircleDown /> </option>
                            <option value="saab">Leituras Antigas</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                    </form>
                    <button className={bookcaseCss.btnPlusBook}>
                        Adicionar Livro
                        <Plus className={bookcaseCss.iconPlus} weight="bold" />
                    </button>
                </div>  
                <img src="" alt="" />
                <div className={bookcaseCss.sectionCards}>
                    {error && <p>{error}</p>}
                    {books.map((book) => (
                        <CardBook 
                            key={book.id}
                            img={book.livro.capa} 
                            title={book.livro.titulo} 
                            description={book.livro.descricao}
                            pages={book.livro.n_paginas}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}