
import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"

export default function NoInternet() {
    return (
        <View style={{ flex: 1, position: "relative" }}>
            <Text>No internet</Text>

            <View style={{ alignItems: "center" }}>
                <Image
                    source={require("../../assets/onboardingImages/NoInternet.png")}
                />
            </View>
            <View style={styles.description}>
                <Text style={styles.NoInternet}>No Internet</Text>
                <Text style={styles.body}>There is no Internet connection.Please check and try again</Text>
            </View>
            <TouchableOpacity
                style={styles.btn}>
                <Text style={styles.tryAgain}>Try Again</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        borderWidth: 2,
        height: 56,
        borderRadius: 48,
        borderColor: "#20D262",
        alignItems: "center",
        justifyContent: "center",
        // position: 'absolute',
        // bottom: 0
    },
    description: {
        marginTop: 52
    },
    NoInternet: {
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
    tryAgain: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: "#20D262"
    }
})