import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    height: 300,
    width: "100%",
  },
  text: {
    color: "white",
  },
});

export default Footer;
