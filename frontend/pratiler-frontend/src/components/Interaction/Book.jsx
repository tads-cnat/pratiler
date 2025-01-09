import PropTypes from 'prop-types';

/* CSS */
import css from '../../assets/css/Interaction/Book.module.css';

export function Book(props){

    
    return (
        <>
            <div className={css.box}>
                <h1 className={css.ttileOne}>Sua Leitura de <strong>{props.title}</strong></h1>
                <div className={css.sectionBook}>
                    <div className={css.bookDescription}>
                        <img src={props.img} alt="" />  
                        <p className={css.title}>{props.title}</p>
                        <p className={css.autor}>{props.autor}</p>
                    </div>
                    <div className={css.sinopseButtons}>
                        <p className={css.sinopse}>{props.sinopse}</p>
                        <div className={css.buttons}>
                            <button className={css.btnBegin}>Marcar como Lido</button>
                            <button className={css.btnAdd}>Fazer Resenha</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Book.propTypes = {
    img: PropTypes.string,
    id: PropTypes.number,
    autor: PropTypes.string,
    title: PropTypes.string,
    status: PropTypes.string,
    sinopse: PropTypes.string,
};