import { internalAxios } from '../Global/axiosInstances';

export async function getPostagens() {
  return await internalAxios.get('postagens');
}

export async function getLivrosEstante() {
  return await internalAxios.get('interacoes', { params: { status: 'QL,LN' } });
}

export async function fazerPostagem(formData) {
  return await internalAxios.post('postagens', formData);
}

export async function getInteracao(interacaoId) {
  return await internalAxios.get(`interacoes/${interacaoId}`);
}

function changeFormData(params) {
  const { setFormData, formData, interacaoId, trocouLivro, pg_atual } = params;
  if (trocouLivro)
    setFormData({
      ...formData,
      interacao_id: Number(interacaoId),
      pagina_inicial: pg_atual,
    });
  else
    setFormData({
      ...formData,
      pagina_final: 0,
      texto: '',
    });
}

export async function changeBook(event, id, setFormData, formData) {
  let interacaoId;
  const trocouLivro = event !== undefined;
  if (trocouLivro) interacaoId = event.target.value;
  else interacaoId = id;
  if (interacaoId === '0') {
    setFormData({
      ...formData,
      interacao_id: 0,
      pagina_inicial: 0,
      pagina_final: 0,
      texto: '',
    });
  } else {
    await getInteracao(interacaoId).then((response) => {
      changeFormData({
        setFormData,
        formData,
        interacaoId,
        trocouLivro,
        pg_atual: response.data.pg_atual,
      });
    });
  }
}
