import { Text, TextInput, TextInputProps, View } from "react-native";
import { cn } from "../../lib/utils";

interface Props extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
  inputClassName?: string;
}

export const BrutalInput = ({
  label,
  error,
  containerClassName,
  inputClassName,
  ...props
}: Props) => {
  return (
    <View className={cn("mb-5", containerClassName)}>
      {label && (
        <Text className="font-heading text-brutal-text text-lg mb-2">
          {label}
        </Text>
      )}
      <View className="bg-surface border-3 border-brutal-border rounded-brutal shadow-[4px_4px_0px_0px_#000000]">
        <TextInput
          className={cn(
            "p-4 text-brutal-text font-body text-base",
            inputClassName,
          )}
          placeholderTextColor="#999"
          {...props}
        />
      </View>
      {error && (
        <Text className="text-accent-danger mt-2 font-heading text-sm">
          {error}
        </Text>
      )}
    </View>
  );
};
