/* eslint-disable no-unused-vars */
import loginCss from  '../../assets/css/LoginCadastro/Formulario.module.css'
import { Button } from '../Utilities/Button'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState } from "react"

export function LoginFormulario(){
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const fetchLogin = async () => {
        try{
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData)
            setUser(response.data)
        } catch (error){
            console.error("Erro ao fazer login: ", error)
            setError("Erro ao fazer login")
        }
    }

    const handleChange = (e) => { // função chamada ao mudar um campo do formulário
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return(
        <div className={loginCss.formularioLogin}>
            <h1>Entrar</h1>
            <form className={loginCss.formulario} onSubmit={fetchLogin}>
                <input type="text" placeholder='Email' className={loginCss.inputText} name="email"  value={formData.email} onChange={handleChange}/>
                <input type="password" placeholder='Senha' className={loginCss.inputText} name="password" value={formData.password} onChange={handleChange}/>
                <p>Recuperar senha?</p>
                <Link to='/livros' className={loginCss.inputSubmitLogin}>
                    <Button type="submit" name="Entrar"/>
                </Link>
            </form>
        </div>
        
    )
}
