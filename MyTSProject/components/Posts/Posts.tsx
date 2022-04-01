import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { FlatGrid } from "react-native-super-grid";
import { Data } from "./Data";

export default function Posts() {
  const [items, setItems] = React.useState(Data);

  return (
    <FlatGrid
      itemDimension={130}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <ImageBackground
            source={item.image}
            resizeMode="cover"
            style={styles.image}>
            <Text style={styles.itemName}>{item.name}</Text>
          </ImageBackground>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 5,
    height: 200,
  },
  itemName: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
    backgroundColor: "#000000c0",
    width: "100%",
  },
});
