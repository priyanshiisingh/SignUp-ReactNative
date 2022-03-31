import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Alert,
} from "react-native";
import { auth } from "../database/Firestore";
import Login from "./Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TrendingCards from "./Carousel/TrendingCards";
import MovieCards from "./Carousel/MovieCards";
import MusicCards from "./Carousel/MusicCards";
import FoodCards from "./Carousel/FoodCards";

import Footer from "./Footer";

function Home({ navigation }) {
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
      <ScrollView style={styles.scrollView}>
        <View style={styles.view}>
          <Text style={styles.helloText}>Hello {Lname}!</Text>
          <Text style={styles.trendText}>Trending</Text>
          <TrendingCards />
          <Text style={styles.trendText}>Movies for you</Text>
          <MovieCards />
          <Text style={styles.trendText}>Music for you</Text>
          <MusicCards />
          <Text style={styles.trendText}>Food for you</Text>
          <FoodCards />
        </View>
        <Footer />
      </ScrollView>
    );
  } else {
    console.log("Invalid entry.");
  }
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  view: {
    paddingRight: 30,
    paddingLeft: 30,
    paddingBottom: 30,
  },
  text: {
    color: "black",
    marginTop: "5%",
  },
  helloText: {
    color: "black",
    marginBottom: "5%",
    fontWeight: "bold",
    fontSize: 37,
  },
  trendText: {
    color: "black",
    marginTop: "5%",
    marginBottom: "5%",
    fontSize: 25,
  },
});

export default Home;
