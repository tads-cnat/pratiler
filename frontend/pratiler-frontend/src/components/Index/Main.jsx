import mainCss from '../../assets/css/Index/Main.module.css'
import bookImage from '../../assets/img/home-livros-coracoes.png'
import { Link } from 'react-router-dom';


export function Main(){
    return(
        <>
            <main className={mainCss.section}>
                <div className={mainCss.section_text_btn}>
                    <p>Uma rede social para <strong>compartilhar</strong> leituras
                    e se <strong>motivar</strong> cada vez mais!</p>
                    <Link to="/login" className={mainCss.section_text_btn}>
                        <button>Comece Agora</button>
                    </Link>
                </div>
                <img src={bookImage} alt="" />
            </main>
        </>
    )
}