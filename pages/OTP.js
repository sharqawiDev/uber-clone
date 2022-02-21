import React, { useState, useRef, useEffect } from 'react'
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
import Toast from 'react-native-toast-message';
import ShakeText from "react-native-shake-text";
import { useSelector } from 'react-redux'

export default function OTP({ navigation }) {
    const [OTP, setOTP] = useState(["", "", "", ""]);
    const [countDown, setCountDown] = useState("");
    const [showOTPError, setShowOTPError] = useState(false)
    const [correctOTP, setCorrectOTP] = useState(["", "", "", ""].map(i => i = Math.floor((Math.random() * 9))).join(""))
    const num0Ref = useRef();
    const num1Ref = useRef();
    const num2Ref = useRef();
    const num3Ref = useRef();
    const mobile = useSelector((state) => state.user.mobileNumber)
    let shakeTextRef = useRef();

    const validateOTP = () => {
        if (OTP.join("") !== correctOTP) {
            setShowOTPError(true)
            setTimeout(() => {
                shakeTextRef?.current.startShakeAnimation?.()
            }, 0);
        } else {
            setShowOTPError(false);
            navigation.navigate("name")
        }
    }

    const clearOTP = () => {
        setOTP(["", "", "", ""])
        timer(60)
    }

    const isValidOTP = () => {
        return OTP.join("").length === 4
    }

    let timerOn = true;
    const timer = (remaining) => {
        var m = Math.floor(remaining / 60);
        var s = remaining % 60;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;
        setCountDown(`${m}:${s}`)
        remaining -= 1;

        if (remaining >= 0 && timerOn) {
            setTimeout(function () {
                timer(remaining);
            }, 1000);
            return;
        }
        if (!timerOn)
            return;
    }

    const showToast = () => {
        Toast.show({
            type: 'error',
            text1: `OTP: ${correctOTP}`,
        });
    }

    useEffect(() => {
        showToast();
        timer(60);
        num0Ref.current.focus()
        return () => {
            // for clearing all timers
            var id = window.setTimeout(function () { }, 0);
            while (id--) {
                window.clearTimeout(id); // will do nothing if no timeout with id is present
            }
            Toast.hide()
        }
    }, []);
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView style={styles.container}>
                <Text style={styles.title}>A code has been sent to {'\n'}{mobile}</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputShort}
                        keyboardType={"phone-pad"}
                        onChangeText={(num) => {
                            let otp = [...OTP]
                            if (num !== '') {
                                otp[0] = num
                                setOTP(otp)
                                num1Ref.current.focus()
                            } else {
                                otp[0] = ""
                                setOTP(otp)
                            }
                        }}
                        maxLength={1}
                        ref={num0Ref}
                        value={OTP[0]}
                    />
                    <TextInput
                        style={styles.inputShort}
                        keyboardType={"phone-pad"}
                        onChangeText={(num) => {
                            let otp = [...OTP]
                            if (num !== '') {
                                otp[1] = num
                                setOTP(otp)
                                num2Ref.current.focus()
                            } else {
                                otp[1] = ""
                                setOTP(otp)
                                num0Ref.current.focus()
                            }
                        }}
                        maxLength={1}
                        ref={num1Ref}
                        value={OTP[1]}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace')
                                num0Ref.current.focus();
                        }}
                    />
                    <TextInput
                        style={styles.inputShort}
                        keyboardType={"phone-pad"}
                        onChangeText={(num) => {
                            let otp = [...OTP]
                            if (num !== '') {
                                otp[2] = num
                                setOTP(otp)
                                num3Ref.current.focus()
                            } else {
                                otp[2] = ""
                                setOTP(otp)
                                num1Ref.current.focus()
                            }
                        }}
                        maxLength={1}
                        ref={num2Ref}
                        value={OTP[2]}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace')
                                num1Ref.current.focus();
                        }}
                    />
                    <TextInput
                        style={styles.inputShort}
                        keyboardType={"phone-pad"}
                        onChangeText={(num) => {
                            let otp = [...OTP]
                            if (num !== '') {
                                otp[3] = num
                                setOTP(otp)
                                Keyboard.dismiss()
                            } else {
                                otp[3] = ""
                                setOTP(otp)
                                num2Ref.current.focus()
                            }
                        }}
                        maxLength={1}
                        ref={num3Ref}
                        value={OTP[3]}
                        onKeyPress={({ nativeEvent }) => {
                            if (nativeEvent.key === 'Backspace')
                                num2Ref.current.focus();
                        }}
                    />
                    {
                        showOTPError &&
                        <ShakeText
                            style={styles.invalidOTP}
                            ref={shakeTextRef}
                            animationValue={20}
                        >Invalid OTP</ShakeText>
                    }
                    <Text style={styles.countDown}>{countDown}</Text>
                    {
                        countDown === "00:00" &&
                        <TouchableOpacity style={styles.sendAnother} onPress={clearOTP}>
                            <Text style={styles.sendAnotherText}>Send another code</Text>
                        </TouchableOpacity>
                    }
                </View>
                <TouchableOpacity
                    style={[styles.startBtn, { opacity: isValidOTP() ? 1 : 0.2 }]}
                    disabled={!isValidOTP()}
                    onPress={validateOTP}
                >
                    <Text style={styles.btnText}>Next</Text>
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
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "center",
        width: "100%",
        height: 100,
        marginTop: "20%",
    },
    inputShort: {
        width: 51,
        height: 73,
        borderRadius: 15,
        textAlign: "center",
        color: "white",
        fontSize: 22,
        backgroundColor: "#4b5680",
        marginHorizontal: 10,
    },
    invalidOTP: {
        width: "100%",
        color: "red",
        textAlign: "center",
        marginTop: 20
    },
    countDown: {
        width: "100%",
        color: "white",
        textAlign: "center",
        marginTop: 50,
        fontSize: 17,
        fontFamily: "Ubuntu-Regular",
    },
    sendAnotherText: {
        color: "#514BC3",
        fontFamily: "Ubuntu-Regular",
        fontSize: 16
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