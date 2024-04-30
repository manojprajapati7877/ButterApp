import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Search from "../components/Searchbar";
import Banners from "../components/Banner";
import Categories from "../components/Categories";
import MostPopular from "../components/Most_Popular";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.stickyHeader}>
        <View style={styles.header}>
          <Ionicons
            name="reorder-three-sharp"
            size={33}
            style={styles.icon}
            color="black"
          />
          <Text style={styles.title}>Butter&Dough</Text>
          <MaterialIcons
            name="account-circle"
            size={24}
            color="#333"
            style={styles.icon}
          />
        </View>
      </View>
      <View style={styles.content}>
        <Search />
      </View>
      <View style={styles.content}>
        <Banners />
      </View>
      <View style={styles.categories}>
        <Text style={styles.name_cate}>Categories</Text>
        <Categories />
      </View>
      <View style={styles.categories}>
        <Text style={styles.name_cate}>Most Popular</Text>
        <MostPopular />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  stickyHeader: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    backgroundColor: "white", // Background color added for better visibility
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  icon: {
    marginHorizontal: 8,
  },
  content: {
    paddingTop: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  categories: {
    paddingTop: 20,
  },
  name_cate: {
    fontSize: 20,
    color: "green",
    paddingBottom: 20,
  },
});

export default HomeScreen;
