import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

export default function Privacy() {
    return (
        <View style={styles.webViewContainer}>
            <WebView
                source={{ uri: "https://www.uber.com/legal/en/document/?name=privacy-notice&country=saudi-arabia&lang=ar" }}
                style={styles.webView}
                onLoadStart={() => console.log("loading")}
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