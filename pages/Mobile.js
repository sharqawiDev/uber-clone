import { NavigationContainer } from '@react-navigation/native'
import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native'


export default function Mobile({ navigation }) {
    const [countryCode, setCountryCode] = useState("+966")
    const [phoneNumber, setPhoneNumber] = useState("")
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>Enter your phone number</Text>
                <View style={styles.inputContainer} on>
                    <TextInput
                        style={styles.inputShort}
                        keyboardType={"phone-pad"}
                        value={countryCode}
                        onChangeText={(text) => setCountryCode(text)}
                        maxLength={4}
                    />
                    <TextInput
                        style={styles.inputLong}
                        keyboardType={"number-pad"}
                        maxLength={countryCode === "+966" ? 9 : 10}
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                    <Text style={styles.TC}>By continuing, I confirm I have
                        {'\n'}read the </Text>
                    <TouchableOpacity style={styles.privacy} onPress={() => navigation.navigate("privacy")}>
                        <Text style={{ color: "#514BC3", fontFamily: "Ubuntu-Regular", fontSize: 16 }}>Privacy Policy</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.startBtn}>
                    <Text style={styles.btnText}>Accept and Continue</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0D1724',
        alignItems: "center"
    },
    title: {
        color: "white",
        marginTop: 80,
        alignSelf: "flex-start",
        marginHorizontal: 20,
        fontSize: 17,
        fontFamily: "Ubuntu-Regular"
    },
    inputContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        height: 100,
        marginTop: "60%",
        padding: 10,
    },
    inputShort: {
        width: 50,
        height: 50,
        color: "white",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#514BC3",
        marginHorizontal: 10
    },
    inputLong: {
        width: "50%",
        height: 50,
        color: "white",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#514BC3",
    },
    TC: {
        marginTop: 20,
        width: "100%",
        color: "white",
        fontFamily: "Ubuntu-Regular",
        marginHorizontal: 10,
        lineHeight: 20,
        fontSize: 17
    },
    privacy: {
        position: "absolute",
        top: 101,
        left: 90
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
    },
})