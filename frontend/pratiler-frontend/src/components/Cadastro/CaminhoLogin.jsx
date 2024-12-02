import caminhoCSS from '../../assets/css/LoginCadastro/Caminho.module.css';
import { Button } from '../Utilities/Button';
import { Link } from 'react-router-dom';

export function CaminhoLogin(){
    return(
        <div className={caminhoCSS.container}>
            <h1>
                Já tem uma conta?
            </h1>
            <h2>
                Entre em nossa rede!
            </h2>
            <Link to="/login">
                <Button type="button" name="Login" />
            </Link>
        </div>
    );
}