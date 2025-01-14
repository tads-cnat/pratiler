/* eslint-disable no-unused-vars */
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

/* CSS */
import loginCss from  '../../assets/css/LoginCadastro/Formulario.module.css';

/* Componentes */
import { Button } from '../Utilities/Button';
import { AuthSuccessful } from "../Global/AuthSuccessful";
import { AuthFail } from "../Global/AuthFail";
import { useAuthStore } from '../Global/authStore';

/* Images */
import imageLogin from '../../assets/img/imagem-login.png';


export function LoginFormulario(){
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { login } = useAuthStore();
    const navigate = useNavigate();

    const fetchLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try{
            const { email, password } = formData;
            const loginRequest = await login(email, password);
            if(loginRequest.success){
                setSuccess("Login efetuado com sucesso! Sinta-se a vontade.");
                setTimeout(() => navigate('/livros'), 2000);
            }
            else setError(loginRequest.message);
        } catch (error){
            setError("Erro ao fazer login: " + error);
        }
    }

    const handleChange = (e) => { // função chamada ao mudar um campo do formulário
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
        <div className={loginCss.return}>
            <div className={loginCss.container}>
                <img src={ imageLogin }/>
            </div>
            <div className={loginCss.formularioLogin}>
                <h1>Entrar</h1>
                <form className={loginCss.formulario} onSubmit={fetchLogin}>
                    <input type="text" placeholder='Email' className={loginCss.inputText} name="email"  value={formData.email} onChange={handleChange}/>
                    <input type="password" placeholder='Senha' className={loginCss.inputText} name="password" value={formData.password} onChange={handleChange}/>
                    <p>Recuperar senha?</p>
                    
                    <Button type="submit" name="Entrar"/>
                </form>
                <p className={loginCss.mensagem}>
                    Não possui uma conta? <Link to="/cadastro">Cadastre-se na nossa rede</Link>
                </p>
                {success && <AuthSuccessful message={success}/>}
                {error && <AuthFail message={error}/>}
            </div>
        </div>
        
    );
}
