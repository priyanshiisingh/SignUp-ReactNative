import React from "react";
import { StyleSheet, TextInput, View, Button, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../database/Firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";

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
          })
          .catch((err) => {
            Alert.alert(err.message);
          });
        Alert.alert("User Logged In!");
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
        placeholder="Email"
      />
      <TextInput
        style={styles.inputBottom}
        onChangeText={setPassword}
        onChangeText={(UserPassword) => setPassword(UserPassword)}
        value={password}
        placeholder="Password"
      />
      <Button
        title="Login"
        onPress={() => {
          loginUser();
          navigation.navigate(Home);
        }}
      />
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
});

export default Login;
