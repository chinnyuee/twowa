import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function WhatsappSetting({ navigation }) {
    return (
        <View style={styles.container} >
            <View style={{ width: "90%", flex: 1, }}>
                <TouchableOpacity>
                    <Text style={styles.skip}>Skip</Text>
                </TouchableOpacity>
                <Image
                    source={require("../../assets/onboardingImages/WhatsappSetting.png")}
                    style={{ marginTop: 16, marginBottom: 56 }}
                />
                <View >
                    <Text style={styles.heading}>On Other Device,Open Whatsapp Setting</Text>
                    <Text style={styles.body}>Go to Whatsapp, click the Settings Icon and look for your QR Code. We will use the QR Scanner to connect your account</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.push("ScanQRCode")}
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