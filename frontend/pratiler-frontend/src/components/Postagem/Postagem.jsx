import { useState } from "react";
import { Heart } from "phosphor-react";
import PropTypes from "prop-types";

/** CSS */
import postagemCss from "../../assets/css/Postagem/Postagem.module.css";

/** Store */
import { internalAxios } from "../Global/axiosInstances";
import { getCsrf, setCsrf } from "../Global/authStore";
import { User } from "phosphor-react";

export default function Postagem(props) {
  const {
    id,
    leitor,
    livro,
    texto,
    pagina_inicial,
    pagina_final,
    data_hora,
    curtidas,
    curtido,
  } = props;
  const [taCurtido, setTaCurtido] = useState(curtido);
  const [numeroCurtidas, setNumeroCurtidas] = useState(curtidas);
  const data = data_hora.split("T")[0];
  const valores = data.split("-");
  const dataFormatada = `${valores[2]}/${valores[1]}/${valores[0]}`;

  async function curtirPostagem() {
    await setCsrf();
    await internalAxios
      .post(
        `postagens/curtir`,
        { postagem_id: id },
        {
          headers: {
            "X-Csrftoken": await getCsrf(),
          },
        }
      )
      .then((response) => {
        setTaCurtido(!taCurtido);
        setNumeroCurtidas(response.data);
      });
  }

  return (
    <div className={postagemCss.postagem}>
      <div className={postagemCss.nomeBotaoSeguirData}>
        <div className={postagemCss.perfil}>
          <div className={postagemCss.icon}>
            <User weight="fill" color="#f6f6f6" size={22} />
          </div>
          <div className={postagemCss.nome}>
            <p>{leitor.username}</p>
          </div>

          <button className={postagemCss.botaoSeguir}>Seguir</button>
        </div>
        <p className={postagemCss.data}>{dataFormatada}</p>
      </div>
      <p className={postagemCss.paginas}>
        Da página {pagina_inicial} até a página {pagina_final}
      </p>
      <p className={postagemCss.tituloAutor}>
        {livro.titulo} - {livro.autor.nome}
      </p>
      <p>{texto}</p>
      <div className={postagemCss.curtidaInfo}>
        <p>{numeroCurtidas ?? 0}</p>
        <button
          onClick={curtirPostagem}
          className={postagemCss.curtir}
          type="button"
        >
          <Heart
            className={
              taCurtido ? postagemCss.iconCurtido : postagemCss.iconCurtir
            }
          />
        </button>
      </div>
    </div>
  );
}

Postagem.propTypes = {
  leitor: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  livro: PropTypes.object.isRequired,
  texto: PropTypes.string.isRequired,
  pagina_inicial: PropTypes.number.isRequired,
  pagina_final: PropTypes.number.isRequired,
  data_hora: PropTypes.string.isRequired,
  curtidas: PropTypes.number,
  curtido: PropTypes.bool.isRequired,
};
