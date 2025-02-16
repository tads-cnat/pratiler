/* eslint-disable no-unused-vars */
import { CheckCircle, MagnifyingGlass } from 'phosphor-react';
import { useState } from 'react';
import { internalAxios } from '../Global/axiosInstances';
import { useAuthStore } from '../Global/authStore';
import PropTypes from 'prop-types';
import cardBookCss from '../../assets/css/Bookcase/CardBook.module.css'

export function CardBook({ img, autor, status, title, pages, id, onDetailsClick, onUpdate, sinopse }){

    const [successMessage, setSuccessMessage] = useState(null);
    const { csrfToken } = useAuthStore();

    const handleMarkAsRead = async (id) => {
        try {
            const response = await internalAxios.put(`interacoes/${id}/marcar-como-lido`, {}, {
                headers: {
                    'X-Csrftoken': csrfToken
                }
            });
            setSuccessMessage(response.data.message || "Livro marcado como lido!");

            setTimeout(() => {
                setSuccessMessage(null);
                if (onUpdate) {
                    onUpdate();
                }
            }, 3000);
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
        
                    <div className={cardBookCss.buttons}>
                        <button onClick={() => onDetailsClick(id)} className={cardBookCss.viewDetails}>Ver Leitura<MagnifyingGlass size={16} weight="bold" /></button>
                        {status !== "LD" &&(
                            <button className={cardBookCss.lido} onClick={() => handleMarkAsRead(id)} ><CheckCircle weight='bold' size={27} /></button> 
                        )}
                    </div>
                </div>
                <div className={cardBookCss.categories}>

                </div>

                {successMessage && (
                    <div className={cardBookCss.successMessage}>
                        {successMessage}
                    </div>
                )}
            </div>
        </>
    );
}

CardBook.propTypes = {
    img: PropTypes.string,
    autor: PropTypes.string,
    title: PropTypes.string,
    pages: PropTypes.number,
    sinopse: PropTypes.string,
    id: PropTypes.number.isRequired,
    status:PropTypes.string,
    onDetailsClick: PropTypes.func.isRequired,
    onUpdate: PropTypes.func,
};