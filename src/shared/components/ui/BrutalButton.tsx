import { Pressable, Text, View } from "react-native";
import { cn } from "../../lib/utils";

interface Props {
  onPress: () => void;
  text: string;
  variant?: "primary" | "secondary" | "tertiary" | "danger";
  isLoading?: boolean;
  className?: string;
}

export const BrutalButton = ({
  onPress,
  text,
  variant = "primary",
  isLoading,
  className,
}: Props) => {
  const variantStyles = {
    primary: "bg-accent-primary",
    secondary: "bg-accent-secondary",
    tertiary: "bg-accent-tertiary",
    danger: "bg-accent-danger",
  };

  return (
    <Pressable
      onPress={onPress}
      disabled={isLoading}
      className={cn("active:translate-y-1 active:translate-x-1", className)}
    >
      {({ pressed }) => (
        <View
          className={cn(
            variantStyles[variant],
            "border-3 border-brutal-border p-4 rounded-brutal",
            pressed ? "shadow-none" : "shadow-[4px_4px_0px_0px_#000000]",
          )}
        >
          <Text className="text-center font-heading text-brutal-text text-lg uppercase tracking-wider">
            {isLoading ? "Loading..." : text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};
