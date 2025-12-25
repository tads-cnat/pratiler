import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { internalAxios } from '../../../Global/axiosInstances';

/* Components */
import { SemResultados } from '../../../SemResultado';
import EscreverResenha from './escreverResenha';

/* CSS */
import resenhaCss from '../../../../assets/css/Perfil/Resenhas/Resenhas.module.css';
import { useAuthStore } from '../../../Global/authStore';

export function Resenhas(props) {
  const { username } = props;
  const { user } = useAuthStore();
  const [resenhas, setResenhas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
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
    loadResenhas();
  }, [username]);

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {isWriting ? (
            <EscreverResenha setWriting={setIsWriting} />
          ) : (
            <div className={resenhaCss.resenhas}>
              {resenhas.length > 0 ? (
                resenhas.map((resenha) => (
                  <div className={resenhaCss.cardResenhas} key={resenha.id}>
                    <div className={resenhaCss.cardResenhasContent}>
                      <p>
                        <strong>
                          {resenha.livro.titulo} - {resenha.livro.autor.nome}
                        </strong>
                      </p>
                      <p>{resenha.titulo}</p>
                      <button className={resenhaCss.botaoLerResenha}>Ler resenha</button>
                    </div>
                    <img src={resenha.livro.capa} alt={`Capa do livro ${resenha.livro.titulo}`} />
                  </div>
                ))
              ) : (
                <SemResultados titulo="Não há resenhas postadas ainda" tamanho="P" />
              )}
              {username === user.username && (
                <button
                  onClick={() => {
                    setIsWriting(true);
                  }}
                  className={resenhaCss.botaoEscreverResenha}
                >
                  Escrever Resenha
                </button>
              )}
            </div>
          )}
        </>
      )}
    </>
  );
}

Resenhas.propTypes = {
  username: PropTypes.string.isRequired,
};
