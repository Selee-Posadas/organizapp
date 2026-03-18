import { Ionicons } from "@expo/vector-icons";
import { ComponentProps, useState } from "react";
import { Pressable, Text, TextInput, TextInputProps, View } from "react-native";
import { cn } from "../../lib/utils";

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  icon?: ComponentProps<typeof Ionicons>["name"];
  containerClassName?: string;
  inputClassName?: string;
}

export const BrutalInput = (props: Props) => {
  const {
    label,
    error,
    icon,
    secureTextEntry,
    containerClassName,
    inputClassName,
    ...textInputProps
  } = props;

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View className={cn("mb-5", containerClassName)}>
      {label && (
        <Text className="font-heading text-brutal-text text-lg mb-2 uppercase">
          {label}
        </Text>
      )}
      <View className="flex-row items-center bg-surface border-3 border-brutal-border rounded-brutal shadow-brutal px-4">
        {icon && (
          <Ionicons
            name={icon}
            size={20}
            color="#666"
            style={{ marginRight: 8 }}
          />
        )}

        <TextInput
          className={cn(
            "flex-1 py-4 text-brutal-text font-body text-base",
            inputClassName,
          )}
          placeholderTextColor="#999"
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...textInputProps}
        />

        {secureTextEntry && (
          <Pressable onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Ionicons
              name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
              size={22}
              color="#666"
            />
          </Pressable>
        )}
      </View>

      {error && (
        <Text className="text-accent-danger mt-2 font-heading text-sm">
          {error}
        </Text>
      )}
    </View>
  );
};
