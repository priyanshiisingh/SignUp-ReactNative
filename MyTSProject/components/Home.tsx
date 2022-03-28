import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignUp from "./SignUp";

function Home({ navigation }) {
  return (
    <View>
      <Text style={styles.text}>Home</Text>
      <Button title="Logout" onPress={() => navigation.navigate(SignUp)} />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
});

export default Home;
