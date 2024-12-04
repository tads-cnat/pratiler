/* eslint-disable no-unused-vars */
import { getCookie } from '../Global/authStore';
import { useNavigate } from 'react-router-dom';
import loginCss from  '../../assets/css/LoginCadastro/Formulario.module.css';
import { Button } from '../Utilities/Button';
import axios from 'axios';
import { useState } from "react";
import imageLogin from '../../assets/img/imagem-login.png';

export function LoginFormulario(){
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const fetchLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try{
            const csrftoken = getCookie('csrftoken');
            const response = await axios.post('http://localhost:8000/api/login', formData, {
                    headers: {
                        'X-CSRFToken': csrftoken,
                        'Content-Type': 'application/json',
                    },
                    withCredentials: true,
                }
            );
            if(response.data.success){
                setSuccess("Login efetuado com sucesso! Sinta-se a vontade.");
                setTimeout(() => navigate('/livros'), 1000);
            }
            else setError(response.data.message);
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
                {success && <p className={loginCss.successMessage}>{success}</p>}
                {error && <p className={loginCss.errorMessage}>{error}</p>}
            </div>
        </div>
        
    );
}
