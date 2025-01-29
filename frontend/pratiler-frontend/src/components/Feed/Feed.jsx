import { useEffect, useState } from "react";

/* CSS */
import feedCss from "../../assets/css/Feed/Feed.module.css";
import formCss from '../../assets/css/FormPostagem/FormPostagem.module.css';

/* Store */
import { internalAxios } from "../Global/axiosInstances";
import { setCsrf, getCsrf } from "../Global/authStore";

/* Components */
import { Header } from "../Global/HeaderGlobal";
import Postagem from "../Postagem/Postagem";

export function Feed() {
    const [postagens, setPostagens] = useState([]);
    const [livrosEstante, setLivrosEstante] = useState([]);
    const [novaPostagem, setNovaPostagem] = useState(false);
    const [formData, setFormData] = useState({
        livro_id: 0,
        pagina_inicial: 0,
        pagina_final: 0,
        texto: '',
    });

    const changeBook = async (e) => {
        const livroId = e.target.value;
        if (livroId !== '0') {
            await internalAxios.get(`interacoes/leitor/${livroId}`, {
                withCredentials: true,
            }).then((response) => {
                setFormData({
                    ...formData,
                    livro_id: Number(livroId),
                    pagina_inicial: response.data.pg_atual,
                });
            });
        }
        else{
            setFormData({
                ...formData,
                livro_id: 0,
                pagina_inicial: 0,
                pagina_final: 0,
                texto: '',
            });
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    async function postarComentario(e){
        e.preventDefault();
        try {
            await setCsrf();
            await internalAxios.post("comentarios", formData, {
                headers: {
                    "X-Csrftoken": await getCsrf(),
                },
                withCredentials: true,
            }).then(() => {
                setNovaPostagem(!novaPostagem);
                setFormData({
                    livro_id: 0,
                    pagina_inicial: 0,
                    pagina_final: 0,
                    texto: '',
                });
            });
        } catch (err) {
            console.error(err);
        }
    }
    
    async function pegarLivrosEstante(){
        await internalAxios.get("interacoes/leitor", {
                withCredentials: true
        }).
        then((response) => setLivrosEstante(response.data));
    }
    async function getPostagens() {
        await internalAxios.get("comentarios")
        .then((response) => setPostagens(response.data));
    }
    
    useEffect(() => {
        pegarLivrosEstante();
    }, []);

    useEffect(() => {
        getPostagens();
    }, [novaPostagem]);

    return (
        <>
            <Header />
            <div className={feedCss.content}>
                <form onSubmit={postarComentario} className={formCss.postarComentario}>
                    <h1>Escreva um comentário</h1>
                    <label className={formCss.select}>Livro: 
                        <select name="livro_id" onChange={changeBook}>
                            <option value="0">Selecione</option>
                            {livrosEstante.map((l) => (
                                <option key={l.livro.id} value={l.livro.id}>{l.livro.titulo}</option>
                            ))}
                        </select>
                    </label>
                    <div className={formCss.inputsPaginas}>
                        <label>
                            Da página: <input type="number" name="pagina_inicial" value={formData.pagina_inicial} readOnly />
                        </label>
                        <label>
                            Até a página: <input type="number" name="pagina_final" value={formData.pagina_final} onChange={handleChange} min={formData.pagina_inicial + 1}/>
                        </label>
                    </div>
                    <textarea name="texto" value={formData.texto} onChange={handleChange} placeholder="Escreva seu comentário..." maxLength={350}></textarea>
                    <input type='submit' value='Postar' className={formCss.botao} />
                </form>
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