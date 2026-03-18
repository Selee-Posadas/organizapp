import { Link } from "expo-router";
import { View, ScrollView, Alert } from "react-native";

import { AuthLayout } from "../../src/modules/auth/components/layout/AuthLayout";
import { BrutalInput } from "@/src/shared/components/ui/BrutalInput";
import { BrutalButton } from "@/src/shared/components/ui/BrutalButton";
import { BrutalHeader } from "@/src/shared/components/ui/BrutalHeader";
import { useAuthStore } from "@/src/modules/auth/store/auth.store";
import { useForm } from "@/src/shared/hooks/useForm";

export default function RegisterScreen() {
  const register = useAuthStore((state) => state.register);

  const { handlerChangeText, getFormValues } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onSignUp = async () => {
    const { name, email, password } = getFormValues();

    if (name.length < 4 || email.length < 4 || password.length < 4) {
      return Alert.alert(
        "Error",
        "Por favor, ingresa un nombre, correo electrónico y contraseña válidos.",
      );
    }

    const success = await register(name, email, password);

    if(success){
      Alert.alert(
        "Éxito",
        "Cuenta creada exitosamente. Ahora puedes iniciar sesión.",
      );
    } else {
      Alert.alert(
        "Error",
        "No se pudo crear la cuenta. Por favor, intenta de nuevo.",
      );
    }
  };

  return (
    <AuthLayout subtitle="Life is better when you plan it!">
      <ScrollView showsVerticalScrollIndicator={false}>
        <BrutalHeader
          title="Crear Cuenta"
          withHeaderBlock={true}
          containerClassName="mb-10"
        />

        <BrutalInput
          label="NOMBRE COMPLETO"
          placeholder="ej. John Planner"
          icon="person-outline"
          onChangeText={(value) => handlerChangeText(value, 'name')}
        />
        <BrutalInput
          label="CORREO ELECTRÓNICO"
          placeholder="hola@organizapp.com"
          icon="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(value) => handlerChangeText(value, 'email')}
        />
        <BrutalInput
          label="CONTRASEÑA"
          placeholder="••••••••"
          secureTextEntry
          icon="lock-closed-outline"
          onChangeText={(value) => handlerChangeText(value, 'password')}
        />

        <BrutalButton
          text="Crear Cuenta →"
          variant="secondary"
          onPress={onSignUp}
        />

        <View className="items-center mt-10 mb-5">
          <Link href="/(auth)/login" className="font-body underline text-brutal-text">
            ¿Ya tenés cuenta? Iniciar Sesión
          </Link>
        </View>
      </ScrollView>
    </AuthLayout>
  );
}
