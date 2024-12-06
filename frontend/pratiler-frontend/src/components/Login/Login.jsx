import loginCss from '../../assets/css/LoginCadastro/LoginCadastro.module.css';
import { LoginFormulario } from "./LoginFormulario";

export function Login(){
    return(
        <div className={loginCss.container}>
            <LoginFormulario />
        </div>
    );
}