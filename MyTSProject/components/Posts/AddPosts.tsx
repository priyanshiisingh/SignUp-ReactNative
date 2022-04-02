import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Text,
  Image,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { auth } from "../../database/Firestore";

function AddPosts({ navigation }) {
  const user = auth.currentUser;

  // The user object has basic properties such as display name, email, etc.
  const Lname = user.displayName;
  const Lemail = user.email;

  // The user's ID, unique to the Firebase project. Do NOT use
  // this value to authenticate with your backend server, if
  // you have one. Use User.getToken() instead.
  const Luid = user.uid;

  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const [caption, setCaption] = React.useState();
  const [post, setPost] = React.useState();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.inputFields}>
          <Button
            title="Pick any image/video from camera roll"
            onPress={pickImage}
          />
          {image && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{ uri: image }}
                style={{ width: 250, height: 250 }}
              />
            </View>
          )}

          <TextInput
            placeholder="Add Caption"
            onChangeText={(UserCaption) => setCaption(UserCaption)}
            value={caption}
            style={styles.captionField}
          />
        </View>
        <Pressable style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>POST</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    alignItems: "center",
    width: "100%",
  },
  subContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    minHeight: 300,
    width: "95%",
  },
  inputFields: {
    justifyContent: "center",
    padding: 5,
    width: "100%",
    marginBottom: 20,
  },
  captionField: {
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "grey",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 20,
    padding: 5,
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 4,
    width: "80%",
    backgroundColor: "#b7094c",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
});

export default AddPosts;
