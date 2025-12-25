import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { internalAxios } from './axiosInstances';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      token: null,
      refresh: null,

      register: async (nome, username, email, password) => {
        const credentials = {
          nome: nome,
          username: username,
          email: email,
          password: password,
        };
        return await internalAxios
          .post('auth/register', credentials)
          .then(async () => await get().login(email, password))
          .catch((error) => (error.response.status === 400 ? error.response.data : error));
      },

      login: async (email, password) => {
        const credentials = { email: email, password: password };
        return await internalAxios
          .post('auth/login', credentials)
          .then(async ({res}) => {
            const response = res;
            set({ user: res.data, isAuthenticated: true });
            await internalAxios.post('auth/pair', credentials).then(({ data }) => {
              set({
                token: data.access,
                refresh: data.refresh,
              });
              return response;
            });
          })
          .catch((error) => (error.response.status === 400 ? error.response.data : error));
      },

      logout: async () => {
        await internalAxios
          .get('auth/logout')
          .then(() => {
            set({
              user: null,
              isAuthenticated: false,
              token: null,
              refresh: null,
            });
          })
          .catch((error) => {
            console.error('Falha ao fazer logout', error);
          });
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
