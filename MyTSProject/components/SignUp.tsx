import React from "react";
import { StyleSheet, Button, View, TextInput, Text, Alert } from "react-native";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0n2Qr2jauIk7zCUTL5QBoA7M-LHAjbfk",
  authDomain: "reactnativesignup-17007.firebaseapp.com",
  projectId: "reactnativesignup-17007",
  storageBucket: "reactnativesignup-17007.appspot.com",
  messagingSenderId: "144301622420",
  appId: "1:144301622420:web:6b9d358ef386c655146081",
  measurementId: "G-232RK0CQSY",
};

const SignUp = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const registerUser = () => {
    if (email === "" && password === "") {
      Alert.alert("Please input credentials");
    } else {
      setLoading(true);
      try {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((err) => {
            Alert.alert(err.message);
          });
        Alert.alert("User Registered!");
      } catch (error) {
        Alert.alert(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputTop}
        onChangeText={(UserName) => setName(UserName)}
        placeholder="Name"
        value={name}
      />
      <TextInput
        style={styles.input}
        onChangeText={(UserEmail) => setEmail(UserEmail)}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
      />
      <TextInput
        style={styles.inputBottom}
        secureTextEntry={true}
        onChangeText={(UserPassword) => setPassword(UserPassword)}
        placeholder="Password"
        value={password}
      />
      <Button
        style={styles.button}
        title="Sign Up"
        onPress={() => {
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
