/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import axios from 'axios'
import { Plus, CaretCircleDown } from 'phosphor-react'

import { Header } from "../Global/HeaderGlobal";
import { CardBook } from "./CardBook";

import bookcaseCss from '../../assets/css/Bookcase/Bookcase.module.css';

export function Bookcase() {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    

    const fetchBooks = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/livros')
            setBooks(response.data)
        } catch (error) {
            console.error("Erro ao buscar Livros: ", error);
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
                        <Plus weight="bold" size={20} color="#f6f6f6" />
                    </button>
                </div>  
                <img src="" alt="" />
                <div className={bookcaseCss.sectionCards}>
                    {error && <p>{error}</p>}
                    {books.map((book) => (
                        <CardBook 
                            key={book.id}
                            img={book.capa} 
                            title={book.titulo} 
                            description={book.descricao}
                            pages={book.n_paginas}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}