/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { internalAxios } from "../Global/axiosInstances";
import { Plus, CaretCircleDown } from 'phosphor-react';
import { useNavigate } from "react-router-dom";

/* CSS */
import bookcaseCss from '../../assets/css/Bookcase/Bookcase.module.css';

/* Store */
import { useAuthStore } from "../Global/authStore";

/* Componentes */
import { Header } from "../Global/HeaderGlobal";
import { CardBook } from "./CardBook";

/* Images */
import noBooks from '../../assets/img/no-books.png'


export function Bookcase() {

    const navigate = useNavigate();
    
    const { isAuthenticated } = useAuthStore();
    useEffect(() => {
        async function checkAuth() {
          if (!isAuthenticated) {
            navigate('/login'); // Redireciona para login se não autenticado
          }
        }
        checkAuth();
    }, [navigate, isAuthenticated]);

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("Lendo");
    
    const fetchBooks = async () => {
        setLoading(true);
        try{
            const endpoint = {
                "Lendo": "interacoes/leitor",
                "Quero Ler": "interacoes/leitor/quero_ler",
                "Lidos": "interacoes/leitor/lidos",
            }[filter];

            const response = await internalAxios.get(endpoint);

            setBooks(response.data);
        } catch (error) {
            console.error("Erro ao buscar Livros: ", error);
            setError("Erro ao mostrar os Livros: ", error);
        } finally {
            setLoading(false);
        }
    }
    
    
    useEffect(() =>{
        fetchBooks();
    }, [filter]);



    if (loading) {
        return <p>Carregando Dados....</p>;
    }

    

    return(
        <>
            <Header 
                user={user}
            />
            <div className={bookcaseCss.sectionBox}>
                <div className={bookcaseCss.listButtons}>
                    <form action="#">
                        <select name="categories" id="categorie" value={filter} onChange={(e) => setFilter(e.target.value)}>
                            <option value="Lendo">Leituras Atuais <CaretCircleDown /> </option>
                            <option value="Quero Ler">Querendo Ler</option>
                            <option value="Lidos">Lidos</option>
                        </select>
                    </form>
                    <button className={bookcaseCss.btnPlusBook} onClick={() => navigate(`/adicionar-livro`)}>
                        Adicionar Livro
                        <Plus className={bookcaseCss.iconPlus} weight="bold" />
                    </button>
                </div>  
                <div className={bookcaseCss.sectionCards}>
                    {books.length === 0 && (
                        <div className={bookcaseCss.boxNoBooks}>
                            <h1 className={bookcaseCss.titleNoBooks}> Sem Livros por aqui</h1>
                            <img className={bookcaseCss.noBooks} src={noBooks} alt="Nenhum livro encontrado" />
                        </div>
                    )}
                    {error && <p>{error}</p>}
                    {books.map((book) => (
                        <CardBook 
                            key={book.id}
                            id={book.id}
                            img={book.livro.capa} 
                            title={book.livro.titulo} 
                            autor={book.livro.autor.nome}
                            pages={book.livro.n_paginas}
                            status={book.status}
                            onDetailsClick={(id) => navigate(`/interacoes/${id}`)}
                            onUpdate={() => fetchBooks()}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}


