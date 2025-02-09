/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { internalAxios } from './axiosInstances';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      csrfToken: null,
      
      register: async (username, email, password) => {
        await setCsrf();
        const credentials = {username: username, email: email, password: password};
        const response = await internalAxios.post(
          'register', credentials, {
            headers: {
              'X-Csrftoken': await getCsrf()
            }
          });
          return response.data.success ? await get().login(email, password): response.data;
        },
        
        login: async (email, password) => {
          await setCsrf();
          const credentials = {email: email, password: password}
          const response = await internalAxios.post('login', credentials, {
            headers: {
              'X-Csrftoken': await getCsrf()
            }
          }).then((response) => response.data)
          if (response.success) await get().fetchUser();
          return response;
        },

      logout: async () => {
        try{
          await internalAxios.get('logout', {
            headers: {
              'X-Csrftoken': await getCsrf()
            }
          });
          set({ user: null, isAuthenticated: false, csrfToken: null });
          document.cookies = '';
        } catch(error){
          console.error(error);
        }
      },

      fetchUser: async () => {
        try {
          const response = await internalAxios.get('user');
          set({ user: response.data, isAuthenticated: true });
        } catch (error) {
          console.error('Failed to fetch user', error);
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export async function getCsrf(){ 
  const { csrfToken } = useAuthStore.getState(); 
  return csrfToken;
}

export async function setCsrf(){
  const token = await internalAxios.get("set-csrf-token").then((response) => response.data)
  document.cookie = `csrftoken=${token.csrftoken}`;
  useAuthStore.setState({csrfToken: token.csrftoken});
}