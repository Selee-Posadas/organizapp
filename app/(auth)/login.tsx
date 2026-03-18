import { Link } from "expo-router";
import { Alert, ScrollView, Text, View } from "react-native";

import { AuthLayout } from "@/src/modules/auth/components/layout/AuthLayout";
import { useAuthStore } from "@/src/modules/auth/store/auth.store";
import { BrutalButton } from "@/src/shared/components/ui/BrutalButton";
import { BrutalHeader } from "@/src/shared/components/ui/BrutalHeader";
import { BrutalInput } from "@/src/shared/components/ui/BrutalInput";
import { useForm } from "@/src/shared/hooks/useForm";

export default function LoginScreen() {
  const login = useAuthStore((state) => state.login);

  const { handlerChangeText, getFormValues } = useForm({
    email: "",
    password: "",
  });

  const onSignIn = async () => {
    const { email, password } = getFormValues();

    if (email.length < 4 || password.length < 4) {
      return Alert.alert(
        "Error",
        "Por favor, ingresa un correo electrónico y contraseña válidos.",
      );
    }

    const success = await login(email, password);

    if (!success) {
      return Alert.alert(
        "Error",
        "Correo electrónico o contraseña incorrectos. Por favor, intenta de nuevo.",
      );
    }
  };

  return (
    <AuthLayout subtitle="Life is better when you plan it!">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BrutalHeader
          title="Bienvenido!"
          withHeaderBlock={true}
          containerClassName="mb-10"
        />

        <BrutalInput
          label="CORREO ELECTRÓNICO"
          placeholder="hola@organizapp.com"
          icon="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => handlerChangeText(value, "email")}
        />

        <BrutalInput
          label="CONTRASEÑA"
          placeholder="••••••••"
          icon="lock-closed-outline"
          secureTextEntry
          onChangeText={(value) => handlerChangeText(value, "password")}
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
            <Link href="/(auth)/register" className="font-heading underline">
              Registrate
            </Link>
          </Text>
        </View>
      </ScrollView>
    </AuthLayout>
  );
}
