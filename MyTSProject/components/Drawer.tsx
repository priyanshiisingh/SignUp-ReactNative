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
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../database/Firestore";
import Home from "./Home";
import Master from "./Master";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Drawer({ navigation }) {
  const Drawer = createDrawerNavigator();
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
