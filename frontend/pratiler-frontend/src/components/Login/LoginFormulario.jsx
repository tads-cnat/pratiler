import loginCss from  '../../assets/css/LoginCadastro/Formulario.module.css'
import { Button } from '../Utilities/Button'
import { Link } from 'react-router-dom'

export function LoginFormulario(){
    return(
        <div className={loginCss.formularioLogin}>
            <h1>Entrar</h1>
            <form className={loginCss.formulario}>
                <input type="text" placeholder='Email' className={loginCss.inputText}/>
                <input type="text" placeholder='Senha' className={loginCss.inputText}/>
                <p>Recuperar senha?</p>
                <Link to='/livros' className={loginCss.inputSubmit}>
                    <Button type="submit" name="Entrar"/>
                </Link>
            </form>
        </div>
        
    )
}
