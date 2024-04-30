import * as React from "react";
import { Image, Dimensions, StyleSheet } from "react-native";
import { Banner } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { ViewPropTypes } from "deprecated-react-native-prop-types";
const Banners = () => {
  const [visible, setVisible] = React.useState(true);

  // Data for your banners
  const banners = [
    {
      id: 1,
      image: require("../../../assets/Banking.png"),
    },
    {
      id: 2,
      image: require("../../../assets/a.png"),
    },
    { id: 3, image: require("../../../assets/Orange.png") },
  ];

  const renderItem = ({ item }) => {
    return (
      <Image
        source={item.image}
        style={styles.bannerImage}
        resizeMode="contain"
      />
    );
  };

  return (
    <Carousel
      data={banners}
      renderItem={renderItem}
      sliderWidth={Dimensions.get("window").width}
      itemWidth={Dimensions.get("window").width}
      autoplay
      autoplayInterval={3000}
      loop
    />
  );
};

const styles = StyleSheet.create({
  bannerImage: {
    width: "100%",
    height: 190,
    borderRadius: 20,
  },
});

export default Banners;
