import { View, StyleSheet, StatusBar } from 'react-native'
import React, { useRef } from 'react'
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_ENUM } from "../utilities/ENUMS"
export default function Splash({ navigation }) {

    const checkLoginStatus = async () => {
        try {
            const mobile = await AsyncStorage.getItem(STORAGE_ENUM.MOBILE);
            if (mobile)
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'home' }],
                });
            else
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'onboarding' }],
                });
        } catch (e) {
            console.log(e)
        }
    }
    const lottieRef = useRef()
    return (
        <View style={styles.container}>
            <StatusBar barStyle='dark-content' />
            <LottieView
                ref={lottieRef}
                source={require('../assets/img/splash-animation.json')}
                style={styles.img}
                speed={5}
                autoPlay
                resizeMode='cover'
                loop={false}
                onAnimationFinish={checkLoginStatus}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0D1724"
    },
    img: {
        width: '100%',
        height: '100%',
        marginTop: 'auto',
        backgroundColor: "#B1C4DD",
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1
    }
})