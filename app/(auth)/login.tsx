import { Link } from "expo-router";
import { Text, View } from "react-native";

import { AuthLayout } from "@/src/modules/auth/components/layout/AuthLayout";
import { useAuthStore } from "@/src/modules/auth/store/auth.store";
import { BrutalInput } from "@/src/shared/components/ui/BrutalInput";
import { BrutalButton } from "@/src/shared/components/ui/BrutalButton";
import { BrutalHeader } from "@/src/shared/components/ui/BrutalHeader";

export default function LoginScreen() {
  const login = useAuthStore((state) => state.login);

  const onSignIn = async () => {
    await login("test@test.com", "123456");
  };

  return (
    <AuthLayout subtitle="Your digital sketchbook for life.">
      <BrutalHeader
        title="Welcome Back!"
        withHeaderBlock={true}
        containerClassName="mb-10"
      />

      <BrutalInput
        label="EMAIL ADDRESS"
        placeholder="hello@stationery.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <BrutalInput 
        label="PASSWORD" 
        placeholder="••••••••" 
        secureTextEntry 
      />

      <BrutalButton text="Sign In →" variant="secondary" onPress={onSignIn} />

      <Link href="/" className="self-center mt-6">
        <Text className="font-body underline text-brutal-text">
          Forgot your password?
        </Text>
      </Link>

      <View className="items-center mt-10">
        <Text className="font-body text-base text-brutal-text">
          New to the planner?{" "}
          <Link href="/register" className="font-heading underline">
            Sign Up
          </Link>
        </Text>
      </View>
    </AuthLayout>
  );
}