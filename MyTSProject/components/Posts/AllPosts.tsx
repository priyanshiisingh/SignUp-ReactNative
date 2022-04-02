import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const CreatePosts = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.user}>
          <Text>User</Text>
        </View>
        <View style={styles.topic}>
          <Text>Article Topic</Text>
        </View>
        <View style={styles.body}>
          <Text>Article Body</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  subContainer: {
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    maxHeight: 500,
    width: "95%",
  },
  user: {
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    height: "15%",
  },
  topic: {
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    height: "15%",
  },
  body: {
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    height: "70%",
  },
});

export default CreatePosts;
