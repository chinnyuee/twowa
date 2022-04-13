import React from "react";
import { StyleSheet, View, Image } from "react-native";

export default function Onboarding() {
    return (
        <View>
            <Image
                style={{ width: 328, height: 304 }}
                source={require("../assets/onboardingImages/welcomeScreen.png")}
            />
        </View>
    )
}