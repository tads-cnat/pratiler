import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

/* CSS */
import formCss from "../../../../assets/css/FormPostagem/FormPostagem.module.css";
import escreverResenhaCss from "../../../../assets/css/Perfil/Resenhas/EscreverResenha.module.css";
import inputCss from "../../../../assets/css/Input/Input.module.css";

/* Store */
import { internalAxios } from "../../../Global/axiosInstances";

const schema = yup.object().shape({
  livro_id: yup.string().required("Selecione um livro"),
  titulo: yup
    .string()
    .required("Campo título é obrigatório")
    .max(50, "Título excedeu o limite de 50 caracteres"),
  texto: yup.string().required("Campo texto é obrigatório"),
});

export default function EscreverResenha(props) {
  const { setWriting } = props;
  const [loading, setLoading] = useState(false);
  const [livros, setLivros] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function postResenha(data) {
    setLoading(true);
    await internalAxios
      .post("/resenhas", data)
      .then(() => {
        setWriting(false);
      })
      .catch((err) => {
        console.error("Erro ao enviar resenha", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  async function loadLivros() {
    setLoading(true);
    await internalAxios
      .get("/livros/resenha")
      .then((res) => {
        setLivros(res.data);
      })
      .catch((err) => {
        console.log("Erro ao carregar livros", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    loadLivros();
  }, []);

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div className={escreverResenhaCss.formEscreverResenha}>
          <label className={escreverResenhaCss.labelEscreverResenha}>
            Escreva sua resenha
          </label>
          <form onSubmit={handleSubmit(postResenha)}>
            <label className={formCss.select}>
              Livro:
              <select
                name="livro_id"
                id=""
                className={escreverResenhaCss.itensFormsEscreverResenha}
                {...register("livro_id")}
              >
                <option value="0">Selecione</option>
                {livros.map((livro) => (
                  <option key={livro.id} value={livro.id}>
                    {livro.titulo}
                  </option>
                ))}
              </select>
            </label>
            {errors.livro && (
              <span className={inputCss.error}>{errors.livro.message}</span>
            )}
            <label>
              Título:
              <input
                name="titulo"
                type="text"
                placeholder="digite o titulo da resenha"
                className={escreverResenhaCss.itensFormsEscreverResenha}
                {...register("titulo")}
              />
            </label>
            {errors.titulo && (
              <span className={inputCss.error}>{errors.titulo.message}</span>
            )}
            <label>
              Texto:
              <textarea
                name="texto"
                className={escreverResenhaCss.itensFormsEscreverResenha}
                placeholder="Escreva sua resenha"
                {...register("texto")}
              ></textarea>
            </label>
            {errors.texto && (
              <span className={inputCss.error}>{errors.texto.message}</span>
            )}
            <div className={escreverResenhaCss.botoesEscreverResenha}>
              <input
                type="submit"
                className={escreverResenhaCss.botao}
                value="Escrever Resenha"
              />
              <button
                className={escreverResenhaCss.botaoSecundario}
                onClick={() => {
                  setWriting(false);
                }}
              >
                Voltar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

EscreverResenha.propTypes = {
  setWriting: PropTypes.func.isRequired,
};
