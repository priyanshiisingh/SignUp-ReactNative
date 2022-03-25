import React from "react";
import { StyleSheet, Button, View, TextInput, Text, Alert } from "react-native";

const SignUp = () => {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputTop}
        setText={setName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        setText={setEmail}
        value={email}
        placeholder="Email"
      />
      <TextInput
        style={styles.inputBottom}
        secureTextEntry={true}
        setText={setPassword}
        value={password}
        placeholder="Password"
      />
      <Button
        style={styles.button}
        title="Sign Up"
        onPress={() => Alert.alert("Button Pressed")}
      />
      <Text style={styles.loginText}>
        Already Registered? Click here to login
      </Text>
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
  input: {
    backgroundColor: "white",
    height: 40,
    borderWidth: 3,
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
  button: {
    width: "100%",
  },
  loginText: {
    color: "white",
    marginTop: 25,
    textAlign: "center",
  },
});

export default SignUp;
