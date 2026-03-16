/* eslint-disable @typescript-eslint/no-unused-vars */
import { SecureStorageAdapter } from "@/src/shared/api/secure-storage-adapter";
import { User } from "@/src/shared/interfaces/user.interface";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { checkAction } from "../actions/check-auth.action";
import { loginAction } from "../actions/login.action";
import { registerAction } from "../actions/register.action";

type AuthStatus = "authenticated" | "not-authenticated" | "checking";

type AuthState = {
  user: User | null;
  token: string | null;
  status: AuthStatus;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  checkStatus: () => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      token: null,
      status: "not-authenticated",

      login: async (email, password) => {
        try {
          const data = await loginAction(email, password);
          set({
            user: data.user,
            token: data.token,
            status: "authenticated",
          });
          return true;
        } catch (error) {
          get().logout();
          return false;
        }
      },

      logout: () => {
        set({
          user: null,
          token: null,
          status: "not-authenticated",
        });
      },

      checkStatus: async () => {
        try {
          const data = await checkAction();
          if (!data) throw new Error("No session");

          set({
            user: data.user,
            token: data.token,
            status: "authenticated",
          });
          return true;
        } catch (error) {
          get().logout();
          return false;
        }
      },

      register: async (email, password, name) => {
        try {
          const data = await registerAction(email, password, name);
          set({
            user: data.user,
            token: data.token,
            status: "authenticated",
          });
          return true;
        } catch (error) {
          get().logout();
          return false;
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => SecureStorageAdapter),
    },
  ),
);
