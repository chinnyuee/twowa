import React from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import Pricing from "./Pricing";


export default function Subscription() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={{ width: "90%", flex: 1, position: 'relative' }}>
                    <View style={{ marginTop: 12, }}>
                        <Text style={styles.title}>Two WA Chat</Text>
                        <View style={{ position: "absolute", top: 0, right: 0 }}>
                            <AntDesign name="setting" size={24} color="black" />
                        </View>
                    </View>

                    <View style={{ alignItems: "center" }}>
                        <Image
                            source={require("../../assets/onboardingImages/Subscription.png")}
                            style={{ marginTop: 16, marginBottom: 24 }}
                        />
                    </View>
                    <View>
                        <Text style={styles.heading}>Get Full Access Your Second WA Client</Text>
                        <Text style={styles.body}>Subscriptions may be managed by the user and renewals may be turned off from your Apple ID subscriptions settings</Text>
                    </View>

                    <View style={styles.pricing}>
                        <Pricing
                            duration="1 month"
                            price="9.99"
                            text="Free trial 3 days"
                        />
                        <Pricing
                            duration="1 year"
                            price="84.99"
                            text="Save around 30%"
                        />
                    </View>
                    <TouchableOpacity style={styles.continue}>
                        <Text style={styles.continueText}>Continue</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.restore}>Restore</Text>
                    </TouchableOpacity>
                    <View style={{ alignItems: "center" }}>
                        <Text style={styles.privacyPolicy}>By using our app, you agree to our TOU and Privacy Policy</Text>
                    </View>

                </View>

            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 16,
        backgroundColor: "#F4F2F2"
    },
    title: {
        fontFamily: "Nunito-ExtraBold",
        color: "#263238",
        fontSize: 20,
        textAlign: "center"
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
    pricing: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 16
    },
    continue: {
        height: 56,
        borderRadius: 48,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#20D262",
        marginTop: 24,
        marginBottom: 20
    },
    continueText: {
        fontFamily: "Nunito-Bold",
        fontSize: 16,
        color: "white"
    },
    restore: {
        fontFamily: "Nunito-Regular",
        color: "#263238",
        fontSize: 16,
        textAlign: "center",
        marginBottom: 20
    },
    privacyPolicy: {
        fontFamily: "Nunito-Regular",
        color: "#263238",
        fontSize: 16,
        textAlign: "center",
        width: 224,
        marginBottom: 20
    }
})
