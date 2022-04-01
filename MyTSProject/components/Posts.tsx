import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { FlatGrid } from "react-native-super-grid";

export default function Posts() {
  const [items, setItems] = React.useState([
    {
      name: "TURQUOISE",
      image: {
        uri: "https://images.unsplash.com/photo-1648719862586-acc068b2de6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "EMERALD",
      image: {
        uri: "https://images.unsplash.com/photo-1648740310988-0d58d5838dd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
    {
      name: "PETER RIVER",
      image: {
        uri: "https://images.unsplash.com/photo-1648726660921-7413e1b0f93b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80",
      },
    },
    {
      name: "AMETHYST",
      image: {
        uri: "https://images.unsplash.com/photo-1648569732627-114d36c566bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    },
    {
      name: "WET ASPHALT",
      image: {
        uri: "https://images.unsplash.com/photo-1647461779695-b09d5c0c8fc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      },
    },
    {
      name: "GREEN SEA",
      image: {
        uri: "https://images.unsplash.com/photo-1648739656798-442b6682fe77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "NEPHRITIS",
      image: {
        uri: "https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "BELIZE HOLE",
      image: {
        uri: "https://images.unsplash.com/photo-1648672165506-34711bd99339?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "WISTERIA",
      image: {
        uri: "https://images.unsplash.com/photo-1648737851155-817486f53785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "MIDNIGHT BLUE",
      image: {
        uri: "https://images.unsplash.com/photo-1648716181304-2d638c956b2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "SUN FLOWER",
      image: {
        uri: "https://images.unsplash.com/photo-1508003937473-789a1839fd57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "CARROT",
      image: {
        uri: "https://images.unsplash.com/photo-1648726556724-dca8c11ae2fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "ALIZARIN",
      image: {
        uri: "https://images.unsplash.com/photo-1648724561425-54ee32aa1ffd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "CLOUDS",
      image: {
        uri: "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      },
    },
    {
      name: "CONCRETE",
      image: {
        uri: "https://images.unsplash.com/photo-1648737119422-2680a7e39089?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "ORANGE",
      image: {
        uri: "https://images.unsplash.com/photo-1648722942620-d605d088b10b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "PUMPKIN",
      image: {
        uri: "https://images.unsplash.com/photo-1648720009807-5c6b7da99c3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "POMEGRANATE",
      image: {
        uri: "https://images.unsplash.com/photo-1648735883246-eb69122d1037?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "SILVER",
      image: {
        uri: "https://images.unsplash.com/photo-1642621188724-f85258807ba4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
    {
      name: "ASBESTOS",
      image: {
        uri: "https://images.unsplash.com/photo-1648637641682-4a2d66afe400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60",
      },
    },
  ]);

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
