import React from "react"
import { View, Text, StyleSheet } from 'react-native'

export default function Pricing({ duration, price, text }) {
    return (
        <View style={styles.container}>
            <Text style={styles.duration}>{duration}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        width: 156,
        borderRadius: 16,
        height: 128
    },
    duration: {
        fontFamily: "Nunito-Regular",
        color: "#263238",
        fontSize: 16,
        textAlign: "center",
        marginTop: 20
    },
    price: {
        fontFamily: "Nunito-ExtraBold",
        color: "#263238",
        fontSize: 20,
        textAlign: "center",
        marginBottom: 8,
        marginTop: 8
    },
    text: {
        fontFamily: "Nunito-Regular",
        color: "#20D262",
        fontSize: 14,
        textAlign: "center"
    }
})