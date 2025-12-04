import { object, string } from 'yup';

/* CSS */
import cadastroCss from '../../assets/css/LoginCadastro/LoginCadastro.module.css';

/** Store */
import { useAuthStore } from '../Global/authStore';

/* Componentes */
import { AuthPage } from '../Global/AuthPage';
import { Link } from 'react-router-dom';

/** Images */
import imageCadastro from '../../assets/img/imagem-cadastro.png';

const fields = [
  { name: 'nome', placeholder: 'Nome do Usuário', type: 'text' },
  { name: 'username', placeholder: 'Username', type: 'text' },
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'password', placeholder: 'senha', type: 'password' },
];

const schema = object().shape({
  nome: string().required('Campo nome é obrigatório'),
  username: string().required('Campo username é obrigatório'),
  email: string().email('Email inválido').required('Campo email é obrigatório'),
  password: string().required('Campo senha é obrigatório'),
});

export function Cadastro() {
  const { register } = useAuthStore();
  return (
    <div className={cadastroCss.container}>
      <AuthPage
        authenticate={register}
        fields={fields}
        imagemFundo={imageCadastro}
        labelButton="Criar conta"
        message={
          <>
            Já possui uma conta? <Link to="/login">Entre na nossa rede</Link>
          </>
        }
        schema={schema}
        successMessage="Conta criada com sucesso! Estamos te autenticando..."
        title="Cadastrar-se"
      />
    </div>
  );
}
