import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import headerCss from '../../assets/css/Index/Header.module.css';

/* Images */
import pratilerLogo from '../../assets/img/pratiler-logo.png';
import iconIn from '../../assets/img/icon-going.png';

export function Header({isAuthenticated}) {
  return (
    <header className={headerCss.header}>
      {isAuthenticated ? (
      <Link to="/livros">
        <img className={headerCss.logo} src={pratilerLogo} alt="Logo do Projeto Pratiler" />
      </Link>
      ): (
        <Link to="/">
        <img className={headerCss.logo} src={pratilerLogo} alt="Logo do Projeto Pratiler" />
      </Link>
      )}
      <div className={headerCss.buttons}>
        <Link to="/login" className={headerCss.box_in}>
          <button className={headerCss.box_in}>
            <img src={iconIn} alt="ícone de entrar" />
            <span>Entrar</span>
          </button>
        </Link>
        <Link to="/cadastro">
          <button className={headerCss.btn_register}>Cadastre-se</button>
        </Link>
      </div>
    </header>
  );
}
