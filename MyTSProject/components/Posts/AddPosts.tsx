import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  Text,
  Alert,
  Image,
  Button,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { auth, db } from "../../database/Firestore";

import {
  collection,
  addDoc,
  doc,
  updateDoc,
  Timestamp,
} from "firebase/firestore";
import {
  getStorage,
  uploadBytes,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";

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
  const [uploadUrl, setUploadUrl] = React.useState();
  const [caption, setCaption] = React.useState();
  const [uploading, setUploading] = React.useState(false);
  const [transferred, setTransferred] = React.useState(0);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      const filename = result.uri.substring(result.uri.lastIndexOf("/") + 1);
      const storage = getStorage();
      const reference = ref(storage, filename);

      //convert image into array of bytes
      const img = await fetch(result.uri);
      const bytes = await img.blob();

      //uploading image as bytes
      const uploadTask = uploadBytesResumable(reference, bytes);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          setUploading(true);
          setTransferred(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );

          console.log("Upload is " + transferred + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploadUrl(downloadURL);
          });
        }
      );
      setImage(result.uri);
    }
  };

  console.log(image);
  console.log(uploadUrl);

  const timeObj = Timestamp.now().toDate();
  console.log(timeObj);

  const uploadPost = async () => {
    try {
      const resDoc = await addDoc(collection(db, "posts"), {
        userid: Luid,
        userName: Lname,
        userEmail: Lemail,
        caption: caption,
        image: uploadUrl,
        createdAt: timeObj,
      });

      console.log(resDoc.id);
      Alert.alert("Submit Sucessfull");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.inputFields}>
          <Button title="Pick image from camera roll" onPress={pickImage} />
          {image && (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={{ uri: image }}
                style={{ width: 250, height: 250 }}
              />
            </View>
          )}

          {uploading && (
            <Text style={styles.percentageField}>
              Upload is {transferred}% done{" "}
            </Text>
          )}

          <TextInput
            placeholder="Add Caption"
            onChangeText={(UserCaption) => setCaption(UserCaption)}
            value={caption}
            style={styles.captionField}
          />
        </View>
        <Pressable
          style={styles.button}
          onPress={() => {
            uploadPost();
          }}>
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
  percentageField: {
    justifyContent: "center",
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
