import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const RestaurantItem = ({ restaurantItem }) => {
  return <View style={styles.view}>
    <Image
      style={styles.image}
      source={{
        uri: restaurantItem.image_url
      }}
    />
    <Text style={styles.title}>{restaurantItem.name}</Text>
    <Text style={styles.additionalText}>{restaurantItem.rating} Stars, {restaurantItem.review_count} Reviews</Text>
  </View>
}

const styles = StyleSheet.create({
  image: {
    height: 130,
    width: 200,
    borderRadius: 4,
    marginVertical: 5
  },
  view: {
    width: 200,
    marginLeft: 15
  },
  restaurants: {
    fontSize: 12
  },
  title: {
    fontWeight: "bold",
    fontSize: 16
  },
  additionalText: {
    fontSize: 12,
    color: 'gray'
  }
})

export default RestaurantItem;
