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
} from "firebase/firestore";
import { db } from "../../database/Firestore";

const CreatePosts = () => {
  const [postings, setPostings] = useState([]);

  useEffect(() => {
    const response = query(collection(db, "posts"));

    const unsubscribe = onSnapshot(response, (snapshot) => {
      setPostings(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {postings &&
          postings.map((post) => {
            return (
              <View style={styles.subContainer}>
                <View style={styles.user}>
                  <Text>{post.userName}</Text>
                </View>
                <View style={styles.topic}>
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
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  subContainer: {
    padding: 5,
    maxHeight: 500,
    width: "95%",
  },
  user: {
    justifyContent: "center",

    padding: 5,
    height: "15%",
  },
  topic: {
    justifyContent: "center",

    padding: 5,
    height: "15%",
  },
  body: {
    justifyContent: "center",

    padding: 5,
    height: "70%",
  },
});

export default CreatePosts;
