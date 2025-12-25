import { useEffect, useState } from 'react';

/* CSS */
import feedCss from '../../assets/css/Feed/Feed.module.css';
import formCss from '../../assets/css/FormPostagem/FormPostagem.module.css';

/* Store */

/* Components */
import { AuthFail } from '../Global/AuthFail';
import { Header } from '../Global/HeaderGlobal';
import Postagem from '../Postagem/index';
import { SemResultados } from '../SemResultado/index';
import { changeBook, fazerPostagem, getLivrosEstante, getPostagens } from './utils';

export function Feed() {
  const [error, setError] = useState(null);
  const [postagens, setPostagens] = useState([]);
  const [livrosEstante, setLivrosEstante] = useState([]);
  const [novaPostagem, setNovaPostagem] = useState(false);
  const [formData, setFormData] = useState({
    interacao_id: 0,
    pagina_inicial: 0,
    pagina_final: 0,
    texto: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function realizarPostagem(e) {
    e.preventDefault();
    fazerPostagem(formData)
      .then(async () => {
        setNovaPostagem(!novaPostagem);
        setFormData({
          ...formData,
          texto: '',
          pagina_final: 0,
        });
        await changeBook(undefined, formData.interacao_id, setFormData, formData);
      })
      .catch((err) => {
        setError(err.response.data.detail);
      });
  }

  async function fetchLivrosEstante() {
    await getLivrosEstante().then((response) => setLivrosEstante(response.data));
  }
  async function fetchPostagens() {
    await getPostagens().then((response) => setPostagens(response.data));
  }

  useEffect(() => {
    fetchLivrosEstante();
  }, []);

  useEffect(() => {
    fetchPostagens();
  }, [novaPostagem]);

  return (
    <>
      <Header />
      <div className={feedCss.content}>
        <div>
          <form onSubmit={realizarPostagem} className={formCss.realizarPostagem}>
            <h1>Escreva sua postagem</h1>
            <label className={formCss.select}>
              Livro:{''}
              <select name="interacao_id" onChange={(e) => changeBook(e, null, setFormData, formData)}>
                <option value="0">Selecione</option>
                {livrosEstante.map((interacao) => (
                  <option key={interacao.id} value={interacao.id}>
                    {interacao.livro.titulo}
                  </option>
                ))}
              </select>
            </label>
            <div className={formCss.inputsPaginas}>
              <label>
                Da página: <input type="number" name="pagina_inicial" value={formData.pagina_inicial} readOnly />
              </label>
              <label>
                Até a página:{' '}
                <input
                  type="number"
                  name="pagina_final"
                  value={formData.pagina_final}
                  onChange={handleChange}
                  min={formData.pagina_inicial + 1}
                />
              </label>
            </div>
            <textarea
              name="texto"
              value={formData.texto}
              onChange={handleChange}
              placeholder="Escreva seu comentário..."
              maxLength={350}
              required
            ></textarea>
            <input type="submit" value="Postar" className={formCss.botao} />
          </form>
          {error && <AuthFail message={error} />}
        </div>
        <div className={feedCss.postagens}>
          {postagens.length > 0 ? (
            postagens.map((postagem) => <Postagem key={postagem.id} {...postagem} />)
          ) : (
            <SemResultados titulo="Não há postagens no momento, seja a primeira pessoa a comentar sobre sua leitura!" />
          )}
        </div>
      </div>
    </>
  );
}
