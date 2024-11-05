import loginCss from './Login.module.css'
import { CaminhoCadastro } from "./CaminhoCadastro/CaminhoCadastro";
import { LoginFormulario } from "./LoginFormulario/LoginFormulario";

export function Login(){
    return(
        <div className={loginCss.container}>
            <CaminhoCadastro></CaminhoCadastro>
            <LoginFormulario></LoginFormulario>
        </div>
    )
}