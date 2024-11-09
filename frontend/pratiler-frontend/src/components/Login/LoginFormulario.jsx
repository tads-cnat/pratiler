import loginCss from '../../assets/css/Login/LoginFormulario.module.css'

import { Link } from 'react-router-dom'

export function LoginFormulario(){
    return(
        <div className={loginCss.formularioLogin}>
            <h1>Entrar</h1>
            <form className={loginCss.formulario}>
                <input type="text" placeholder='Email' className={loginCss.inputText}/>
                <input type="text" placeholder='Senha' className={loginCss.inputText}/>
                <p>Recuperar senha?</p>
                <Link to='/livros'>
                    <input type="submit" value="Entrar" className={loginCss.inputSubmit}/>
                </Link>
            </form>
        </div>
        
    )
}
