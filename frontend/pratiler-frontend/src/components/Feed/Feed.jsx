import { useEffect, useState } from "react";

/* CSS */
import feedCss from "../../assets/css/Feed/Feed.module.css";

/* Store */
import { internalAxios } from "../Global/axiosInstances";

/* Components */
import { Header } from "../Global/HeaderGlobal";
import FormPostagem from "../FormPostagem/FormPostagem";
import Postagem from "../Postagem/Postagem";

export function Feed() {

    const [postagens, setPostagens] = useState([]);

    useEffect(() => {
        async function getPostagens() {
            const response = await internalAxios.get("comentarios")
            .then((response) => setPostagens(response.data));
        }
        getPostagens();
    }, []);

    return (
        <>
            <Header />
            <div className={feedCss.content}>
                <FormPostagem />
                <div>
                {postagens.map((postagem, index) => (
                        <Postagem key={index}
                            id={postagem.id}
                            leitor={postagem.leitor}
                            livro={postagem.livro} 
                            texto={postagem.texto}
                            data_hora={postagem.data_hora}
                            pagina_inicial={postagem.pagina_inicial}
                            pagina_final={postagem.pagina_final}
                        />
                    )
                )}
                </div>
            </div>
        </>
    );
}