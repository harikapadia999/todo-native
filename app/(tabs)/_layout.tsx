// import useTheme from "@/hooks/useTheme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  // const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: colors.primary,
        tabBarActiveTintColor: "red",
        // tabBarInactiveTintColor: colors.textMuted,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          // backgroundColor: colors.surface,
          backgroundColor: "#1e293b",
          borderTopWidth: 1,
          // borderTopColor: colors.border,
          borderTopColor: "yellow",
          height: 90,
          paddingBottom: 30,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Todos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="flash-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
