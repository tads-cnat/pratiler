import { useState } from "react";
import { Heart } from "phosphor-react";
import PropTypes from 'prop-types';

/** CSS */
import postagemCss from "../../assets/css/Postagem/Postagem.module.css";

/** Store */
import { internalAxios } from "../Global/axiosInstances";
import { getCsrf, setCsrf } from "../Global/authStore";
import { User } from 'phosphor-react';

export default function Postagem(props) {

    const { id, leitor, livro, texto, pagina_inicial, pagina_final, data_hora, curtidas, curtido } = props;
    const [taCurtido, setTaCurtido] = useState(curtido);
    const [numeroCurtidas, setNumeroCurtidas] = useState(curtidas);
    const [plural, setPlural] = useState(numeroCurtidas !== 1);
    const data = data_hora.split("T")[0];
    const valores = data.split("-");
    const dataFormatada = `${valores[2]}/${valores[1]}/${valores[0]}`;

    async function curtirComentario(){
        await setCsrf();
        await internalAxios.post(`comentarios/curtir/`, {comentario_id: id} , {
            headers: {
                "X-Csrftoken": await getCsrf(),
            }
        }).then((response) => {
            setTaCurtido(!taCurtido)
            setNumeroCurtidas(response.data);
            setPlural(response.data !== 1);
        });
    }

    return (
        <div className={postagemCss.comentario}>
            <div className={postagemCss.nomeBotaoSeguirData}>
                <div className={postagemCss.perfil}>
                    <div className={postagemCss.icon}>
                        <User weight='fill' color='#f6f6f6' size={22} />
                    </div>
                    <div className={postagemCss.nome}>
                        <p>{leitor.username}</p> {/* {leitor.username} */}
                        <button className={postagemCss.linkPerfil}>@lipealves</button> {/** {leitor.username} */}
                    </div>

            {/* {% if comentario.leitor in user.usuario.seguindo.all %}
                <a href="{% url 'seguir_leitor' comentario.leitor.id_username %}" className="botao-seguir">Seguindo</a>
            {% else %} --- ALTERNAR TEXTO APÓS SE SEGUINDO LEITOR OU NÃO*/}

                    <button className={postagemCss.botaoSeguir}>Seguir</button>
                </div>
                <p className={postagemCss.data}>{dataFormatada}</p> {/* {data_hora} */}
        </div>
    <p className={postagemCss.tituloAutor}>
        {livro.titulo} - {livro.autor.nome}
    </p>
    <p className={postagemCss.paginas}>
        Da página {pagina_inicial} até a página {pagina_final}.{/* {pagina_inicial} {pagina_final}*/}
    </p>
    <p>{texto}
    </p> {/* {texto} */}
    <button onClick={curtirComentario} className={postagemCss.curtir} type="button">
        <Heart className={taCurtido ? postagemCss.iconCurtido : postagemCss.iconCurtir} />
    </button>
    <p>{numeroCurtidas ?? 0} pessoa{plural && "s"} curti{plural ? "ram" : "u"} esse comentário</p>
    
</div>
    );
}

Postagem.propTypes = {
    leitor: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    livro: PropTypes.object.isRequired,
    texto: PropTypes.string.isRequired,
    pagina_inicial: PropTypes.number.isRequired,
    pagina_final: PropTypes.number.isRequired,
    data_hora: PropTypes.string.isRequired,
    curtidas: PropTypes.number,
    curtido: PropTypes.bool.isRequired,
};