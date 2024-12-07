import PropTypes from 'prop-types'

import css from '../../assets/css/Interaction/Book.module.css'

export function Book(props){
    return (
        <>
            <div className={css.Box}>
                <h1>Detalhes da Interação</h1>
                <img src={props.img} alt="" />
                <p><strong>Livro:</strong> {props.title}</p>
                <p><strong>Autor:</strong> {props.autor}</p>
                <p><strong>Status:</strong> {props.status}</p>
            </div>
        </>
    )
}

Book.propTypes = {
    img: PropTypes.string,
    autor: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
};