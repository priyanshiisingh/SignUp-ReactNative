import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../database/Firestore";
import Home from "./Home";
import Profile from "./Profile";
import Posts from "./Posts";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Drawer({ navigation }) {
  const Drawer = createDrawerNavigator();

  function onExit() {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return null;
          },
        },
        {
          text: "Confirm",
          onPress: () => {
            auth.signOut();
            AsyncStorage.clear();
            navigation.goBack();
          },
        },
      ],
      { cancelable: false }
    );
  }

  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerLabel: "Home",
          headerStyle: {
            backgroundColor: "transparent", //Set Header color
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 30 }}
              onPress={() => {
                onExit();
              }}>
              <Text>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Posts"
        component={Posts}
        options={{
          drawerLabel: "Posts",
          headerStyle: {
            backgroundColor: "transparent", //Set Header color
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 30 }}
              onPress={() => {
                onExit();
              }}>
              <Text>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerLabel: "Profile",
          headerStyle: {
            backgroundColor: "transparent", //Set Header color
          },
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 30 }}
              onPress={() => {
                onExit();
              }}>
              <Text>Logout</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default Drawer;
