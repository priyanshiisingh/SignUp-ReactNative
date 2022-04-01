import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

const Article = () => {
  return (
    <View style={styles.container}>
      <Text>Article</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Article;
