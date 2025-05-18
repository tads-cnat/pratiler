import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Star } from "phosphor-react";

/* Components */
import { Header } from "../Global/HeaderGlobal";

/* CSS */
import bookCss from "../../assets/css/Interaction/Book.module.css";
import avaliacaoFormCss from "../../assets/css/Avaliacao/Avaliacao.module.css";

import { internalAxios } from "../Global/axiosInstances";

const schema = yup.object().shape({
  comentario: yup.string(),
});

export function RealizarAvaliacao() {
  const { id } = useParams();

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [livro, setLivro] = useState({});
  const [nota, setNota] = useState(0);

  async function fetchLivro() {
    setLoading(true);
    await internalAxios
      .get(`interacoes/leitor/${id}`)
      .then((response) => {
        setLivro(response.data.livro);
      })
      .catch((error) => {
        console.error("Erro ao buscar livro: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function submitAvaliacao(data) {}

  useEffect(() => {
    fetchLivro();
  }, []);

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
                  <form
                    onSubmit={handleSubmit(submitAvaliacao)}
                    className={avaliacaoFormCss.realizarAvaliacao}
                  >
                    <h1>Escreva sua Avaliação</h1>
                    <div className={avaliacaoFormCss.estrelas}>
                      <button onClick={() => setNota(nota === 1 ? 0 : 1)}>
                        <Star
                          size={40}
                          className={
                            nota >= 1
                              ? avaliacaoFormCss.estrelaPreenchida
                              : avaliacaoFormCss.estrela
                          }
                        />
                      </button>
                      <button onClick={() => setNota(nota === 2 ? 0 : 2)}>
                        <Star
                          size={40}
                          className={
                            nota >= 2
                              ? avaliacaoFormCss.estrelaPreenchida
                              : avaliacaoFormCss.estrela
                          }
                        />
                      </button>
                      <button onClick={() => setNota(nota === 3 ? 0 : 3)}>
                        <Star
                          size={40}
                          className={
                            nota >= 3
                              ? avaliacaoFormCss.estrelaPreenchida
                              : avaliacaoFormCss.estrela
                          }
                        />
                      </button>
                      <button onClick={() => setNota(nota === 4 ? 0 : 4)}>
                        <Star
                          size={40}
                          className={
                            nota >= 4
                              ? avaliacaoFormCss.estrelaPreenchida
                              : avaliacaoFormCss.estrela
                          }
                        />
                      </button>
                      <button onClick={() => setNota(nota === 5 ? 0 : 5)}>
                        <Star
                          size={40}
                          className={
                            nota === 5
                              ? avaliacaoFormCss.estrelaPreenchida
                              : avaliacaoFormCss.estrela
                          }
                        />
                      </button>
                    </div>
                    <textarea
                      name="texto"
                      placeholder="Descreva sua avaliação (opcional)"
                      maxLength={350}
                      {...register("comentario")}
                    ></textarea>
                    <input
                      type="submit"
                      value="Realizar Avaliação"
                      className={avaliacaoFormCss.botao}
                    />
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
