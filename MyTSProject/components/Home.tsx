import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  DrawerLayoutAndroid,
} from "react-native";
import { auth } from "../database/Firestore";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

function Home({ navigation }) {
  // const drawer = useRef(null);
  // const [drawerPosition, setDrawerPosition] = useState("left");
  // const changeDrawerPosition = () => {
  //   if (drawerPosition === "left") {
  //     setDrawerPosition("right");
  //   } else {
  //     setDrawerPosition("left");
  //   }
  // };
  // const navigationView = () => (
  //   <View style={[styles.container, styles.navigationContainer]}>
  //     <Text style={styles.paragraph}>I'm in the Drawer!</Text>
  //     <Button
  //       title="Close drawer"
  //       onPress={() => drawer.current.closeDrawer()}
  //     />
  //   </View>
  // );

  const Drawer = createDrawerNavigator();
  const user = auth.currentUser;

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const Lname = user.displayName;
    const Lemail = user.email;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const Luid = user.uid;
    return (
      <View style={styles.container}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="SignUp" component={SignUp} />
          </Drawer.Navigator>
        </NavigationContainer>
        <Text style={styles.text}>Welcome Home!</Text>

        <Text style={styles.text}>User name : {Lname}</Text>
        <Text style={styles.text}>User Email : {Lemail}</Text>
        <Text style={styles.text}>User ID : {Luid}</Text>

        <Button
          title="Logout"
          onPress={() => {
            auth.signOut();
            navigation.navigate("SignUp");
          }}
        />
      </View>
    );
  } else {
    console.log("Invalid entry.");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4a7140",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    marginBottom: "5%",
  },
});

export default Home;
