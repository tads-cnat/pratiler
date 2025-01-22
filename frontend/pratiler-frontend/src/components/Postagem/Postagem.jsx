import { useState, useEffect } from "react";
import { Heart } from "phosphor-react";
import postagemCss from "../../assets/css/Postagem/Postagem.module.css";

export default function Postagem(props) {

    const [curtido, setCurtido] = useState(false);

    function curtirComentario(){
        // const response = await internalAxios.post("curtir-comentario", {comentario_id: props.id});
        // if(response.status === 200){
        //     alert("Comentário curtido com sucesso!");
        // }
    }

    useEffect(() => {
        // async function getUltimaPagina(){
        //     const response = await internalAxios.get(`ultima-pagina?leitor=${leitor.id}&livro=${livro.id}`).then();
        //     setUltimaPagina(response.items);
        // }
        // getUltimaPagina();
    }, [])

    const { id, leitor, livro, texto, pagina_final, data_hora } = props;

    return (
        <div className={postagemCss.comentario}>
            <div className={postagemCss.nomeBotaoSeguirData}>
                <div className={postagemCss.perfil}>
                    <img src="../../assets/img/duende.png" /> {/*{leitor.foto_perfil} */}
                    <div className={postagemCss.nome}>
                        <p>Lipe</p> {/* {leitor.username} */}
                        <button className={postagemCss.linkPerfil}>@lipealves</button> {/** {leitor.username} */}
                    </div>

            {/* {% if comentario.leitor in user.usuario.seguindo.all %}
                <a href="{% url 'seguir_leitor' comentario.leitor.id_username %}" className="botao-seguir">Seguindo</a>
            {% else %} --- ALTERNAR TEXTO APÓS SE SEGUINDO LEITOR OU NÃO*/}

                    <button className={postagemCss.botaoSeguir}>Seguir</button>
                </div>
                <p className={postagemCss.data}>00/00/0000</p> {/* {data_hora} */}
        </div>
    <p className={postagemCss.tituloAutor}>
        titulo do livro - autor do livro {/* {livro.titulo} - {livro.autor.nome} */}
    </p>
    <p className={postagemCss.paginas}>
        Da página 0 até a página {pagina_final}. {/* {pagina_inicial} */}
    </p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, odit! Architecto pariatur ad, minima quisquam natus iste,
        autem nisi ex ipsam dolor veritatis impedit commodi excepturi nobis repellendus quo. Natus?
    </p> {/* {texto} */}
    <button onClick={curtirComentario} className={postagemCss.curtir} type="button">
        <Heart className={curtido ? postagemCss.iconCurtido : postagemCss.iconCurtir} />
    </button>
</div>
    );
}