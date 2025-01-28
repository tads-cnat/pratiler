import formPostagem from '../../assets/css/FormPostagem/FormPostagem.module.css';
import { useAuthStore, setCsrf, getCsrf } from '../Global/authStore';
import useEffect from 'react';

export default function FormPostagem(){
    const [livrosEstante, setLivrosEstante] = useState([]);
    const [formData, setFormData] = useState({
        livro_id: 0,
        pagina_inicial: 0,
        pagina_final: 0,
        texto: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const { user } = useAuthStore();

    async function postarComentario(){
        e.preventDefault();
        try {
            await setCsrf();
            const response = await internalAxios.post("comentarios", formData, {
                headers: {
                    "X-Csrftoken": await getCsrf(),
                },
            });
        } catch (err) {
            console.error(err);
        }
    }

    
    useEffect(() => {
        async function pegarLivrosEstante(){
            const response = await internalAxios.get("interacoes/leitor").
            then((response) => setLivrosEstante(response));
        }
        pegarLivrosEstante();
    }, []);
    return(
        <form onSubmit={postarComentario} className={formPostagem.postarComentario}>
                    <h1>Escreva um comentário</h1>
                    <label className={formPostagem.select}>Livro: 
                        <select name="livro" onChange={handleChange}>
                            <option value="0">Selecione</option>
                            {livrosEstante.map((l) => (
                                <option value={l.livro.id} >{l.livro.titulo}</option>
                            ))}
                            <option value={l.livro.id} >{4}</option> 
                        </select>
                    </label>
                    <div className={formPostagem.inputsPaginas}>
                        <label>
                            Da página: <input type="number" name="pagina-inicial" value={formData.pagina_inicial} min="número da página que parou" readOnly />
                        </label>
                        <label>
                            Até a página: <input type="number" name="pagina-final" value={formData.pagina_final} min="número da página que parou + 1" max="número da página que parou + 1" />
                        </label>
                    </div>
                    <textarea name="conteudo" value={formData.texto} placeholder="Escreva seu comentário..." maxLength={350}></textarea>
                    <input type='submit' value='Postar' className={formPostagem.botao} />
                </form>
    );
}