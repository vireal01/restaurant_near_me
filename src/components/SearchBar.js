import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View
        style={style.backgroundStyle}
        testID='Main view'>
        <EvilIcons
            style={style.iconStyle}
            name="search"
            color="black" />
        <TextInput
            style={style.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={onTermChange}
            autoCapitalize="none"
            onEndEditing={onTermSubmit}
        />
    </View>
}

const style = StyleSheet.create({
    text: {
        fontSize: 20,
        // margin: 20,
        alignSelf: 'center'
    },
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'flex-start',
    },
    iconStyle: {
        margin: 0,
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
})

export default SearchBar;