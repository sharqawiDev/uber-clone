import { View, StyleSheet, ActivityIndicator, Text, Dimensions } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';


export default function Home() {
    const [permissionStatus, setPermissionStatus] = useState(null);
    const [location, setLocation] = useState(null);
    const mapRef = useRef()
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            setPermissionStatus(status);
            if (status !== 'granted') {
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            mapRef.current.animateToRegion({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            })

        })();
    }, []);
    return (
        <View style={styles.container}>
            {permissionStatus === null ?
                <ActivityIndicator size="large" /> :
                (permissionStatus === 'granted' ?
                    <MapView
                        style={styles.map}
                        initialRegion={{
                            latitude: 24.7136,
                            longitude: 46.6753,
                            latitudeDelta: 0.04,
                            longitudeDelta: 0.05,
                        }}
                        ref={mapRef}
                    >
                        {
                            location &&
                            <Marker
                                coordinate={{ latitude: location.coords.latitude, longitude: location.coords.longitude }}
                            />
                        }
                    </MapView> :
                    <Text>Location permission is {permissionStatus}</Text>
                )
            }
        </View>
    )
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