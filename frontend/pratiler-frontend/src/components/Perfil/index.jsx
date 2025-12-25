import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Gear } from 'phosphor-react';

/* Components */
import { Header } from '../Global/HeaderGlobal';
import PerfilTabs from './components/PerfilTabs';
import { Resenhas } from '../Perfil/Tabs/Resenhas';

/* CSS */
import perfilCss from '../../assets/css/Perfil/Perfil.module.css';

/* Images */
import img from '../../assets/img/foto-perfil.png';

/* Store */
import { useAuthStore } from '../Global/authStore';
import { internalAxios } from '../Global/axiosInstances';

async function SeguirUsuario() {
  return await Promise.resolve();
}

export function Perfil() {
  const { username } = useParams();
  const { user } = useAuthStore();
  const [perfil, setPerfil] = useState({});
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState('estante');
  const usuarioLogado = user.username === username;

  useEffect(() => {
    async function loadPerfil() {
      await internalAxios
        .get(`/leitores/${username}`)
        .then((res) => {
          setPerfil(res.data);
        })
        .finally(() => {
          setLoading(false);
        });
    }
    loadPerfil();
  }, [username]);

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Header />
          <div className={perfilCss.cardProfile}>
            <img src={perfil.leitor.foto_perfil ?? img} alt="Imagem de perfil" />
            <div className={perfilCss.cardProfileContent}>
              <p className={perfilCss.cardProfileName}>
                <strong>{perfil.leitor.nome}</strong>
              </p>
              <p className={perfilCss.cardProfileNickname}>@{perfil.leitor.username}</p>
              <p>{perfil.leitor.biografia}</p>
              {!usuarioLogado && (
                <button className={perfil.seguidor ? perfilCss.seguindo : perfilCss.seguir} onClick={SeguirUsuario}>
                  {perfil.seguidor ? 'Seguindo' : 'Seguir'}
                </button>
              )}
              <p>
                {perfil.seguidores} seguidores {perfil.seguindo} seguindo
              </p>
              <p>
                <span className={perfilCss.iconPerfilProfile}>
                  <Gear size={24} color="#3D3569" weight="fill" />
                </span>{' '}
                Configurações
              </p>
            </div>
          </div>
          <div className={perfilCss.estiloHrDiv}></div>
          <PerfilTabs perfil={perfil} setTab={setTab} tab={tab} usuarioLogado={usuarioLogado} />
          <div className={perfilCss.content}>
            {tab === 'estante' && <p>Estante</p>}
            {tab === 'resenhas' && <Resenhas username={username} />}
            {tab === 'publicacoes' && <p>Publicações</p>}
          </div>
        </>
      )}
    </>
  );
}
