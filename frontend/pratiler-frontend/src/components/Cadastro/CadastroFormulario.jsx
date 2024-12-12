/* eslint-disable no-unused-vars */
import cadastroCss from '../../assets/css/LoginCadastro/Formulario.module.css';
import { Button } from '../Utilities/Button';

import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../Global/authStore';
import axios from 'axios';
import { useState } from "react";
import { AuthSuccessful } from '../Global/AuthSuccessful';
import { AuthFail } from '../Global/AuthFail';

import imageCadastro from "../../assets/img/imagem-cadastro.png";

import { Link } from 'react-router-dom';

export function CadastroFormulario(){
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    
    // Enviando os dados do formulário para a API
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        
        try {
            const { setCsrfToken, csrfToken, login, isAuthenticated } = useAuthStore();
            setCsrfToken();
            const response = await axios.post(
                'http://localhost:8000/api/register',
                formData,
                {
                    headers: {
                        'X-CSRFToken': csrfToken,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            if (response.data.success) {
                const { email, password } = formData;
                const loginRequest = login(email, password);
                if(isAuthenticated){
                    setSuccess("Conta criada com sucesso! Estamos te autenticando...");
                    setTimeout(() => navigate('/livros'), 2000); // Redireciona para a página de livros após autenticação após 2 segundos
                }
                else{
                    setError(loginRequest.data.message || 'Ocorreu um erro ao se autenticar após o cadastro.');
                    setTimeout(() => navigate('/login'), 2000); // Redireciona para a página de login se falhar a autenticação após 2 segundos
                }
            } else {
                setError(response.data.error || 'Ocorreu um erro ao registrar o usuário.');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Erro no servidor. Tente novamente mais tarde.');
        }
    };


    return(
        <div className={cadastroCss.return}>
            <div className={cadastroCss.container}>
                <img src={imageCadastro}/>
            </div>
            
                <div className={cadastroCss.formularioLogin}>
                    <h1>Cadastrar-se</h1>
                    <form className={cadastroCss.formulario} onSubmit={handleSubmit}>
                        {/* <input type="text" placeholder='Nome' className={cadastroCss.inputText}/> */}
                        <input type="text" name='username' placeholder='Nome de usuário' className={cadastroCss.inputText} value={formData.username} onChange={handleChange}/>
                        <input type="text" name='email' placeholder='Email' className={cadastroCss.inputText} value={formData.email} onChange={handleChange}/>
                        <input type="password" name='password' placeholder='Senha' className={cadastroCss.inputText} value={formData.password} onChange={handleChange}/>
                
                        <Button type="submit" name="Criar conta" />
                    </form>
                    {success && <AuthSuccessful message={success}/>}
                    {error && <AuthFail message={error}/>}
                    <p className={cadastroCss.mensagem}>
                        Já possui uma conta? <Link to="/login">Entre na nossa rede</Link>
                    </p>
                </div>
        </div>
    );
}