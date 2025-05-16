import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

/* Store */
import { useAuthStore } from "./components/Global/authStore";

/* CSS */
import "./assets/css/base.css";

/* Componentes */
import { Feed } from "./components/Feed/Feed";
import { Login } from "./components/Login/Login";
import { Header } from "./components/Index/Header";
import { Main } from "./components/Index/Main";
import { Section } from "./components/Index/Section";
import { SectionInverted } from "./components/Index/SectionInverted";
import { Bookcase } from "./components/Bookcase/Bookcase";
import { Cadastro } from "./components/Cadastro/Cadastro";
import { Interaction } from "./components/Interaction/Interaction";
import { AddBook } from "./components/AddBook/AddBook";
import { Book } from "./components/Book/Book";
import { Perfil } from "./components/Perfil";
import { RealizarAvaliacao } from "./components/Avaliacao/form";

/* Images */
import girlReading from "./assets/img/mulher-lendo-um-livro.png";
import sereia from "./assets/img/sereia.png";
import knight from "./assets/img/guerreiro-medieval.png";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/adicionar-livro" element={<AddBook />} />
          <Route path="/livro-busca/:id" element={<Book />} />
          <Route path="/livros" element={<Bookcase />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/inicio" element={<Feed />} />
          <Route path="/" element={<Home />} />
          <Route path="/interacoes/:id" element={<Interaction />} />
          <Route path="/login" element={<Login />} />
          <Route path="/:username" element={<Perfil />} />
          <Route path="/fazer-avaliacao" element={<RealizarAvaliacao />} />
        </Routes>
      </Router>
    </>
  );
}

function Home() {
  const navigate = useNavigate();
  const { isAuthenticated, login, user } = useAuthStore();
  useEffect(() => {
    async function checkAuth() {
      if (isAuthenticated) {
        await login(user.email, user.senha);
        navigate("/livros");
      }
    }
    checkAuth();
  }, []);

  return (
    <>
      <Header />
      <Main />
      <Section
        strong="Organize"
        title="suas leituras"
        text="O sistema deixa sempre disponível as suas leituras atuais, futuras e finalizadas, além de estar sempre disponível para que você adicione livros a sua estante."
        text_two="Comente sobre suas leituras atuais, a partir da página que você comecou a ler até a página que você terminou a leitura, sempre dizendo o que você está achando do livro."
        img={girlReading}
      />
      <SectionInverted
        strong="Conheça"
        title="outros leitores"
        text="Você poderá comentar e curtir postagens de outros leitores, além de poder seguir a conta desses leitores caso você queira continuar acompanhando as postagens. Você pode conhecer novas pessoas que gostam dos mesmos livros que você!"
        img={sereia}
      />
      <Section
        strong="Novas recomendações"
        title="sempre"
        text="O sistema lista os livros mais populares, além de você poder visualizar os livros mais comentados pelos leitores que você segue."
        img={knight}
      />
    </>
  );
}
