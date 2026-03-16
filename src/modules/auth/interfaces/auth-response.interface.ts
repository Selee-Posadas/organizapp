import { User } from "@/src/shared/interfaces/user.interface";


export interface AuthResponse {
  message: string;
  user: User;
  token: string;
}
