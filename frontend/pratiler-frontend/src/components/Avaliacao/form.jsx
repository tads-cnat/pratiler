import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { Star } from "phosphor-react";

/* Components */
import { Header } from "../Global/HeaderGlobal";

/* CSS */
import avaliacaoFormCss from "../../assets/css/Avaliacao/Avaliacao.module.css";
import formCss from "../../assets/css/FormPostagem/FormPostagem.module.css";

const schema = yup.object().shape({
  comentario: yup.string(),
  livro_id: yup.number().min(1, "Selecione um livro"),
});

export function RealizarAvaliacao() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [livros, setLivros] = useState([]);
  const [nota, setNota] = useState(0);

  async function fetchLivros() {}

  async function submitAvaliacao(data) {}

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <>
      <Header />
      <div className={avaliacaoFormCss.container}>
        <form
          onSubmit={handleSubmit(submitAvaliacao)}
          className={formCss.realizarPostagem}
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
          <label className={formCss.select}>
            Livro:
            <select name="livro_id" {...register("livro_id")}>
              <option value="0">Selecione</option>
              {livros.map((livro) => (
                <option key={livro.livro.id} value={livro.livro.id}>
                  {livro.livro.titulo}
                </option>
              ))}
            </select>
            {errors.livro_id?.message && (
              <span className={formCss.error}>{errors.livro_id?.message}</span>
            )}
          </label>
          <textarea
            name="texto"
            placeholder="Descreva sua avaliação (opcional)"
            maxLength={350}
            {...register("comentario")}
          ></textarea>
          <input
            type="submit"
            value="Realizar Avaliação"
            className={formCss.botao}
          />
        </form>
      </div>
    </>
  );
}
