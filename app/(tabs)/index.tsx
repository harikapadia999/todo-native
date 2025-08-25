import useTheme from "@/hook/useTheme";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Reactnative!</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Mode</Text>
      </TouchableOpacity>
    </View>
  );
}
