import React from "react";
import { StyleSheet, TextInput, View, Button, Alert } from "react-native";

const Login = () => {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputTop}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.inputBottom}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
      />
      <Button title="Login" onPress={() => Alert.alert("Button Pressed")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a7140",
    alignItems: "center",
    justifyContent: "center",
  },
  inputTop: {
    backgroundColor: "white",
    height: 40,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "white",
    width: "80%",
    padding: 10,
    marginBottom: "5%",
  },
  inputBottom: {
    backgroundColor: "white",
    height: 40,
    width: "80%",
    padding: 10,
    borderWidth: 3,
    marginBottom: "5%",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "white",
  },
});

export default Login;
