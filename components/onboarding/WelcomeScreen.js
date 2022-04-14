import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import OnboardingComp from "./OnboardingComp";

export default function WelcomeScreen({ navigation, route }) {

    return (
        <View style={{ flex: 1 }} >
            <TouchableOpacity>
                <Text>Skip</Text>
            </TouchableOpacity>
            <Image
                source={require("../../assets/onboardingImages/welcomeScreen.png")}
            />
            <View>
                <Text>Welcome To Two WA Chat</Text>
                <Text>Two WA Chat is simple and easy to use, swipe left to find out more</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.push("WhatsappWeb")}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    )
}