import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import RestaurantItem from "./RestaurantItem";

const RestaurantsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null
  }
  return <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={results}
      keyExtractor={(result) => result.id}
      renderItem={({ item }) => {
        return (<TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
          <RestaurantItem restaurantItem={item} />
        </TouchableOpacity>)
      }}
    />
  </View>
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15
  },
  container: {
    marginBottom: 10
  }
})

export default withNavigation(RestaurantsList);