import cadastroCss from '../../assets/css/LoginCadastro/LoginCadastro.module.css';
import { CadastroFormulario } from './CadastroFormulario';

export function Cadastro() {
    return (
        <div className={cadastroCss.container}>
            <CadastroFormulario />
        </div>
    );
}