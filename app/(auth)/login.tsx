import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

import { AuthLayout } from "@/src/modules/auth/components/layout/AuthLayout";
import { useAuthStore } from "@/src/modules/auth/store/auth.store";
import { BrutalButton } from "@/src/shared/components/ui/BrutalButton";
import { BrutalHeader } from "@/src/shared/components/ui/BrutalHeader";
import { BrutalInput } from "@/src/shared/components/ui/BrutalInput";

export default function LoginScreen() {
  const login = useAuthStore((state) => state.login);

  const onSignIn = async () => {
    await login("test@test.com", "123456");
  };

  return (
    <AuthLayout subtitle="Life is better when you plan it!">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BrutalHeader
          title="Bienvenida!"
          withHeaderBlock={true}
          containerClassName="mb-10"
        />

        <BrutalInput
          label="CORREO ELECTRÓNICO"
          placeholder="hola@organizapp.com"
          icon="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <BrutalInput
          label="CONTRASEÑA"
          placeholder="••••••••"
          icon="lock-closed-outline"
          secureTextEntry
        />

        <BrutalButton
          text="Ingresar →"
          variant="secondary"
          onPress={onSignIn}
        />

        <Link href="/" className="self-center mt-6">
          <Text className="font-body underline text-brutal-text">
            ¿Olvidaste tu contraseña?
          </Text>
        </Link>

        <View className="items-center mt-10 mb-5">
          <Text className="font-body text-base text-brutal-text">
            ¿Nuevo en el planner?{" "}
            <Link href="/register" className="font-heading underline">
              Registrate
            </Link>
          </Text>
        </View>
      </ScrollView>
    </AuthLayout>
  );
}
