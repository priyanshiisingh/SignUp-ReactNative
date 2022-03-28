import React from "react";
import { StyleSheet, TextInput, View, Button, Alert, Text } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/Firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function Login({ navigation }) {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [loading, setLoading] = React.useState(false);

  const loginUser = () => {
    if (email === "" && password === "") {
      Alert.alert("Please input credentials");
    } else {
      setLoading(true);
      try {
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            Alert.alert("User Logged In!");
            navigation.navigate("Home");
          })
          .catch((err) => {
            Alert.alert(err.message);
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
        onChangeText={(UserEmail) => setEmail(UserEmail)}
        value={email}
        keyboardType="email-address"
        placeholder="Email"
      />
      <TextInput
        style={styles.inputBottom}
        onChangeText={(UserPassword) => setPassword(UserPassword)}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button
        title="Login"
        onPress={() => {
          loginUser();
        }}
      />
      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate("SignUp")}>
        Don't have an account yet? Click here to SignUp!
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
  loginText: {
    color: "white",
    marginTop: 25,
    textAlign: "center",
  },
});

export default Login;
