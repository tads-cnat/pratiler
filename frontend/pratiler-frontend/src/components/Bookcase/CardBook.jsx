/* eslint-disable no-unused-vars */
import cardBookCss from '../../assets/css/Bookcase/CardBook.module.css';
import { MagnifyingGlass } from 'phosphor-react';
import { CheckCircle } from 'phosphor-react';
import { getCookie } from "../Global/authStore";

import axios from 'axios';

import PropTypes from 'prop-types';

export function CardBook({ img, autor, status, title, pages, id, onDetailsClick, onUpdate }){


    const handleMarkAsRead = async (id) => {
        try {
            const response = await axios.put(
                `http://localhost:8000/api/interacoes/${id}/marcar-como-lido`,
                {}, // O corpo pode estar vazio
                {
                    headers: {
                        'X-CSRFToken': getCookie('csrftoken'), // Inclui o CSRF token
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            alert(response.data.message || "Livro marcado como lido!");

            if(onUpdate) {
                onUpdate();
            }
        } catch (error) {
            console.error("Erro ao marcar como lido:", error);
            alert("Não foi possível marcar o livro como lido.");
        }
    };

    return(
        <>
            <div className={cardBookCss.card}>
                <img className={cardBookCss.imageBook} src={img} alt="" />
                <div className={cardBookCss.description}>
                    <div className={cardBookCss.info}>
                        <h3>{title}</h3>
                        <p>{autor}</p>
                        <p>{pages} Páginas</p>
                    </div>
                    {/* <p>{props.description}</p> */}
                    <div className={cardBookCss.buttons}>
                        <button onClick={() => onDetailsClick(id)} className={cardBookCss.viewDetails}>Ver Leitura<MagnifyingGlass size={16} weight="bold" /></button>
                        {/* <button>Estou aqui<CheckFat size={16} weight="fill" /></button> */}
                        {status !== "LD" &&(
                            <button className={cardBookCss.lido} onClick={() => handleMarkAsRead(id)} ><CheckCircle weight='bold' size={27} /></button> 
                        )}
                    </div>
                </div>
                <div className={cardBookCss.categories}>

                </div>
            </div>
        </>
    );
}

CardBook.propTypes = {
    img: PropTypes.string,
    autor: PropTypes.string,
    title: PropTypes.string,
    pages: PropTypes.number,
    id: PropTypes.number.isRequired,
    status:PropTypes.string,
    onDetailsClick: PropTypes.func.isRequired,
    onUpdate: PropTypes.func,
};