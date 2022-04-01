import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Login from "./components/AuthComps/Login";
import SignUp from "./components/AuthComps/SignUp";
import Drawer from "./components/Drawer";
import Master from "./components/AuthComps/Master";

function Body() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Master"
        component={Master}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Drawer"
        component={Drawer}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Body />
    </NavigationContainer>
  );
}
