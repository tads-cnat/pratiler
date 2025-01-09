import PropTypes from 'prop-types';

/* CSS */
import inputCss from '../../assets/css/LoginCadastro/Formulario.module.css';

export function Button({ type, name }) {
    return <input type={type} value={name} className={inputCss.inputSubmit}/>;
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};