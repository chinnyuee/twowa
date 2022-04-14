import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./onboarding/WelcomeScreen";
import WhatsappWeb from "./onboarding/WhatsappWeb";
import WhatsappSetting from "./onboarding/WhatsappSetting";
import ScanQRCode from "./onboarding/ScanQRCode";
import GetStarted from "./onboarding/GetStarted";

export default function OnboardingStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome Screen" component={WelcomeScreen} />
            <Stack.Screen name="WhatsappSetting" component={WhatsappSetting} />
            <Stack.Screen name="ScanQRCode" component={ScanQRCode} />
            <Stack.Screen name="WhatsappWeb" component={WhatsappWeb} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
        </Stack.Navigator>
    )
}