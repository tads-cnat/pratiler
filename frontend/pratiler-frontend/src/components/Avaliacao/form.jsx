import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Star } from 'phosphor-react';

/* Components */
import { Header } from '../Global/HeaderGlobal';

/* CSS */
import bookCss from '../../assets/css/Interaction/Book.module.css';
import avaliacaoFormCss from '../../assets/css/Avaliacao/Avaliacao.module.css';
import errorCss from '../../assets/css/FormPostagem/FormPostagem.module.css';

import { internalAxios } from '../Global/axiosInstances';

const schema = yup.object().shape({
  comentario: yup.string().required('Descrição é obrigatória'),
});

export function RealizarAvaliacao() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [livro, setLivro] = useState({});
  const [nota, setNota] = useState(0);

  async function submitAvaliacao(data) {
    const { comentario } = data;
    const avaliacao = {
      livro_id: id,
      texto: comentario,
      nota: nota,
    };
    await internalAxios
      .post('avaliacoes', avaliacao)
      .then(() => {
        setError(null);
        navigate('/livros');
      })
      .catch((error) => {
        switch (error.response.status) {
          case 400:
            setError(error.response.data.detalhe);
            break;
          case 401:
            navigate('/login');
            break;
          case 403:
            setError('Você não tem permissão para realizar essa ação');
            break;

          case 500:
            setError('Erro interno do servidor');
            break;
          default:
            setError('Erro desconhecido');
        }
      });
  }

  useEffect(() => {
    async function fetchLivro() {
      setLoading(true);
      await internalAxios
        .get(`interacoes/${id}`)
        .then((response) => {
          setLivro(response.data.livro);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    fetchLivro();
  }, [id]);

  return (
    <>
      {loading ? (
        <div>
          <h1>Carregando...</h1>
        </div>
      ) : (
        <>
          <Header />
          <div className={avaliacaoFormCss.container}>
            <div className={bookCss.box}>
              <h1 className={bookCss.ttileOne}>
                Sua Avaliação de <strong>{livro.titulo}</strong>
              </h1>
              <div className={bookCss.sectionBook}>
                <div className={bookCss.bookDescription}>
                  <img src={livro.capa} alt="Capa do livro" />
                  <p className={bookCss.title}>{livro.titulo}</p>
                </div>
                <div className={bookCss.avaliacaoForm}>
                  <form onSubmit={handleSubmit(submitAvaliacao)} className={avaliacaoFormCss.realizarAvaliacao}>
                    <h1>Escreva sua Avaliação</h1>
                    <div className={avaliacaoFormCss.estrelas}>
                      {Array(5).map((estrela, index) => {
                        const notaEstrela = index + 1;
                        return (
                          <button key={estrela} onClick={() => setNota(nota === notaEstrela ? 0 : notaEstrela)}>
                            <Star
                              size={40}
                              className={
                                nota >= notaEstrela ? avaliacaoFormCss.estrelaPreenchida : avaliacaoFormCss.estrela
                              }
                            />
                          </button>
                        );
                      })}
                    </div>
                    <textarea
                      name="texto"
                      placeholder="Descreva sua avaliação"
                      maxLength={350}
                      {...register('comentario')}
                    ></textarea>
                    {error && <span className={errorCss.error}>{error}</span>}
                    {errors.comentario && <span className={errorCss.error}>{errors.comentario.message}</span>}
                    <input type="submit" value="Realizar Avaliação" className={avaliacaoFormCss.botao} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
