import React from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

const Footer = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Made with ❤️ by Priyanshi{"\n"}for IWebCode.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    minHeight: 300,
    width: "100%",
  },
  text: {
    textAlign: "center",
    color: "white",
    lineHeight: 20,
  },
});

export default Footer;
