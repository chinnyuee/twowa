import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function WhatsappWeb({ navigation }) {
    return (
        <View style={styles.container} >
            <View style={{ width: "90%", flex: 1, }}>
                <TouchableOpacity>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
                <Image
                    source={require("../../assets/onboardingImages/WhatsappWeb.png")}
                    style={{ marginTop: 16, marginBottom: 56 }}
                />
                <View >
                    <Text style={styles.heading}>WhatsApp Web Technology</Text>
                    <Text style={styles.body}>We use existing Whatsapp Web Technology to offer this service. If you are familiar with Whatsapp Web, you will know how to use this app</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.push("WhatsappSetting")}
                    style={styles.nextBtn}>
                    <Text style={styles.nextText}>Next</Text>
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
        borderWidth: 2,
        height: 56,
        borderRadius: 48,
        borderColor: "#20D262",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 30,
        right: 0

    },
    nextText: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: "#20D262"
    }
})