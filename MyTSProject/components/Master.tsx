import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable } from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";

export default function Master({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome!</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("SignUp");
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.navigate("Login");
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a7140",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: "80%",
    backgroundColor: "black",
    marginBottom: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  text: { color: "white", textAlign: "center", fontSize: 50, marginBottom: 20 },
});
