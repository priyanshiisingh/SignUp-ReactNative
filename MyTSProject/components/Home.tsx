import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { auth } from "../database/Firestore";
import Login from "./Login";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Home({ navigation }) {
  const user = auth.currentUser;

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const Lname = user.displayName;
    const Lemail = user.email;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const Luid = user.uid;
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Home!</Text>
        <Text style={styles.text}>User Name : {Lname}</Text>
        <Text style={styles.text}>User Email : {Lemail}</Text>
        <Text style={styles.text}>User ID : {Luid}</Text>

        <Button
          title="Logout"
          onPress={() => {
            auth.signOut();
            AsyncStorage.clear();
            navigation.goBack();
          }}
        />
      </View>
    );
  } else {
    console.log("Invalid entry.");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a7140",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    marginBottom: "5%",
  },
  drawer: {
    borderColor: "black",
    borderWidth: 3,
  },
});

export default Home;
