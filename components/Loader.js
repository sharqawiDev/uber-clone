import { View, StyleSheet } from 'react-native'
import React, { useEffect, useRef } from 'react'
import LottieView from 'lottie-react-native';

export default function Loader() {
    const lottieRef = useRef()

    useEffect(() => {
        lottieRef.current.reset()
        lottieRef.current.play()
    }, [])
    return (
        <View style={styles.container}>
            <LottieView source={require('../assets/img/lottie-car.json')} loop style={styles.img} ref={lottieRef} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: 100,
        position: "absolute",
        width: "100%",
        height: "100%"
    },
    img: {
        width: 200,
        height: 200,
    }
})