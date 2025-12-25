import { User, UserPlus, Books, Star, ChatText, SignOut } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

/* Components */
import { Search } from '../Search/Search';

/* CSS */
import headerCss from '../../assets/css/Global/HeaderGlobal.module.css';

/* Store */
import { useAuthStore } from '../Global/authStore';

/* Images */
import pratilerLogo from '../../assets/img/pratiler-logo.png';

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();
  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <>
          <header className={headerCss.header}>
            <img className={headerCss.logo} src={pratilerLogo} alt="Marca Gráfica Pratiler" />
            <div className={headerCss.info}>
              <Search />
              <a className={headerCss.perfilBox} href={`/${user.username}`}>
                <div className={headerCss.icon}>
                  <User weight="fill" color="#f6f6f6" size={18} />
                </div>
                <span className={headerCss.titlePerfil}>{user.username}</span>
              </a>
            </div>
          </header>
          <hr className={headerCss.divisor} />
          <div className={headerCss.secondHeader}>
            <div className={headerCss.secHeaderContent}>
              <a href="/livros" className={headerCss.categories}>
                <Books size={24} color="#3D3569" weight="fill" />
                <span>Minha Estante</span>
              </a>

              <a href="/livros-populares" className={headerCss.categories}>
                <Star size={24} color="#3D3569" weight="fill" />
                <span>Livros Populares</span>
              </a>

              <a href="/inicio" className={headerCss.categories}>
                <ChatText size={24} color="#3D3569" weight="fill" />
                <span>Publicações Populares</span>
              </a>

              <a href="/seguindo" className={headerCss.categories}>
                <UserPlus size={24} color="#3D3569" weight="fill" />
                <span>Seguindo</span>
              </a>
            </div>
            <button
              className={headerCss.logoutButton}
              onClick={async () => {
                setLoading(true);
                await logout();
                setTimeout(navigate('/'), 1000);
              }}
            >
              <SignOut size={22} color="#FEFEFE" weight="fill" />
              <p>Sair</p>
            </button>
          </div>
          <hr className={headerCss.divisor} />
        </>
      )}
    </>
  );
}
