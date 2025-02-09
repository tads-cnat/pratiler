/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import headerCss from '../../assets/css/Global/HeaderGlobal.module.css';
import { MagnifyingGlass, User, UserPlus, Books, Star, ChatText } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';
import { Search } from '../Search/Search';

/* Store */
import { useAuthStore } from '../Global/authStore';

/* Images */
import pratilerLogo from '../../assets/img/pratiler-logo.png';

export function Header() {
    const navigate = useNavigate();
    const { user, logout } = useAuthStore();

    return(
        <>
            <header className={headerCss.header}>
                <img className={headerCss.logo} src={pratilerLogo} alt="" />
                <div className={headerCss.info}>
                    <Search></Search>
                    {/* <form action="#">
                        <MagnifyingGlass size={22} color='#221D57' weight='bold'/>
                        <input type="text" name="" placeholder='Pesquisar...' />
                    </form> */}
                    <div className={headerCss.perfilBox}>
                        <div className={headerCss.icon}>
                            <User weight='fill' color='#f6f6f6' size={18} />
                        </div>
                        <span className={headerCss.titlePerfil}>{user && user.username}</span>
                        <button onClick={async () => {
                                await logout();
                                setTimeout(navigate('/'), 1000);
                            }
                        }>Sair</button>
                    </div>
                </div>
            </header>
            <div className={headerCss.secondHeader}>
                <div className={headerCss.secHeaderContent}>
                    <a href='/livros' className={headerCss.categories}>
                        <Books size={24} color='#221D57' weight='fill'/>
                        <span>Minhas Estante</span>
                    </a>

                    <a href='#' className={headerCss.categories}>
                        <Star size={24} color='#221D57' weight='fill'/>
                        <span>Livros Populares</span>
                    </a>

                    <a href='/inicio' className={headerCss.categories}>
                        <ChatText size={24} color='#221D57' weight='fill'/>
                        <span>Publicações Populares</span>
                    </a>

                    <a href='#' className={headerCss.categories}>
                        <UserPlus size={24} color='#221D57' weight='fill'/>
                        <span>Seguindo</span>
                    </a>
                </div>
            </div>
        </>
    );
}