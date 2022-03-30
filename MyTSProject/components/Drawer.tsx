import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";

function Drawer() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ drawerLabel: "Home" }}
      />
    </Drawer.Navigator>
  );
}

export default Drawer;
