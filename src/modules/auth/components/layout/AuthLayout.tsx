import { View, Text, ScrollView } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface Props {
  children: React.ReactNode;
  subtitle: string;
}

export const AuthLayout = ({ children, subtitle }: Props) => {
  return (
    <View className="flex-1 bg-background px-8 pt-16">
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>

        <View className="items-center mb-10">
          <View className="flex-row items-center">
            <Ionicons name="sparkles" size={32} color="black" />
            <Text className="font-heading text-4xl ml-2 text-brutal-text">OrganizApp</Text>
          </View>
          <Text className="font-body italic text-brutal-text mt-1 text-center">
            {subtitle}
          </Text>
        </View>

        <View className="bg-surface border-3 border-brutal-border rounded-brutal p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-10">
          {children}
        </View>
      </ScrollView>
    </View>
  );
};