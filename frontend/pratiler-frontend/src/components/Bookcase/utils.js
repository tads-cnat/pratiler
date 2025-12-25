import { internalAxios } from '../Global/axiosInstances';

export async function fetchAvailableBooks(props) {
  const { url, params, setBooks, setError, setLoading } = props;
  setLoading(true);
  await internalAxios
    .get(url, params ? { params } : undefined)
    .then((response) => {
      setBooks(response.data);
    })
    .catch((err) => {
      setError('Erro ao mostrar os Livros: ', err.response.data);
    })
    .finally(() => {
      setLoading(false);
    });
}
