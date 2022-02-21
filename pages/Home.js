import { View, Text, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

export default function Home() {

    return (
        <View style={styles.container}>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 200,
        height: 200,
    }
})