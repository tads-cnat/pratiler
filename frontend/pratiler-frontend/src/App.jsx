import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* CSS */
import './assets/css/Global/global.css';

/* Componentes */
import { Login } from './components/Login/Login';
import { Header } from './components/Index/Header';
import { Main } from './components/Index/Main';
import { Separator } from './components/Index/Separator';
import { Section } from './components/Index/Section';
import { SectionInverted } from './components/Index/SectionInverted';

/* Images */

import girlReading from './assets/img/menina-lendo.png';
import sereia from './assets/img/sereia.png';
import gnomo from './assets/img/duende.png';
import { Bookcase } from './components/Bookcase/Bookcase';
import { Cadastro } from './components/Cadastro/Cadastro';




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/livros' element={<Bookcase />} />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
      </Router>
      
    </>
  );
}

function Home(){
  return(
    <>
      <Header />
      <Main />
      <Separator />
      <Section 
        strong="Organize" 
        title= "suas leituras" 
        text="O sistema deixa sempre disponível as suas leituras atuais, futuras e finalizadas, além de estar sempre disponível para que você adicione livros a sua estante."
        text_two="Comente sobre suas leituras atuais, a partir da página que você comecou a ler até a página que você terminou a leitura, sempre dizendo o que você está achando do livro."
        img={girlReading}
      />
      <SectionInverted
        strong="Conheça" 
        title= "outros leitores" 
        text="Você poderá comentar e curtir postagens de outros leitores, além de poder seguir a conta desses leitores caso você queira continuar acompanhando as postagens. Você pode conhecer novas pessoas que gostam dos mesmos livros que você!"
        img={sereia}
      />
      <Section 
        strong="Novas recomendações" 
        title= "sempre" 
        text="O sistema lista os livros mais populares, além de você poder visualizar os livros mais comentados pelos leitores que você segue."
        img={gnomo}
      />
    </>
  );
}

export default App;
