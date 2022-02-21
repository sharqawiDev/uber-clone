import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import MapView from 'react-native-maps';

export default function Home() {
    return (
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: "100%",
        height: "100%",
    },
});