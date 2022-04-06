import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";
import {
  collection,
  onSnapshot,
  getDocs,
  query,
  doc,
  orderBy,
} from "firebase/firestore";
import { db } from "../../database/Firestore";
import Footer from "../Footer";

const AllPosts = () => {
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    const response = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc")
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

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {postings &&
          postings.map((post, i) => {
            return (
              <View style={styles.subContainer} key={i}>
                <View style={styles.user}>
                  <Text
                    style={{
                      fontSize: 25,
                      fontWeight: "bold",
                    }}>
                    {post.userName}
                  </Text>
                </View>
                <View style={styles.caption}>
                  <Text style={{ fontSize: 18 }}>{post.caption}</Text>
                </View>
                <View style={styles.body}>
                  <Image
                    source={{ uri: post.image }}
                    style={{ width: "100%", height: 250 }}
                    resizeMode="contain"
                  />
                </View>
              </View>
            );
          })}
      </View>
      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 30,
  },
  subContainer: {
    padding: 5,
    maxHeight: 500,
    width: "95%",
    marginBottom: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    backgroundColor: "white",
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

export default AllPosts;
