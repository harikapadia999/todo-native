import { api } from "@/convex/_generated/api";
import useTheme from "@/hook/useTheme";
import { useMutation, useQuery } from "convex/react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  const todos = useQuery(api.todos.getTodos);
  console.log(todos, "data");
  const clearAll = useMutation(api.todos.clearAllTodos);
  const addTodo = useMutation(api.todos.addTodo);
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
        <Text>Toggle Mode</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => addTodo({ text: "New Todo" })}>
        <Text>Add todos</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => clearAll()}>
        <Text>Clear all</Text>
      </TouchableOpacity>
    </View>
  );
}
