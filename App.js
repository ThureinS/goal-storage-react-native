import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Text style={styles.dummyText}>Hello World!</Text>
      <Button title="click me" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  dummyText: {
    borderWidth: 2,
    borderColor: "teal",
    margin: 16,
    padding: 16,
  },
});
