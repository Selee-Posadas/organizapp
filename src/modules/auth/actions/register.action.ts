import { organizApi } from "@/src/shared/api/organizapi";
import { AuthResponse } from "../interfaces/auth-response.interface";

export const registerAction = async (
  email: string,
  password: string,
  name: string,
): Promise<AuthResponse> => {
  try {
    const { data } = await organizApi.post<AuthResponse>("/auth/register", {
      email,
      password,
      name,
    });

    return data;
  } catch (error) {
    throw error;
  }
};
