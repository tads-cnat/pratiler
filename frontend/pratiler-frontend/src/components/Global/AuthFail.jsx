/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';

/* CSS */
import authCss from "../../assets/css/Global/AuthFail.module.css";

export function AuthFail(props){
    return(
        <>
            <div className={authCss.boxMessage}>
              <span className={authCss.messageOne}>{props.message}</span> 
            </div>
        </>
    )
};

AuthFail.propTypes = {
    message: PropTypes.string,
};