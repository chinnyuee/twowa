import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from "./onboarding/WelcomeScreen";
import WhatsappWeb from "./onboarding/WhatsappWeb";

export default function OnboardingStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Welcome Screen"
                component={WelcomeScreen}
                options={{ title: 'Welcome' }}

            />
            <Stack.Screen name="WhatsappWeb" component={WhatsappWeb} />
        </Stack.Navigator>
    )
}