import { Books, BookOpen, ChatCircleText } from 'phosphor-react';
import PropTypes from 'prop-types';

/* CSS */
import perfilCss from '../../../../assets/css/Perfil/Perfil.module.css';

export default function PerfilTabs(props) {
  const { perfil, setTab, tab, usuarioLogado } = props;
  return (
    <div className={perfilCss.perfilNav}>
      <div
        className={tab === 'estante' ? perfilCss.tabPerfilNavAtivado : perfilCss.tabPerfilNav}
        onClick={() => setTab('estante')}
        onKeyDown={() => setTab('estante')}
        role="tab"
        tabIndex={0}
      >
        <Books size={40} color="#3D3569" weight="fill" />
        {usuarioLogado ? 'Minha Estante' : `Estante de ${perfil.leitor.username}`}
      </div>
      <div
        className={tab === 'resenhas' ? perfilCss.tabPerfilNavAtivado : perfilCss.tabPerfilNav}
        onClick={() => setTab('resenhas')}
        onKeyDown={() => setTab('resenhas')}
        role="tab"
        tabIndex={0}
      >
        <BookOpen size={40} color="#3D3569" weight="fill" />
        Resenhas
      </div>
      <div
        className={tab === 'publicacoes' ? perfilCss.tabPerfilNavAtivado : perfilCss.tabPerfilNav}
        onClick={() => setTab('publicacoes')}
        onKeyDown={() => setTab('publicacoes')}
        role="tab"
        tabIndex={0}
      >
        <ChatCircleText size={40} color="#3D3569" weight="fill" />
        Publicações recentes
      </div>
    </div>
  );
}

PerfilTabs.propTypes = {
  perfil: PropTypes.object.isRequired,
  setTab: PropTypes.func.isRequired,
  tab: PropTypes.string.isRequired,
  usuarioLogado: PropTypes.bool.isRequired,
};
