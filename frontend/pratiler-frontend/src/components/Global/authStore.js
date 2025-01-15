/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import axios from 'axios';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      csrfToken: null,
      
      register: async (username, email, password) => {
        await setCsrf();
        const credentials = {username: username, email: email, password: password};
        const response = await axios.post(
          'http://localhost:8000/api/register', credentials, {
            headers: {
              'Content-Type': 'application/json',
              'X-Csrftoken': await getCsrf()
            },
            withCredentials: true,
          });
          return response.data.success ? await get().login(email, password): response.data;
        },
        
        login: async (email, password) => {
          if(!(await getCsrf())) await setCsrf();
          const credentials = {email: email, password: password}
          const response = await axios.post('http://localhost:8000/api/login', credentials, {
            headers: {
              'Content-Type': 'application/json',
              'X-Csrftoken': await getCsrf()
            },
            withCredentials: true
          }).then((response) => response.data)
          if (response.success) await get().fetchUser();
          return response;
        },

      logout: async () => {
        try{
          await axios.get('http://localhost:8000/api/logout', {
            headers: {
              'X-Csrftoken': await getCsrf()
            },
            withCredentials: true
          });
          set({ user: null, isAuthenticated: false, csrfToken: null });
          document.cookies = '';
        } catch(error){
          console.error(error);
        }
      },

      fetchUser: async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/user', {
            headers: {
              'Content-Type': 'application/json',
              'X-Csrftoken': await getCsrf()
            },
            withCredentials: true
          });
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
  const token = await axios.get("http://localhost:8000/api/set-csrf-token").then((response) => response.data)
  document.cookie = `csrftoken=${token.csrftoken}`
  useAuthStore.setState({csrfToken: token.csrftoken});
}