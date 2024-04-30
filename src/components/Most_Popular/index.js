import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const MostPopular = () => {
  // Dummy data for products
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: "$10",
      cutPrice: "$25",
      image: require("../../../assets/Banking.png"),
    },
    {
      id: 2,
      name: "Product 2",
      price: "$20",
      cutPrice: "$25",
      image: require("../../../assets/a.png"),
    },
    {
      id: 3,
      name: "Product 3",
      price: "$15",
      cutPrice: "$25",
      image: require("../../../assets/a.png"),
    },
    {
      id: 4,
      name: "Product 4",
      price: "$10",
      cutPrice: "$25",
      image: require("../../../assets/Banking.png"),
    },
  ];

  const renderProductItem = ({ item, index }) => (
    <TouchableOpacity
      style={[
        styles.productItem,
        index === products.length - 1 && styles.lastItemPadding,
      ]}
    >
      <View style={styles.productContainer}>
        <Image source={item.image} style={styles.productImage} />
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.productPrice}>{item.price}</Text>
          {item.cutPrice && (
            <Text style={styles.cutPrice}>{item.cutPrice}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  productItem: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  productContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  productImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bff",
    marginRight: 5,
  },
  cutPrice: {
    fontSize: 14,
    textDecorationLine: "line-through",
    color: "#999",
  },
  addButton: {
    backgroundColor: "#007bff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  addButtonLabel: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  lastItemPadding: {
    marginBottom: 90,
  },
});

export default MostPopular;
