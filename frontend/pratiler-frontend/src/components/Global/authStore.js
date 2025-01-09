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

      getCsrfToken: async () => get().csrfToken,

      setCsrfToken: async () => {
        const token = await axios.get("http://localhost:8000/api/set-csrf-token").then((response) => response.data);
        document.cookie = `csrftoken=${token.csrftoken}`
        set({csrfToken: token.csrftoken});
      },
      
      register: async (username, email, password) => {
        await get().setCsrfToken();
        const credentials = {username: username, email: email, password: password};
        const response = await axios.post(
          'http://localhost:8000/api/register', credentials, {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': get().csrfToken
            },
            withCredentials: true,
          });
          return response.data.success ? await get().login(email, password): response.data;
        },
        
        login: async (email, password) => {
          if(!get().csrfToken) await get().setCsrfToken();
          const credentials = {email: email, password: password}
          const response = await axios.post('http://localhost:8000/api/login', credentials, {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': get().csrfToken
            },
            withCredentials: true
          }).then((response) => response.data);
          if (response.success) await get().fetchUser();
          return response;
        },

      logout: async () => {
        try{
          const response = await axios.get('http://localhost:8000/api/logout', {
            headers: {
              'X-CSRFToken': get().csrfToken
            },
            withCredentials: true
          });
          set({ user: null, isAuthenticated: false, csrfToken: null });
          document.cookies = '';
        } catch(error){
          console.log(error);
        }
      },

      fetchUser: async () => {
        try {
          const response = await axios.get('http://localhost:8000/api/user', {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': get().csrfToken
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