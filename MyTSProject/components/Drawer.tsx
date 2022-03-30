import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../database/Firestore";
import Home from "./Home";
import Master from "./Master";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: "Home" }}
      />
      <Drawer.Screen
        name="Master"
        component={Master}
        options={{ drawerLabel: "Logout", headerShown: false }}
      />
    </Drawer.Navigator>
  );
}

export default Drawer;
