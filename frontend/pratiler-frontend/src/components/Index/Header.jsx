import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import headerCss from '../../assets/css/Index/Header.module.css';

/* Images */
import pratilerLogo from '../../assets/img/pratiler-logo.png';
import iconIn from '../../assets/img/icon-going.png';

export function Header() {
  return (
    <header className={headerCss.header}>
      <img className={headerCss.logo} src={pratilerLogo} alt="Logo do Projeto Pratiler" />
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
