import * as React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";

const Categories = () => {
  // Define your category data array
  const categories = [
    {
      id: 1,
      name: "Category 1",
      imageSource: require("../../../assets/Banking.png"),
    },
    {
      id: 2,
      name: "Category 2",
      imageSource: require("../../../assets/a.png"),
    },
    {
      id: 3,
      name: "Category 3",
      imageSource: require("../../../assets/a.png"),
    },
    {
      id: 4,
      name: "Category 4",
      imageSource: require("../../../assets/a.png"),
    },
    {
      id: 5,
      name: "Category 5",
      imageSource: require("../../../assets/a.png"),
    },
  ];

  const renderCategoryItem = ({ item }) => (
    <View style={styles.category}>
      <Image
        source={item.imageSource}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.name}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={categories}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCategoryItem}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 1,
  },
  category: {
    alignItems: "center",
    marginRight: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 40,
    marginBottom: 5,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default Categories;
