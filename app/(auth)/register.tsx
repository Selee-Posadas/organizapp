import { Link } from "expo-router";
import { View, ScrollView } from "react-native";

import { AuthLayout } from "../../src/modules/auth/components/layout/AuthLayout";
import { BrutalInput } from "@/src/shared/components/ui/BrutalInput";
import { BrutalButton } from "@/src/shared/components/ui/BrutalButton";
import { BrutalHeader } from "@/src/shared/components/ui/BrutalHeader";

export default function RegisterScreen() {
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
        />
        <BrutalInput
          label="CORREO ELECTRÓNICO"
          placeholder="hello@email.com"
          icon="mail-outline"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <BrutalInput
          label="CONTRASEÑA"
          placeholder="••••••••"
          secureTextEntry
          icon="lock-closed-outline"
        />

        <BrutalButton
          text="Crear Cuenta →"
          variant="secondary"
          onPress={() => {}}
        />

        <View className="items-center mt-10 mb-5">
          <Link href="/login" className="font-body underline text-brutal-text">
            ¿Ya tenés cuenta? Iniciar Sesión
          </Link>
        </View>
      </ScrollView>
    </AuthLayout>
  );
}
