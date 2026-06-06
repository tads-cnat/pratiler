import React from 'react';
import { Header } from '../Global/HeaderGlobal';
import { SemResultados } from '../SemResultado/index';

export function Seguindo() {
  return (
    <>
      <Header />
      <div style={{ padding: 40, textAlign: 'center' }}>
        <SemResultados titulo="Ainda sem publicações de quem você segue" tamanho="M" />
        <p style={{ color: '#666', marginTop: 16 }}>
          Siga outros leitores para ver as postagens deles aqui. Explore perfis e descubra novas leituras.
        </p>
      </div>
    </>
  );
}

export default Seguindo;
