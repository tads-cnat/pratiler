import { BookmarkSimple } from "phosphor-react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* CSS */
import css from "../../assets/css/AddBook/Minibook.module.css";

/* Store */
import { internalAxios } from "../Global/axiosInstances";

export function Minibook({ img, autor, title, id, handleMarkAsReading }) {
  const [weight, setWeight] = useState("regular");
  const navigate = useNavigate();

  const handleInteraction = async () => {
    await internalAxios
      .post(`interacoes/leitor/lendo?livro_id=${id}`, {})
      .then(() => {
        navigate("/livros");
      })
      .catch((error) => {
        console.error("Erro ao criar interação:", error);
      });
  };

  const handleClick = () => {
    setWeight((prevWeight) => (prevWeight === "regular" ? "fill" : "regular"));
  };

  return (
    <>
      <div className={css.book}>
        <img className={css.imgBook} src={img} alt="" />
        <h2 className={css.titleBook}>{title}</h2>
        <h3 className={css.titleAuthor}>{autor}</h3>
        <div className={css.buttons}>
          <button className={css.readBegin} onClick={handleInteraction}>
            Começar Leitura
          </button>
          <button className={css.addList} onClick={handleClick}>
            <BookmarkSimple
              weight={weight}
              onClick={() => handleMarkAsReading(id)}
            />
          </button>
        </div>
      </div>
    </>
  );
}

Minibook.propTypes = {
  img: PropTypes.string,
  autor: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  handleMarkAsReading: PropTypes.func.isRequired,
};
