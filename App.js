// In App.js in a new project

import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Toast from 'react-native-toast-message';
import * as Font from "expo-font"
import { useState } from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import OnboardingScreen from './pages/Onboarding';
import MobileScreen from './pages/Mobile';
import PrivacyScreen from './pages/Privacy';
import OTPScreen from "./pages/OTP"
import NameScreen from './pages/Name';
const Stack = createNativeStackNavigator();

function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  Font.loadAsync(({
    "Ubuntu-Light": require('./assets/fonts/Ubuntu-Light.ttf'),
    "Ubuntu-Regular": require('./assets/fonts/Ubuntu-Regular.ttf'),
    "Ubuntu-Medium": require('./assets/fonts/Ubuntu-Medium.ttf'),
    "Ubuntu-Bold": require('./assets/fonts/Ubuntu-Bold.ttf'),
  })).then(() => setFontLoaded(true))

  if (!fontLoaded) {
    return <View />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="mobile" component={MobileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="privacy" component={PrivacyScreen} options={{ headerTitle: "Terms and Conditions" }} />
          <Stack.Screen name="otp" component={OTPScreen} options={{ headerShown: false }} />
          <Stack.Screen name="name" component={NameScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

export default App;