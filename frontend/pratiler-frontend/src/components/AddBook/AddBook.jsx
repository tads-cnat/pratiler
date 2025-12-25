import React from 'react';

/* Componentes */
import { Header } from '../Global/HeaderGlobal';
import { ListBooks } from './ListBooks';

/* CSS */
import css from '../../assets/css/AddBook/AddBook.module.css';

export function AddBook() {
  return (
    <>
      <Header />
      <div className={css.section}>
        <ListBooks />
      </div>
    </>
  );
}
