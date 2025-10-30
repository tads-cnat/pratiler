import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

/* Store */
import { useAuthStore } from "../Global/authStore";

/* CSS */
import cadastroCss from "../../assets/css/LoginCadastro/Formulario.module.css";
import inputCss from "../../assets/css/Input/Input.module.css";

/* Componentes */
import { AuthSuccessful } from "../Global/AuthSuccessful";
import { AuthFail } from "../Global/AuthFail";

/* Images */
import imageCadastro from "../../assets/img/imagem-cadastro.png";

const schema = yup.object().shape({
  nome: yup.string().required("Campo nome é obrigatório"),
  username: yup.string().required("Campo username é obrigatório"),
  email: yup
    .string()
    .email("Email inválido")
    .required("Campo email é obrigatório"),
  password: yup.string().required("Campo senha é obrigatório"),
});

export function CadastroFormulario() {
  const { register } = useAuthStore();
  const {
    register: registerField,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  async function fetchRegister(data) {
    setError(null);
    const { nome, username, email, password } = data;
    const response = await register(nome, username, email, password);
    if (useAuthStore.getState().isAuthenticated) {
      setSuccess("Conta criada com sucesso! Estamos te autenticando...");
      setTimeout(() => navigate("/livros"), 2000);
    } else setError(response.message);
  }

  return (
    <div className={cadastroCss.return}>
      <div className={cadastroCss.container}>
        <img src={imageCadastro} />
      </div>

      <div className={cadastroCss.formularioLogin}>
        <h1>Cadastrar-se</h1>
        <form
          className={cadastroCss.formulario}
          onSubmit={handleSubmit(fetchRegister)}
        >
          <input
            type="text"
            name="nome"
            placeholder="Nome do Usuário"
            className={inputCss.inputText}
            {...registerField("nome")}
          />
          {errors.nome && (
            <p className={inputCss.error}>{errors.nome.message}</p>
          )}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={inputCss.inputText}
            {...registerField("username")}
          />
          {errors.username && (
            <p className={inputCss.error}>{errors.username.message}</p>
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={inputCss.inputText}
            {...registerField("email")}
          />
          {errors.email && (
            <p className={inputCss.error}>{errors.email.message}</p>
          )}
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className={inputCss.inputText}
            {...registerField("password")}
          />
          {errors.password && (
            <p className={inputCss.error}>{errors.password.message}</p>
          )}
          <input
            type="submit"
            value="Criar conta"
            className={inputCss.inputSubmit}
          />
        </form>
        {success && <AuthSuccessful message={success} />}
        {error && <AuthFail message={error} />}
        <p className={cadastroCss.mensagem}>
          Já possui uma conta? <Link to="/login">Entre na nossa rede</Link>
        </p>
      </div>
    </div>
  );
}
