/* eslint-disable no-unused-vars */
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      setCsrfToken: async () => {
        const response = await fetch('http://localhost:8000/api/set-csrf-token', {
          method: 'GET',
          credentials: 'include'
        });
        const data = await response.json();
        return data.csrftoken;
      },

      login: async (email, password) => {
        const csrftoken = await get().setCsrfToken();
        const response = await fetch('http://localhost:8000/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include'
        });
        const data = await response.json();
        if (data.success) {
          set({ isAuthenticated: true });
          get().fetchUser();
        } else {
          set({ user: null, isAuthenticated: false });
        }
        return data.success;
      },

      logout: async () => {
        try {
          const csrftoken = await get().setCsrfToken();
          const response = await fetch('http://localhost:8000/api/logout', {
            method: 'POST',
            headers: {
              'X-CSRFToken': csrftoken
            },
            credentials: 'include'
          });
          if (response.ok) {
            set({ user: null, isAuthenticated: false });
          }
        } catch (error) {
          console.error('Logout failed', error);
          throw error;
        }
      },

      fetchUser: async () => {
        try {
          const csrftoken = await get().setCsrfToken();
          const response = await fetch('http://localhost:8000/api/user', {
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
              'X-CSRFToken': csrftoken
            },
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
    if (!navigator.cookieEnabled) {
        throw new Error('Cookies are disabled in this browser.');
    }
    document.cookie = fetch("http://localhost:8000/api/set-csrf-token").then((response) => response.data)
    const cookies = document.cookie?.split(';') || [];
    const cookie = cookies.find(c => c.trim().startsWith(`${name}=`));
    if (!cookie) {
        console.warn(`Cookie ${name} not found. Ensure it is set before making requests.`);
        return null;
    }

    return decodeURIComponent(cookie.trim().substring(name.length + 1));
}
