import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { auth } from "../../database/Firestore";
import Footer from "../Footer";

//firebase
import {
  collection,
  onSnapshot,
  getDocs,
  query,
  doc,
  where,
  ref,
  orderBy,
} from "firebase/firestore";
import {
  getStorage,
  uploadBytes,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import { db } from "../../database/Firestore";

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

    const [postings, setPostings] = useState([]);

    useEffect(() => {
      const response = query(
        collection(db, "posts"),
        where("userid", "==", Luid)
      );

      const unsubscribe = onSnapshot(response, (snapshot) => {
        setPostings(
          snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }))
        );
      });
      return () => unsubscribe();
    }, []);

    const image = {
      uri: "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg",
    };
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <View>
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
          {postings &&
            postings.map((post, i) => {
              return (
                <View style={styles.subContainer} key={i}>
                  <View style={styles.user}>
                    <Text>{post.userName}</Text>
                  </View>
                  <View style={styles.caption}>
                    <Text>{post.caption}</Text>
                  </View>
                  <View style={styles.body}>
                    <Image
                      source={{ uri: post.image }}
                      style={{ width: 250, height: 250 }}
                      resizeMode="cover"
                    />
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    );
  } else {
    console.log("Invalid entry.");
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 8,
    width: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    paddingBottom: 20,
    marginBottom: 30,
    marginTop: 30,
  },

  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
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

  subContainer: {
    padding: 5,
    maxHeight: 500,
    width: "95%",
    marginBottom: 30,
    borderColor: "grey",
    borderWidth: 2,
    borderStyle: "solid",
  },
  user: {
    justifyContent: "center",
    padding: 5,
  },
  caption: {
    justifyContent: "center",
    padding: 5,
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
});

export default Profile;
