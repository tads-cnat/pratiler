import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Books, BookOpen, ChatCircleText, Gear } from "phosphor-react";

/* Components */
import { Header } from "../Global/HeaderGlobal";

/* CSS */
import perfilCss from "../../assets/css/Perfil/Perfil.module.css";

/* Images */
import img from "../../assets/img/pratiler-logo.png";

/* Store */
import { useAuthStore } from "../Global/authStore";
import { internalAxios } from "../Global/axiosInstances";

export function Perfil() {
  const { username } = useParams();
  const { user } = useAuthStore();
  const [perfil, setPerfil] = useState({});
  const [loading, setLoading] = useState(true);
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
              src={perfil.leitor.foto_perfil ?? img}
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
                {" "}
                {0} seguidores {0} seguindo
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
            <ul>
              <li>
                <span className={perfilCss.iconPerfilNav}>
                  <Books size={40} color="#3D3569" weight="fill" />
                </span>
                Minha estante
                <span className={perfilCss.iconPerfilNav}>
                  <BookOpen size={40} color="#3D3569" weight="fill" />
                </span>
                Resenhas
                <span className={perfilCss.iconPerfilNav}>
                  <ChatCircleText size={40} color="#3D3569" weight="fill" />
                </span>
                Publicações recentes
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}
