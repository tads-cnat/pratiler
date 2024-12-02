import loginCss from '../../assets/css/LoginCadastro/LoginCadastro.module.css';
import { CaminhoCadastro } from "./CaminhoCadastro";
import { LoginFormulario } from "./LoginFormulario";

export function Login(){
    return(
        <div className={loginCss.container}>
            <CaminhoCadastro />
            <LoginFormulario />
        </div>
    );
}