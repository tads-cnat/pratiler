import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Books, BookOpen, ChatCircleText, Gear } from "phosphor-react";

/* Components */
import { Header } from "../Global/HeaderGlobal";
import { Resenhas } from "../Perfil/Tabs/Resenhas";

/* CSS */
import perfilCss from "../../assets/css/Perfil/Perfil.module.css";

/* Images */
import img from "../../assets/img/foto-perfil.png";

/* Store */
import { useAuthStore } from "../Global/authStore";
import { internalAxios } from "../Global/axiosInstances";

export function Perfil() {
  const { username } = useParams();
  const { user } = useAuthStore();
  const [perfil, setPerfil] = useState({});
  const [loading, setLoading] = useState(true);
  const [tab, setTab] = useState("estante");
  const usuarioLogado = user.username === username;

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

  useEffect(() => {
    loadPerfil();
  }, []);

  async function SeguirUsuario() {}

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <Header />
          <div className={perfilCss.cardProfile}>
            <img
              src={perfil.leitor.foto_perfil ? perfil.leitor.foto_perfil : img}
              alt="Imagem de perfil"
            />
            <div className={perfilCss.cardProfileContent}>
              <p className={perfilCss.cardProfileName}>
                <strong>{perfil.leitor.nome}</strong>
              </p>
              <p className={perfilCss.cardProfileNickname}>
                @{perfil.leitor.username}
              </p>
              <p>{perfil.leitor.biografia}</p>
              {!usuarioLogado && (
                <button
                  className={
                    perfil.seguidor ? perfilCss.seguindo : perfilCss.seguir
                  }
                  onClick={SeguirUsuario}
                >
                  {perfil.seguidor ? "Seguindo" : "Seguir"}
                </button>
              )}
              <p>
                {perfil.seguidores} seguidores {perfil.seguindo} seguindo
              </p>
              <p>
                <span className={perfilCss.iconPerfilProfile}>
                  <Gear size={24} color="#3D3569" weight="fill" />
                </span>
                Configurações
              </p>
            </div>
          </div>
          <div className={perfilCss.estiloHrDiv}></div>
          <div className={perfilCss.perfilNav}>
            <div
              className={
                tab === "estante"
                  ? perfilCss.tabPerfilNavAtivado
                  : perfilCss.tabPerfilNav
              }
              onClick={() => setTab("estante")}
            >
              <Books size={40} color="#3D3569" weight="fill" />
              {usuarioLogado
                ? "Minha Estante"
                : `Estante de ${perfil.leitor.username}`}
            </div>
            <div
              className={
                tab === "resenhas"
                  ? perfilCss.tabPerfilNavAtivado
                  : perfilCss.tabPerfilNav
              }
              onClick={() => setTab("resenhas")}
            >
              <BookOpen size={40} color="#3D3569" weight="fill" />
              Resenhas
            </div>
            <div
              className={
                tab === "publicacoes"
                  ? perfilCss.tabPerfilNavAtivado
                  : perfilCss.tabPerfilNav
              }
              onClick={() => setTab("publicacoes")}
            >
              <ChatCircleText size={40} color="#3D3569" weight="fill" />
              Publicações recentes
            </div>
          </div>
          <div className={perfilCss.content}>
            {tab === "estante" && <p>Estante</p>}
            {tab === "resenhas" && <Resenhas username={username} />}
            {tab === "publicacoes" && <p>Publicações</p>}
          </div>
        </>
      )}
    </>
  );
}
