import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function GetStarted({ navigation }) {
    return (
        <View style={styles.container} >
            <View style={{ width: "90%", flex: 1, }}>
                <Image
                    source={require("../../assets/onboardingImages/GetStarted.png")}
                    style={{ marginTop: 16, marginBottom: 56 }}
                />
                <View >
                    <Text style={styles.heading}>You Are Done</Text>
                    <Text style={styles.body}>Congratulation, you have successfully connected your Whatsapp Client</Text>
                </View>
                <TouchableOpacity
                    style={styles.nextBtn}>
                    <Text style={styles.nextText}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 16,
        position: "relative"
    },
    skip: {
        fontFamily: "Nunito-Regular",
        color: "#898887",
        fontSize: 16,
        textAlign: "right"
    },
    heading: {
        fontFamily: "Nunito-ExtraBold",
        color: "#263238",
        fontSize: 24,
        marginBottom: 12,
        textAlign: "center"
    },
    body: {
        fontFamily: "Nunito-Regular",
        color: "#263238",
        fontSize: 16,
        textAlign: "center"
    },
    nextBtn: {
        width: 164,
        height: 56,
        borderRadius: 48,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        right: 0,
        backgroundColor: "#20D262",

    },
    nextText: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: "white"
    }
})