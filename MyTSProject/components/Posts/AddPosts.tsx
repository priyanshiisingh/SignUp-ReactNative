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
import ImagePicker from "react-native-image-picker/src";

const AddPosts = () => {
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

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.inputFields}>
          <Button title="Pick an image from camera roll" onPress={pickImage} />
          {image && (
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
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
};

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
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    minHeight: 300,
    width: "95%",
  },
  inputFields: {
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    width: "100%",
    marginBottom: 20,
  },
  imageField: {
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    width: "100%",
  },
  captionField: {
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    width: "100%",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
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
