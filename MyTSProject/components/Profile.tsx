import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { auth } from "../database/Firestore";
import Footer from "./Footer";

function Profile({ navigation }) {
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const Lname = user.displayName;
    const Lemail = user.email;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const Luid = user.uid;

    const image = {
      uri: "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg",
    };
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <Image source={image} style={styles.image} />
          <View style={styles.lineStyle} />
          <Text style={styles.header}>{Lname}</Text>
          <View style={{ marginTop: 10 }}>
            <Text style={styles.text}>
              <Text style={styles.subHeader}>Email:{"\n"}</Text>
              {Lemail}
            </Text>
            <Text style={styles.text}>
              <Text style={styles.subHeader}>User ID: </Text>
              {Luid}
            </Text>
          </View>
        </View>
      </View>
    );
  } else {
    console.log("Invalid entry.");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    width: "80%",
    height: 500,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    paddingBottom: 20,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 100,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 10,
  },
  subHeader: {
    color: "#222",
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 20,
  },
  text: {
    textAlign: "left",
    color: "black",
    marginBottom: 10,
    maxWidth: "80%",
    lineHeight: 25,
  },
  lineStyle: {
    borderWidth: 0.2,
    borderColor: "black",
    marginTop: 30,
    width: "100%",
  },
});

export default Profile;
