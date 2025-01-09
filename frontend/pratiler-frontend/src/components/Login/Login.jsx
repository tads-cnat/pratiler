/* CSS */
import loginCss from '../../assets/css/LoginCadastro/LoginCadastro.module.css';

/* Componentes */
import { LoginFormulario } from "./LoginFormulario";

export function Login(){
    return(
        <div className={loginCss.container}>
            <LoginFormulario />
        </div>
    );
}