/* eslint-disable no-unused-vars */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
/* CSS */
import loginCss from "../../assets/css/LoginCadastro/Formulario.module.css";
import inputCss from "../../assets/css/Input/Input.module.css";

/* Componentes */
import { AuthSuccessful } from "../Global/AuthSuccessful";
import { AuthFail } from "../Global/AuthFail";
import { useAuthStore } from "../Global/authStore";

/* Images */
import imageLogin from "../../assets/img/imagem-login.png";
import { use } from "react";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email inválido")
    .required("Campo email é obrigatório"),
  password: yup.string().required("Campo senha é obrigatório"),
});

export function LoginFormulario() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { login } = useAuthStore();
  const navigate = useNavigate();

  async function fetchLogin(data) {
    setError(null);
    const { email, password } = data;
    await login(email, password);
    if (useAuthStore.getState().isAuthenticated) {
      setSuccess("Login efetuado com sucesso! Sinta-se a vontade.");
      setTimeout(() => navigate("/livros"), 2000);
    } else setError("Email ou senha inválidos.");
  }

  return (
    <div className={loginCss.return}>
      <div className={loginCss.container}>
        <img src={imageLogin} />
      </div>
      <div className={loginCss.formularioLogin}>
        <h1>Entrar</h1>
        <form
          className={loginCss.formulario}
          onSubmit={handleSubmit(fetchLogin)}
        >
          <input
            type="email"
            placeholder="Email"
            className={inputCss.inputText}
            name="email"
            {...register("email")}
          />
          {errors.email && (
            <p className={inputCss.error}>{errors.email.message}</p>
          )}
          <input
            type="password"
            placeholder="Senha"
            className={inputCss.inputText}
            name="password"
            {...register("password")}
          />
          {errors.password && (
            <p className={inputCss.error}>{errors.password.message}</p>
          )}

          <input
            type="submit"
            value="Entrar"
            className={inputCss.inputSubmit}
          />
        </form>
        <p className={loginCss.mensagem}>
          Não possui uma conta?{" "}
          <Link to="/cadastro">Cadastre-se na nossa rede</Link>
        </p>
        {success && <AuthSuccessful message={success} />}
        {error && <AuthFail message={error} />}
      </div>
    </div>
  );
}
