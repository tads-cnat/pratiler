import caminhoCSS from '../../assets/css/Login/CaminhoCadastro.module.css'

export function CaminhoCadastro(){
    return(
        <div className={caminhoCSS.container}>
            <h1>
                Não possui uma conta?
            </h1>
            <h2>
                Cadastre-se na nossa rede!
            </h2>
            <input type="button" value="Cadastro"/>
        </div>
    )
}