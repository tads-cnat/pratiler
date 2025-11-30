import { useEffect, useState } from 'react';

/* CSS */
import feedCss from '../../assets/css/Feed/Feed.module.css';
import formCss from '../../assets/css/FormPostagem/FormPostagem.module.css';

/* Store */
import { internalAxios } from '../Global/axiosInstances';

/* Components */
import { Header } from '../Global/HeaderGlobal';
import Postagem from '../Postagem/index';
import { AuthFail } from '../Global/AuthFail';

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

  const changeBook = async (e, id) => {
    let interacaoId;
    const realizouPostagem = e === undefined;
    if (!realizouPostagem) interacaoId = e.target.value;
    else interacaoId = id;
    if (interacaoId !== '0') {
      await internalAxios.get(`interacoes/${interacaoId}`).then((response) => {
        setFormData({
          ...formData,
          interacao_id: Number(interacaoId),
          pagina_inicial: response.data.pg_atual,
        });
        if (realizouPostagem)
          setFormData({
            ...formData,
            pagina_final: 0,
            texto: '',
          });
      });
    } else {
      setFormData({
        ...formData,
        interacao_id: 0,
        pagina_inicial: 0,
        pagina_final: 0,
        texto: '',
      });
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function realizarPostagem(e) {
    e.preventDefault();
    await internalAxios
      .post('postagens', formData)
      .then(() => {
        setNovaPostagem(!novaPostagem);
        setFormData({
          ...formData,
          texto: '',
          pagina_final: 0,
        });
        changeBook(undefined, formData.interacao_id);
      })
      .catch((err) => {
        setError(err.response.data.detail);
      });
  }

  async function pegarLivrosEstante() {
    await internalAxios
      .get('interacoes', { params: { status: 'QL,LN' } })
      .then((response) => setLivrosEstante(response.data));
  }
  async function getPostagens() {
    await internalAxios.get('postagens').then((response) => setPostagens(response.data));
  }

  useEffect(() => {
    pegarLivrosEstante();
  }, []);

  useEffect(() => {
    getPostagens();
  }, [novaPostagem]);

  return (
    <>
      <Header />
      <div className={feedCss.content}>
        <div>
          <form onSubmit={realizarPostagem} className={formCss.realizarPostagem}>
            <h1>Escreva sua postagem</h1>
            <label className={formCss.select}>
              Livro:
              <select name="interacao_id" onChange={changeBook}>
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
            postagens.map((postagem, index) => (
              <Postagem
                key={index}
                id={postagem.id}
                leitor={postagem.leitor}
                livro={postagem.livro}
                texto={postagem.texto}
                data_hora={postagem.data_hora}
                pagina_inicial={postagem.pagina_inicial}
                pagina_final={postagem.pagina_final}
                curtidas={postagem.curtidas}
                curtido={postagem.curtido}
              />
            ))
          ) : (
            <p>Não há postagens no momento, seja a primeira pessoa a comentar sobre sua leitura!</p>
          )}
        </div>
      </div>
    </>
  );
}
