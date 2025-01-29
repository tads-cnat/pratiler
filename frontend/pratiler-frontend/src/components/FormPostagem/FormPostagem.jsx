import formPostagem from '../../assets/css/FormPostagem/FormPostagem.module.css';
import { internalAxios } from '../Global/axiosInstances';
import { setCsrf, getCsrf } from '../Global/authStore';
import { useEffect, useState } from 'react';

export default function FormPostagem(){
    const [livrosEstante, setLivrosEstante] = useState([]);
    const [formData, setFormData] = useState({
        livro_id: 0,
        pagina_inicial: 0,
        pagina_final: 0,
        texto: '',
    });
    const [novaPostagem, setNovaPostagem] = useState(false);

    const changeBook = async (e) => {
        const livroId = e.target.value;
        if (livroId !== '0') {
            const livro = await internalAxios.get(`interacoes/leitor/${livroId}`, {
                withCredentials: true,
            }).then((response) => {
                setFormData({
                    ...formData,
                    livro_id: Number(livroId),
                    pagina_inicial: response.data.pg_atual,
                });
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
            const response = await internalAxios.post("comentarios", formData, {
                headers: {
                    "X-Csrftoken": await getCsrf(),
                },
                withCredentials: true,
            }).then(() => setNovaPostagem(true)); ;
        } catch (err) {
            console.error(err);
        }
    }
    
    async function pegarLivrosEstante(){
        const response = await internalAxios.get("interacoes/leitor", {
                withCredentials: true
        }).
        then((response) => setLivrosEstante(response.data));
    }
    
    useEffect(() => {
        pegarLivrosEstante();
    }, []);
    return(
        <form onSubmit={postarComentario} className={formPostagem.postarComentario}>
                    <h1>Escreva um comentário</h1>
                    <label className={formPostagem.select}>Livro: 
                        <select name="livro_id" onChange={changeBook}>
                            <option value="0">Selecione</option>
                            {livrosEstante.map((l) => (
                                <option key={l.livro.id} value={l.livro.id}>{l.livro.titulo}</option>
                            ))}
                        </select>
                    </label>
                    <div className={formPostagem.inputsPaginas}>
                        <label>
                            Da página: <input type="number" name="pagina_inicial" value={formData.pagina_inicial} readOnly />
                        </label>
                        <label>
                            Até a página: <input type="number" name="pagina_final" value={formData.pagina_final} onChange={handleChange} min={formData.pagina_inicial + 1}/>
                        </label>
                    </div>
                    <textarea name="texto" value={formData.texto} onChange={handleChange} placeholder="Escreva seu comentário..." maxLength={350}></textarea>
                    <input type='submit' value='Postar' className={formPostagem.botao} />
                </form>
    );
}