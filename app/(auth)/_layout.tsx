import { useAuthStore } from "@/src/modules/auth/store/auth.store";
import { Redirect, Slot } from "expo-router";

export default function AuthLayout() {
  const status = useAuthStore((state) => state.status);

  if (status === "authenticated") {
    return <Redirect href="/(tabs)" />;
  }

  return <Slot />;
}