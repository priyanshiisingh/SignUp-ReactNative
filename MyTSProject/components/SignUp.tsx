import React from "react";
import { StyleSheet, Button, View, TextInput, Text, Alert } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/Firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SignUp({ navigation }) {
  const [name, setName] = React.useState();
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [cpass, setCpass] = React.useState();
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
            user.displayName = name;

            Alert.alert("User Registered Successfully!");
            navigation.navigate("Login");
          })
          .catch((err) => {
            if (err.code === "auth/email-already-in-use") {
              Alert.alert("Email already in use. Please Login.");
            } else if (err.code === "auth/internal-error") {
              Alert.alert("Please check email and password.");
            } else if (err.code === "auth/missing-email") {
              Alert.alert("Please enter email.");
            } else if (err.code === "auth/invalid-email") {
              Alert.alert("Please enter valid email address.");
            } else if (err.code === "auth/weak-password") {
              Alert.alert("Password should be atleast 6 characters.");
            }
            console.log(err.message);
          });
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
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate("Login")}>
        Already Registered? Click here to login!
      </Text>
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
