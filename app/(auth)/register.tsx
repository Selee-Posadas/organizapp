
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { AuthLayout } from "../../src/modules/auth/components/layout/AuthLayout";
import { BrutalInput } from "@/src/shared/components/ui/BrutalInput";
import { BrutalButton } from "@/src/shared/components/ui/BrutalButton";

export default function RegisterScreen() {
  return (
    <AuthLayout subtitle="Join the planner community">
      <View className="items-center mb-8">
        <Text className="font-heading text-3xl text-brutal-text">
          Create Account
        </Text>
      </View>

      <BrutalInput label="FULL NAME" placeholder="e.g. Alex Planner" />
      <BrutalInput label="EMAIL ADDRESS" placeholder="hello@organizapp.com" />
      <BrutalInput label="PASSWORD" placeholder="••••••••" secureTextEntry />

      <BrutalButton
        text="Create Account →"
        variant="secondary"
        onPress={() => {}}
      />

      <View className="items-center mt-10">
        <Link href="/login" className="font-body underline text-brutal-text">
          Back to Login
        </Link>
      </View>
    </AuthLayout>
  );
}
