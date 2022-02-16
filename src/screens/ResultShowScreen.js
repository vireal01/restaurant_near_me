import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = ({ navigation }) => {
    const [content, setContent] = useState(null)
    const id = navigation.getParam('id')

    const getRestaurants = async (id) => {
        const response = await yelp.get(`/${id}`);
        setContent(response.data)
    }

    useEffect(() => { getRestaurants(id) }, [])

    if (!content) {
        return null
    }

    return <>
        <View style={styles.container}>
            <Text style={styles.title}>{content.name}</Text>
            <FlatList
                data={content.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.image} source={{ uri: item }} />
                }}
            />
        </View>
    </>
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginVertical: 10
    },
    container: {
        marginBottom: 10
    },
    image: {
        height: 200,
        width: 300,
        alignSelf: "center",
        borderRadius: 10,
        margin: 5

    }
})

export default ResultShowScreen;