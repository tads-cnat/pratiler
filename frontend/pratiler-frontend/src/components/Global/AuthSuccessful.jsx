import PropTypes from 'prop-types';

/* CSS */
import authCss from '../../assets/css/Global/AuthSuccessful.module.css';

export function AuthSuccessful(props) {
  return (
    <div className={authCss.boxMessage}>
      <span className={authCss.messageOne}>{props.message}</span>
    </div>
  );
}

AuthSuccessful.propTypes = {
  message: PropTypes.string,
};
