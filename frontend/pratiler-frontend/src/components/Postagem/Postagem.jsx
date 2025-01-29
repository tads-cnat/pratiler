import { useEffect, useState } from "react";
import { Heart } from "phosphor-react";
import postagemCss from "../../assets/css/Postagem/Postagem.module.css";
import { internalAxios } from "../Global/axiosInstances";
import PropTypes from 'prop-types';

import foto from "../../assets/img/duende.png";

export default function Postagem(props) {

    const [curtido, setCurtido] = useState(false);
    const { id, leitor, livro, texto, pagina_inicial, pagina_final, data_hora } = props;
    const data = data_hora.split("T")[0];
    const valores = data.split("-");
    const dataFormatada = `${valores[2]}/${valores[1]}/${valores[0]}`;

    function curtirComentario(){
        // const response = await internalAxios.post("curtir-comentario", {comentario_id: id});
        // if(response.status === 200){
        //     alert("Comentário curtido com sucesso!");
        // }
    }

    useEffect(() => {
        // const response = await internalAxios.get("verificar-curtida", {comentario_id: id});
        // if(response.status === 200){
        //     setCurtido(true);
    }, [curtido]);


    return (
        <div className={postagemCss.comentario}>
            <div className={postagemCss.nomeBotaoSeguirData}>
                <div className={postagemCss.perfil}>
                    <img src={foto} /> {/*{leitor.foto_perfil} */}
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
        <Heart className={curtido ? postagemCss.iconCurtido : postagemCss.iconCurtir} />
    </button>
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
};