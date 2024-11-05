import loginCss from './LoginFormulario.module.css'

export function LoginFormulario(){
    return(
        <div className={loginCss.formularioLogin}>
            <h1>Entrar</h1>
            <form className={loginCss.formulario}>
                <input type="text" placeholder='Email' className={loginCss.inputText}/>
                <input type="text" placeholder='Senha' className={loginCss.inputText}/>
                <p>Recuperar senha?</p>
                <input type="submit" value="Entrar" className={loginCss.inputSubmit}/>
            </form>
        </div>
        
    )
}
