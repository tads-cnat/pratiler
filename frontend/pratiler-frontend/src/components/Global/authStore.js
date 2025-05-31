import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { internalAxios } from "./axiosInstances";

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
        const response = await internalAxios.post("auth/register", credentials);
        return response.data.success
          ? await get().login(email, password)
          : response.data;
      },

      login: async (email, password) => {
        const credentials = { email: email, password: password };
        await internalAxios
          .post("auth/login", credentials)
          .then(async (res) => {
            const response = res;
            set({ user: res.data, isAuthenticated: true });
            await internalAxios.post("auth/pair", credentials).then((res) => {
              set({
                token: res.data.access,
                refresh: res.data.refresh,
              });
              return response;
            });
          })
          .catch((error) => {
            return error;
          });
      },

      logout: async () => {
        await internalAxios
          .get("auth/logout")
          .then(() => {
            set({
              user: null,
              isAuthenticated: false,
              token: null,
              refresh: null,
            });
          })
          .catch((error) => {
            console.error("Falha ao fazer logout", error);
          });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
