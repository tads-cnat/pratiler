import cadastroCss from '../../assets/css/LoginCadastro/Formulario.module.css'
import { Button } from '../Utilities/Button'
import { Link } from 'react-router-dom'

export function CadastroFormulario(){
    return(
        <div className={cadastroCss.formularioLogin}>
            <h1>Cadastrar-se</h1>
            <form className={cadastroCss.formulario}>
                <input type="text" placeholder='Nome' className={cadastroCss.inputText}/>
                <input type="text" placeholder='Nome de usuário' className={cadastroCss.inputText}/>
                <input type="text" placeholder='Email' className={cadastroCss.inputText}/>
                <input type="text" placeholder='Senha' className={cadastroCss.inputText}/>
                <Link to='/login' className={cadastroCss.inputSubmit}>
                    <Button type="submit" name="Criar conta" />
                </Link>
            </form>
        </div>
    )
}