import loginCss from '../../assets/css/Login/Login.module.css'
import { CaminhoCadastro } from "./CaminhoCadastro";
import { LoginFormulario } from "./LoginFormulario";

export function Login(){
    return(
        <div className={loginCss.container}>
            <CaminhoCadastro></CaminhoCadastro>
            <LoginFormulario></LoginFormulario>
        </div>
    )
}