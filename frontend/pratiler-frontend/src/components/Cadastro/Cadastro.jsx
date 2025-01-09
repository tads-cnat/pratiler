/* Images */
import cadastroCss from '../../assets/css/LoginCadastro/LoginCadastro.module.css';

/* Componentes */
import { CadastroFormulario } from './CadastroFormulario';

export function Cadastro() {
    return (
        <div className={cadastroCss.container}>
            <CadastroFormulario />
        </div>
    );
}