import { internalAxios } from '../Global/axiosInstances';

export async function fetchAvailableBooks(url, params) {
  await internalAxios.get(url, params ? { params } : undefined);
}
