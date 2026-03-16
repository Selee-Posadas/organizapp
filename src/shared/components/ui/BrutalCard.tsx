import { View } from "react-native";
import { cn } from "../../lib/utils";

export const BrutalCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <View
    className={cn(
      "bg-surface border-3 border-brutal-border rounded-brutal p-8 shadow-[6px_6px_0px_0px_#000000]",
      className,
    )}
  >
    {children}
  </View>
);
