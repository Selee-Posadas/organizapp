import { useAuthStore } from "@/src/modules/auth/store/auth.store";
import { Redirect, Slot } from "expo-router";
import { useEffect } from "react";

export default function TabsLayout() {
  const status = useAuthStore((state) => state.status);
  const checkStatus = useAuthStore((state) => state.checkStatus);

  useEffect(() => {
    checkStatus();
  }, []);

  if (status === "not-authenticated") {
    return <Redirect href="/(auth)/login" />;
  }

  return <Slot />;
}