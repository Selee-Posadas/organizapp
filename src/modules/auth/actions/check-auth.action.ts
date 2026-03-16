import { organizApi } from "@/src/shared/api/organizapi";
import { AuthResponse } from "../interfaces/auth-response.interface";

export const checkAction = async (): Promise<AuthResponse> => {

  try {
    const { data } = await organizApi.get<AuthResponse>("/auth/check-status");
    return data;
  } catch (error) {
    throw error;
  }
};
