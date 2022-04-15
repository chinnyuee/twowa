import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

export default function GetStarted({ navigation }) {
    return (
        <View style={styles.container} >
            <View style={{ width: "90%", flex: 1, position: "relative" }}>
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={require("../../assets/onboardingImages/GetStarted.png")}
                        style={{ marginTop: 16, marginBottom: 56, }}
                    />
                </View>

                <View >
                    <Text style={styles.heading}>You Are Done</Text>
                    <Text style={styles.body}>Congratulation, you have successfully connected your Whatsapp Client</Text>
                </View>
                <View style={styles.btnContainer}>
                    <View style={{ marginLeft: 88 }}>
                        <Entypo name="dot-single" size={35} color="#20D262" />
                    </View>

                    <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.push("Subscription")}>
                        <Text style={styles.nextText}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 16,
        backgroundColor: "#F4F2F2"
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
        backgroundColor: "#20D262",
    },
    nextText: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: "white"
    },
    btnContainer: {
        position: "absolute",
        bottom: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%"
    }
})