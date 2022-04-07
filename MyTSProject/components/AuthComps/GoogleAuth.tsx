import React from "react";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";

//firebase
import { auth, provider } from "../../database/Firestore";
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithRedirect,
} from "firebase/auth";

//Goggle signin
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";

WebBrowser.maybeCompleteAuthSession();

function GoogleAuth({ navigation }) {
  // gogle signin (start)
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId:
      "144301622420-v4t51889vkrevcm9481v6hi0fnn9pvgt.apps.googleusercontent.com",
    webClientId:
      "144301622420-f62n4e4km4dta3je69mapjmk2da7r1s4.apps.googleusercontent.com",
  });
  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = GoogleAuthProvider.credential(id_token);
      console.log(credential);

      // Sign in with credential from the Google user.
      signInWithCredential(auth, credential)
        .then(() => {
          Alert.alert("User Signed In!");
          navigation.navigate("Drawer");
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The credential that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }
  }, [response]);
  // goggle signin (end)
  return (
    <View style={styles.container}>
      <Pressable
        disabled={!request}
        style={styles.googleButton}
        onPress={() => {
          promptAsync();
        }}>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 4,
    width: "80%",
    backgroundColor: "#4285F4",
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default GoogleAuth;
