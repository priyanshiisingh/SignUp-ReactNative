import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";

import { auth, provider } from "../../database/Firestore";

//Goggle signin
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import { signInWithCredential } from "firebase/auth";

WebBrowser.maybeCompleteAuthSession();

function GoogleAuth({ navigation }) {
  //gogle signin (start)
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId:
      "144301622420-v4t51889vkrevcm9481v6hi0fnn9pvgt.apps.googleusercontent.com",
    clientId:
      "144301622420-f62n4e4km4dta3je69mapjmk2da7r1s4.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;

      const credential = provider.credential(id_token);
      signInWithCredential(auth, credential);
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
    borderRadius: 25,
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
