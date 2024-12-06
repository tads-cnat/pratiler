import PropTypes from 'prop-types';
import sectionCss from '../../assets/css/Index/Section.module.css';

export function Section(props){
    return (
        <>
            <section className={sectionCss.big_box}>
                <div className={sectionCss.box}>
                    <h1><strong>{props.strong}</strong> {props.title}</h1>
                    <p>{props.text}</p>
                    <p>{props.text_two}</p>
                </div>
                <img src={props.img} alt="" className={sectionCss.box_img}/>
            </section>
        </>
    );
}

Section.propTypes = {
    strong: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string.isRequired,
    text_two: PropTypes.string.isRequired,
    img: PropTypes.string,
};