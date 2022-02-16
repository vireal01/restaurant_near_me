import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import RestaurantsList from '../components/RestaurantsList';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, restaurants, messageText] = useRestaurants()

  const filterREsultsByPrice = (price) => {
    return restaurants.filter(restaurant => restaurant.price === price)
  }

  return <>
    <SearchBar
      term={term}
      onTermChange={setTerm}
      onTermSubmit={() => searchApi(term)}
    />
    <Text style={styles.title}>{messageText}</Text>
    <ScrollView>
      <RestaurantsList
        results={filterREsultsByPrice('$')}
        title="Cost Effective"
      />
      <RestaurantsList
        results={filterREsultsByPrice('$$')}
        title="Bit Pricier"
      />
      <RestaurantsList
        results={filterREsultsByPrice('$$$')}
        title="High Pricie"
      />
    </ScrollView>
  </>
}

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    marginLeft: 15,
    marginVertical: 4
  }
})

export default SearchScreen;