import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import mainCss from '../../assets/css/Index/Main.module.css';

/* Images */
import bookImage from '../../assets/img/pilha-de-livros.png';

export function Main() {
  return (
    <main className={mainCss.section}>
      <div className={mainCss.section_text_btn}>
        <p>
          Uma rede social para <strong>compartilhar</strong> leituras e se <strong>motivar</strong> cada vez mais!
        </p>
        <Link to="/login" className={mainCss.section_text_btn}>
          <button className={mainCss.begin}>Comece Agora</button>
        </Link>
      </div>
      <img className={mainCss.img} src={bookImage} alt="Pilha de livros" />
    </main>
  );
}
