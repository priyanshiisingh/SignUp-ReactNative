import React from "react";
import { StyleSheet, Button, View, TextInput, Text, Alert } from "react-native";
import { auth } from "../database/FireStore";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [loading, setLoading] = React.useState(false);

  updateInputVal = (val, prop) => {
    const [state, setState] = React.useState();
    state[prop] = val;
    setState(state);
  };

  const registerUser = () => {
    if (email === "" && password === "") {
      Alert.alert("Please input credentials");
    } else {
      setLoading(true);

      auth.createUserWithEmailAndPassword(email, password).then((res) => {
        res.user.updateProfile({
          displayName: name,
        });
        console.log("User resgistered successfully");
      });
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputTop}
        onChangeText={(UserName) => setName(UserName)}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(UserEmail) => setEmail(UserEmail)}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.inputBottom}
        secureTextEntry={true}
        onChangeText={(UserPassword) => setPassword(UserPassword)}
        placeholder="Password"
      />
      <Button
        style={styles.button}
        title="Sign Up"
        onPress={(e) => {
          Alert.alert("User Registered");
          registerUser();
        }}
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
