import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { internalAxios } from "../../Global/axiosInstances";

/* Components */
import { SemResultados } from "../../SemResultado";

/* CSS */
import resenhaCss from "../../../assets/css/Perfil/Resenhas.module.css";

export function Resenhas(props) {
  const { username } = props;
  const [resenhas, setResenhas] = useState([]);
  const [loading, setLoading] = useState(true);

  async function loadResenhas() {
    await internalAxios
      .get(`/resenhas/${username}`)
      .then((res) => {
        setResenhas(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    loadResenhas();
  }, []);

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <div className={resenhaCss.resenhas}>
            {resenhas.length > 0 ? (
              resenhas.map((resenha, index) => (
                <div className={resenhaCss.cardResenhas} key={index}>
                  <div className={resenhaCss.cardResenhasContent}>
                    <p>
                      <strong>
                        {resenha.livro.titulo} - {resenha.livro.autor.nome}
                      </strong>
                    </p>
                    <p>{resenha.titulo}</p>
                    <a
                      href="{% url 'abrir_resenha_especifica' resenha.pk %}"
                      className={resenhaCss.botaoLerResenha}
                    >
                      Ler resenha
                    </a>
                  </div>
                  <img src="{{ resenha.livro.capa }}" />
                </div>
              ))
            ) : (
              <>
                <SemResultados titulo="Não há resenhas postadas ainda" tamanho="P"/>
              </>
            )}
          </div>
          <a
            href="{% url 'escrever_resenha' %}"
            className={resenhaCss.botaoEscreverResenha}
          >
            Escrever Resenha
          </a>
        </>
      )}
    </>
  );
}

Resenhas.propTypes = {
  username: PropTypes.string.isRequired,
};
