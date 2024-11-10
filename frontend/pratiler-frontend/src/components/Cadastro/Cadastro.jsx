import cadastroCss from '../../assets/css/Login/Login.module.css'
import { CaminhoLogin } from './CaminhoLogin'
import { CadastroFormulario } from './CadastroFormulario'

export function Cadastro() {
    return (
        <div className={cadastroCss.container}>
            <CaminhoLogin />
            <CadastroFormulario />
        </div>
    )
}