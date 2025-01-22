import formPostagem from '../../assets/css/FormPostagem/FormPostagem.module.css';

export default function FormPostagem(){

    function atualizarPagina(){

    }

    return(
        <form className={formPostagem.postarComentario}>
                    <h1>Escreva um comentário</h1>
                    <label className={formPostagem.select}>Livro: 
                        <select name="livro" onClick={atualizarPagina}>
                            <option value="0">Selecione</option>
            {/* {% if livros %}
                {% for l in livros %}
                    {% with ultima_pagina=l.comentariosLeitorLivro.first.pagina_final %} */}
                    {/*ultima-pagina="{{ ultima_pagina }}"*/}
                            <option value="{{l.livro.id}}" >{4}</option> 
                        </select>
                    </label>
                    <div className={formPostagem.inputsPaginas}>
                        <label>
                            Da página: <input type="number" name="pagina-inicial" min="número da página que parou" readOnly />
                        </label>
                        <label>
                            Até a página: <input type="number" name="pagina-final" min="número da página que parou + 1" max="número da página que parou + 1" />
                        </label>
                    </div>
                    <textarea name="conteudo" placeholder="Escreva seu comentário..." maxLength={350}></textarea>
                    <input type='submit' value='Postar' className={formPostagem.botao} />
                </form>
    );
}