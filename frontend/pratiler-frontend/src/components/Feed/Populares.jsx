import React from 'react';
import { Header } from '../Global/HeaderGlobal';
import { SemResultados } from '../SemResultado/index';

export function Populares() {
  return (
    <>
      <Header />
      <div style={{ padding: 40, textAlign: 'center' }}>
        <SemResultados titulo="Ainda sem publicações populares" tamanho="M" />
        <p style={{ color: '#666', marginTop: 16 }}>
          Estamos preparando a lista de publicações mais populares. Volte mais tarde ou explore o feed.
        </p>
      </div>
    </>
  );
}

export default Populares;
