import { object, string } from 'yup';

/* CSS */
import loginCss from '../../assets/css/LoginCadastro/LoginCadastro.module.css';

/* Store */
import { useAuthStore } from '../Global/authStore';

/* Componentes */
import { AuthPage } from '../Global/AuthPage';

/* Images */
import imageLogin from '../../assets/img/imagem-login.png';

const fields = [
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'password', placeholder: 'senha', type: 'password' },
];

const schema = object().shape({
  email: string().email('Email inválido').required('Campo email é obrigatório'),
  password: string().required('Campo senha é obrigatório'),
});

export function Login() {
  const { login } = useAuthStore();
  return (
    <div className={loginCss.container}>
      <AuthPage
        authenticate={login}
        fields={fields}
        imagemFundo={imageLogin}
        labelButton="Entrar"
        message={
          <>
            Não possui uma conta? <Link to="/cadastro">Cadastre-se na nossa rede</Link>
          </>
        }
        schema={schema}
        successMessage="Login efetuado com sucesso! Sinta-se a vontade."
        title="Entrar"
      />
    </div>
  );
}
