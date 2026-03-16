// app/_layout.tsx
import { useEffect } from "react";
import { Stack, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_700Bold 
} from "@expo-google-fonts/inter";
import { SpaceMono_400Regular } from "@expo-google-fonts/space-mono";


import "../global.css";
import { useAuthStore } from "@/src/modules/auth/store/auth.store";



SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const segments = useSegments();
  const router = useRouter();


  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
    SpaceMono_400Regular,
  });


  const checkStatus = useAuthStore((state) => state.checkStatus);
  const status = useAuthStore((state) => state.status);


  useEffect(() => {
    checkStatus();
  }, []);


  useEffect(() => {
    
    if (!fontsLoaded || status === "checking") return;

    const inAuthGroup = segments[0] === "(auth)";

    if (status === "authenticated" && inAuthGroup) {
    
      router.replace("/(tabs)");
    } else if (status === "not-authenticated" && !inAuthGroup) {
     
      router.replace("/login"); 
    }


    SplashScreen.hideAsync();
  }, [status, segments, fontsLoaded]);

  
  if (!fontsLoaded && !fontError) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#F5F5F5" }, 
      }}
    >
      <Stack.Screen name="(auth)" options={{ animation: "fade" }} />
      <Stack.Screen name="(tabs)" options={{ animation: "slide_from_right" }} />
    </Stack>
  );
}