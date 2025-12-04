import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

/* Store */
import { useAuthStore } from '../Global/authStore';

/* CSS */
import authCss from '../../assets/css/LoginCadastro/Formulario.module.css';
import inputCss from '../../assets/css/Input/Input.module.css';

/* Componentes */
import { AuthSuccessful } from '../Global/AuthSuccessful';
import { AuthFail } from '../Global/AuthFail';

export function AuthPage(props) {
  const { authenticate, fields, imagemFundo, labelButton, message, schema, successMessage, title } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();

  async function fetchAuth(data) {
    setError(null);
    const response = await authenticate(...data);
    if (useAuthStore.getState().isAuthenticated) {
      setSuccess(successMessage);
      setTimeout(() => navigate('/livros'), 2000);
    } else setError(response.message);
  }

  return (
    <div className={authCss.return}>
      <div className={authCss.container}>
        <img src={imagemFundo} />
      </div>

      <div className={authCss.formularioLogin}>
        <h1>{title}</h1>
        <form className={authCss.formulario} onSubmit={handleSubmit(fetchAuth)}>
          {fields.map((field) => {
            const { name } = field;
            const errors = errors[name];
            return (
              <>
                <input className={inputCss.inputText} {...field} {...register(name)} />
                {errors && <p className={inputCss.error}>{errors.message}</p>}
              </>
            );
          })}
          <input
            type="text"
            name="nome"
            placeholder="Nome do Usuário"
            className={inputCss.inputText}
            {...register('nome')}
          />
          {errors.nome && <p className={inputCss.error}>{errors.nome.message}</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={inputCss.inputText}
            {...register('username')}
          />
          {errors.username && <p className={inputCss.error}>{errors.username.message}</p>}
          <input type="email" name="email" placeholder="Email" className={inputCss.inputText} {...register('email')} />
          {errors.email && <p className={inputCss.error}>{errors.email.message}</p>}
          <input
            type="password"
            name="password"
            placeholder="Senha"
            className={inputCss.inputText}
            {...register('password')}
          />
          {errors.password && <p className={inputCss.error}>{errors.password.message}</p>}
          <input type="submit" value={labelButton} className={inputCss.inputSubmit} />
        </form>
        {success && <AuthSuccessful message={success} />}
        {error && <AuthFail message={error} />}
        <p className={authCss.mensagem}>{message}</p>
      </div>
    </div>
  );
}

AuthPage.propTypes = {
  authenticate: PropTypes.func,
  fields: PropTypes.object,
  imagemFundo: PropTypes.string,
  labelButton: PropTypes.string,
  message: PropTypes.element,
  schema: PropTypes.any,
  successMessage: PropTypes.string,
  title: PropTypes.string,
};
