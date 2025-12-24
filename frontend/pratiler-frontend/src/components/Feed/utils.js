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
  const { setFormData, formData, interacaoId, realizouPostagem, pg_atual } = params;
  setFormData({
    ...formData,
    interacao_id: Number(interacaoId),
    pagina_inicial: pg_atual,
  });
  if (realizouPostagem)
    setFormData({
      ...formData,
      pagina_final: 0,
      texto: '',
    });
}

export async function changeBook(event, id, setFormData, formData) {
  let interacaoId;
  const realizouPostagem = event === undefined;
  if (!realizouPostagem) interacaoId = event.target.value;
  else interacaoId = id;
  if (interacaoId !== '0') {
    await getInteracao(interacaoId).then((response) => {
      changeFormData({
        setFormData,
        formData,
        interacaoId,
        realizouPostagem,
        pg_atual: response.data.pagina_atual,
      });
    });
  } else {
    setFormData({
      ...formData,
      interacao_id: 0,
      pagina_inicial: 0,
      pagina_final: 0,
      texto: '',
    });
  }
}
