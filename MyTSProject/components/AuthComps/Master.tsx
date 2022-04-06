import React from "react";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import Login from "./Login";
import SignUp from "./SignUp";

import { auth, provider } from "../../database/Firestore";

export default function Master({ navigation }) {
  const image = {
    uri: "https://images.unsplash.com/photo-1564352969906-8b7f46ba4b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  };

  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
      <Pressable
        style={styles.googleButton}
        onPress={() => {
          navigation.navigate("GoogleAuth");
        }}>
        <Text style={styles.buttonText}>SignIn with Google</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 4,
    width: "80%",
    backgroundColor: "#b7094c",
    marginBottom: 10,
  },
  googleButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 4,
    width: "80%",
    backgroundColor: "#4285F4",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 50,
    marginBottom: 20,
  },
});
