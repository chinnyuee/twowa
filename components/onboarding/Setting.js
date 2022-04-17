import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Setting({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ width: "90%", flex: 1, position: 'relative' }}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                    <TouchableOpacity
                        style={{ position: "absolute", left: 0 }}
                        onPress={() => navigation.push("Subscription")}
                    >
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </TouchableOpacity>

                    <Text style={styles.title}>Settings</Text>
                </View>
                <View style={{ marginTop: 16 }}>
                    <TouchableOpacity style={styles.settingOptions}>
                        <Image
                            source={require("../../assets/onboardingImages/manageSub.png")}
                            style={{ marginLeft: 24, marginRight: 16 }}
                        />
                        <Text style={styles.text}>Manage Sub</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOptions}>
                        <Image
                            source={require("../../assets/onboardingImages/endSession.png")}
                            style={{ marginLeft: 24, marginRight: 16 }}
                        />
                        <Text style={styles.text}>End Session</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOptions}>
                        <Image
                            source={require("../../assets/onboardingImages/contactSupport.png")}
                            style={{ marginLeft: 24, marginRight: 16 }}
                        />
                        <Text style={styles.text}>Contact Support</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.settingOptions}>
                        <Image
                            source={require("../../assets/onboardingImages/privacyPolicy.png")}
                            style={{ marginLeft: 24, marginRight: 16 }}
                        />
                        <Text style={styles.text}>Privacy Policy & TOU</Text>

                    </TouchableOpacity>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 16,
        backgroundColor: "#F4F2F2",
        alignItems: "center"
    },
    settingOptions: {
        height: 76,
        backgroundColor: 'white',
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 8,
        borderRadius: 16
    },
    text: {
        fontFamily: "Nunito-Regular",
        color: "#898887",
        fontSize: 16,
    },
    title: {
        fontFamily: "Nunito-ExtraBold",
        color: "#263238",
        fontSize: 20,
    }
})