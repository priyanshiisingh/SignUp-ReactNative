import React from "react";
import {
  StyleSheet,
  Button,
  Pressable,
  View,
  TextInput,
  Text,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../database/Firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function SignUp({ navigation }) {
  const image = {
    uri: "https://images.unsplash.com/photo-1615840636404-0f2412fd2732?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1606&q=80",
  };

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
        if (cpass === password) {
          createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
              const user = userCredential.user;
              await updateProfile(auth.currentUser, { displayName: name });

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
              } else if (err.code === "auth/admin-restricted-operation") {
                Alert.alert("Admin Restricted Operation.");
              }
              console.log(err.message);
            });
        } else {
          Alert.alert(
            "Confirm password and password should be same. Please try again."
          );
        }
      } catch (error) {
        Alert.alert(error);
      }
    }
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(UserPassword) => setPassword(UserPassword)}
        placeholder="Password"
        value={password}
      />
      <TextInput
        style={styles.inputBottom}
        secureTextEntry={true}
        onChangeText={(UserCPassword) => setCpass(UserCPassword)}
        placeholder="Confirm Password"
        value={cpass}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          registerUser();
        }}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </Pressable>

      <Text
        style={styles.loginText}
        onPress={() => {
          setName("");
          setEmail("");
          setPassword("");
          setCpass("");
        }}>
        Clear
      </Text>

      <Text
        style={styles.loginText}
        onPress={() => navigation.navigate("Login")}>
        Already Registered? Click here to login!
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  inputTop: {
    backgroundColor: "white",
    height: 40,
    borderWidth: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: "grey",
    width: "80%",
    padding: 10,
    marginBottom: "5%",
  },
  input: {
    backgroundColor: "white",
    height: 40,
    borderWidth: 3,
    borderColor: "grey",
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
    borderColor: "grey",
  },

  loginText: {
    color: "white",
    marginTop: 25,
    textAlign: "center",
    backgroundColor: "black",
    width: "80%",
    height: 35,
    padding: 6,
    borderRadius: 15,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 4,
    width: "80%",
    backgroundColor: "#b7094c",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default SignUp;
