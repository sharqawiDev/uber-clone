import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';

export default function Onboarding({ navigation }) {

    return (
        <View style={styles.container}>
            <StatusBar />
            <View style={styles.main}>
                <View style={styles.header}>
                    <Text style={styles.title}>
                        Uber
                    </Text>
                    <Text style={styles.sub}>
                        Get there
                    </Text>
                </View>
                <Image
                    style={styles.car}
                    source={require('../assets/img/car-onboarding.png')}
                />
            </View>
            <TouchableOpacity style={styles.startBtn} onPress={() => navigation.navigate('mobile')}>
                <Text style={styles.btnText}>Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1724',
        alignItems: 'center',
    },
    main: {
        alignItems: "center",
        backgroundColor: "#514BC3",
        width: "100%",
        height: "70%",
        borderBottomEndRadius: 50,
        borderBottomStartRadius: 50
    },
    car: {
        position: "absolute",
        top: "40%",
        left: "20%"
    },
    header: {
        marginTop: "20%",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: 'Ubuntu-Bold',
    },
    sub: {
        marginTop: 20,
        color: "white",
        fontSize: 25,
        fontFamily: 'Ubuntu-Regular',
    },
    startBtn: {
        marginTop: "auto",
        marginBottom: "10%",
        backgroundColor: "#514BC3",
        width: 315,
        height: 65,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20
    },
    btnText: {
        color: "white",
        fontFamily: "Ubuntu-Regular"
    }
});