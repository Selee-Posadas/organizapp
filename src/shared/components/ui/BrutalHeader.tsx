import { View, Text } from 'react-native';
import { cn } from '../../lib/utils';

type HeaderSize = 'sm' | 'md' | 'lg';

interface Props {
  title: string;
  subtitle?: string;
  size?: HeaderSize;
  containerClassName?: string;
  withHeaderBlock?: boolean; 
}

export const BrutalHeader = ({ 
  title, 
  subtitle, 
  size = 'lg', 
  containerClassName, 
  withHeaderBlock 
}: Props) => {
  const sizeStyles = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-4xl',
  };

  return (
    <View className={cn("items-center mb-6", containerClassName)}>
      <View className="relative">
        {withHeaderBlock && (
          <View className="absolute inset-x-0 bottom-1 h-4 bg-accent-mint -z-10 rounded-full" />
        )}
        <Text 
          className={cn("font-heading text-brutal-text text-center", sizeStyles[size])}
        >
          {title}
        </Text>
      </View>
      {subtitle && (
        <Text className="text-brutal-text font-body text-base mt-1 text-center italic">
          {subtitle}
        </Text>
      )}
    </View>
  );
};