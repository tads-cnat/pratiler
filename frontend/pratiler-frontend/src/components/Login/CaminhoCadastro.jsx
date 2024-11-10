import caminhoCSS from '../../assets/css/Login/CaminhoCadastro.module.css'
import { Button } from '../Utilities/Button'
import { Link } from 'react-router-dom'

export function CaminhoCadastro(){
    return(
        <div className={caminhoCSS.container}>
            <h1>
                Não possui uma conta?
            </h1>
            <h2>
                Cadastre-se na nossa rede!
            </h2>
            <Link to="/cadastro">
                <Button type="button" name="Cadastro"/>
            </Link>
        </div>
    )
}