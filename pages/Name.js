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
import { useDispatch } from 'react-redux'
import { setName as setNameRedux, setEmail as setEmailRedux } from '../redux/user';
import { showLoader } from '../redux/utility';


export default function Name({ navigation }) {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [showNameError, setShowNameError] = useState(false)
    const [showEmailError, setShowEmailError] = useState(false)
    let nameReg = /^[a-zA-Z]{2,40}$/;
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const validName = nameReg.test(name)
    const validEmail = emailReg.test(email)
    const validInput = validName && validEmail

    const dispatch = useDispatch()

    const goHome = () => {
        dispatch(setNameRedux(name))
        dispatch(setEmailRedux(email))
        dispatch(showLoader(true))
        setTimeout(() => {
            dispatch(showLoader(false))
            navigation.reset({
                index: 0,
                routes: [{ name: 'home' }],
            });
        }, 1500);
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>Enter your name {'&'} email</Text>
                <View style={styles.inputContainer} on>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            keyboardType={'ascii-capable'}
                            value={name}
                            onChangeText={(text) => {
                                setShowNameError(true)
                                setName(text)
                            }}
                            placeholderTextColor={"rgba(255,255,255,0.3)"}
                            placeholder={'Name'}
                        />
                        {
                            showNameError &&
                            <Text style={[styles.errorMsg, { color: validName ? '#42f560' : 'red' }]}>
                                {validName ? '✓' : '✘'} At least two English characters</Text>
                        }
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            keyboardType={"email-address"}
                            autoCapitalize={"none"}

                            value={email}
                            onChangeText={(text) => {
                                setShowEmailError(true)
                                setEmail(text)
                            }}
                            placeholderTextColor={"rgba(255,255,255,0.3)"}
                            placeholder={'Email'}
                        />
                        {
                            showEmailError &&
                            <Text style={[styles.errorMsg, { color: validEmail ? '#42f560' : 'red' }]}>
                                {validEmail ? '✓' : '✘'} Valid email address</Text>
                        }
                    </View>
                </View>
                <TouchableOpacity
                    style={[styles.startBtn, { opacity: !validInput ? 0.2 : 1 }]}
                    onPress={goHome}
                    disabled={!validInput}>
                    <Text style={styles.btnText}>Finish Registration</Text>
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
        marginTop: "30%",
        padding: 10,
        justifyContent: "center"
    },
    inputRow: {
        alignItems: "center",
        width: "100%",
        marginBottom: 100
    },
    input: {
        width: "90%",
        height: 50,
        color: "white",
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#514BC3",
        // marginBottom: 100,
    },
    errorMsg: {
        width: "90%",
        marginTop: 15
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
        fontFamily: "Ubuntu-Regular",
        fontSize: 17,
    },
})