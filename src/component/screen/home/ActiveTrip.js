//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// create a component
const ActiveTrip = () => {
    const data = [
        { id: '1', from: 'Surat', to: 'Baroda', time: '2 Hr 30 min', price: '$200' },
        { id: '2', from: 'Surat', to: 'Baroda', time: '2 Hr 30 min', price: '$200' },
        { id: '3', from: 'Surat', to: 'Baroda', time: '2 Hr 30 min', price: '$200' },
        { id: '4', from: 'Surat', to: 'Baroda', time: '2 Hr 30 min', price: '$200' },
        { id: '5', from: 'Surat', to: 'Baroda', time: '2 Hr 30 min', price: '$200' },
        { id: '6', from: 'Surat', to: 'Baroda', time: '2 Hr 30 min', price: '$200' },
        { id: '7', from: 'Surat', to: 'Baroda', time: '2 Hr 30 min', price: '$200' },
    ]
    const RenderList = ({ item, index }) => (
        <View style={{ borderWidth: 1, marginVertical: 5, borderRadius: 10, padding: 10 }} key={index}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>From: {item.from}</Text>
                <Text>To: {item.to}</Text>
            </View>
            <Text>Time: {item.time}</Text>
            <Text>Price: {item.price}</Text>
        </View>
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(index) => index}
                renderItem={RenderList}
                style={{width: '100%'}}
                contentContainerStyle={{paddingBottom:30, paddingTop: 20}}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
});

//make this component available to the app
export default ActiveTrip;
