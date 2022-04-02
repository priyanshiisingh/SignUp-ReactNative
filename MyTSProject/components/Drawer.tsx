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
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import ExplorePosts from "./Posts/ExplorePosts";
import AddPosts from "./Posts/AddPosts";
import AllPosts from "./Posts/AllPosts";
import Article from "./Pages/Article";

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
            auth.signOut().then(() => Alert.alert("User logged out!"));
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
        name="Explore"
        component={ExplorePosts}
        options={{
          drawerLabel: "Explore",
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
        name="All Posts"
        component={AllPosts}
        options={{
          drawerLabel: "All Posts",
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
        name="Add Posts"
        component={AddPosts}
        options={{
          drawerLabel: "Add Posts",
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
