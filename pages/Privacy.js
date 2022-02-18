import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function Privacy() {
    return (
        <View style={styles.webViewContainer}>
            <WebView
                source={{ uri: "https://help.uber.com/riders/article/privacy-notice-information?nodeId=e1f427a1-c1ab-4c6a-a78a-864f47877558" }}
                style={styles.webView}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    webViewContainer: {
        flex: 1,
        width: "100%",
        height: "100%"
    },
    webView: {

    }
})