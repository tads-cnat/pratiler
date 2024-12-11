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

      setCsrfToken: async () => {
        const response = await axios.get('http://localhost:8000/api/set-csrf-token');
        set({csrfToken: response.data});
      },

      login: async ({ email, password }) => {
        credentials = {email: email, password: password}
        const response = await axios.post('http://localhost:8000/api/login', 
          credentials, 
          {
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': get().csrfToken
            },
            withCredentials: true
          }
        );
        if (response.data.success) get().fetchUser();
        return response
      },

      logout: async () => {
          const response = await axios.get('http://localhost:8000/api/logout', {
            headers: {
              'X-CSRFToken': get().csrfToken
            },
            credentials: 'include'
          });
          set({ user: null, isAuthenticated: false });
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
          if (response.ok) {
            const data = await response.json();
            set({ user: data, isAuthenticated: true });
          } else {
            set({ user: null, isAuthenticated: false });
          }
        } catch (error) {
          console.error('Failed to fetch user', error);
          set({ user: null, isAuthenticated: false });
        }
      },
    }),
    {
      name: 'auth-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export function getCookie(name) {
  	const CSRF_TOKEN = "csrftoken";
  	if (!navigator.cookieEnabled) throw new Error('Cookies are disabled in this browser.');
  	const cookies = document.cookie?.split(';') || [];
  	const csrfCookie = cookies.find(c => c.trim().startsWith(`${CSRF_TOKEN}=`));
  	if(!csrfCookie) document.cookie += axios.get("http://localhost:8000/api/set-csrf-token").then((response) => response.data)
  	return decodeURIComponent(csrfCookie.trim().substring(CSRF_TOKEN.length + 1));
}

export function getUser() {
  	const DATA = ["biografia", "username", "email", "foto_perfil"];
	  // em desenvolvimento
}