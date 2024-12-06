/* eslint-disable no-unused-vars */
import cardBookCss from '../../assets/css/Bookcase/CardBook.module.css';
import { Plus } from 'phosphor-react';
import PropTypes from 'prop-types';

export function CardBook(props){

    return(
        <>
            <div className={cardBookCss.card}>
                <img className={cardBookCss.imageBook} src={props.img} alt="" />
                <div className={cardBookCss.description}>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <button>Páginas {props.pages}/{props.pages}<Plus weight="bold" color="#ffffff" size={16} /></button>
                </div>
            </div>
        </>
    );
}

CardBook.propTypes = {
    img: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
    pages: PropTypes.number,
};