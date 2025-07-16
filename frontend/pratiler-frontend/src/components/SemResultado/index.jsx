import PropTypes from "prop-types";

/* CSS */
import semResultadoCss from "../../assets/css/SemResultado/SemResultado.module.css";

/* Images */
import semResultado from "../../assets/img/no-books.png";

export default function SemResultados(props) {
  const { titulo, tamanho } = props;
  let width;
  switch (tamanho) {
    case "P":
      width = "15%";
      break;
    case "M":
      width = "60%";
      break;
    case "G":
      width = "80%";
      break;
    default:
      width = "60%";
  }

  return (
    <div className={semResultadoCss.boxNoBooks}>
      <h1 className={semResultadoCss.titleNoBooks}>{titulo}</h1>
      <img
        width={width}
        className={semResultadoCss.noBooks}
        src={semResultado}
        alt="Nenhum livro encontrado"
      />
    </div>
  );
}

SemResultados.propTypes = {
  titulo: PropTypes.string.isRequired,
  tamanho: PropTypes.string,
};
