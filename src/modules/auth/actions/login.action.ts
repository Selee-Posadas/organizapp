import { organizApi } from "@/src/shared/api/organizapi";
import { AuthResponse } from "../interfaces/auth-response.interface";

export const loginAction = async (
  email: string,
  password: string,
): Promise<AuthResponse> => {
  try {
    const { data } = await organizApi.post<AuthResponse>("/auth/login", {
      email,
      password,
    });

    return data;
  } catch (error) {
    throw error;
  }
};
