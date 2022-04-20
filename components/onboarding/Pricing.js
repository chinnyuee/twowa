import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

export default function Pricing({ duration, price, text, defaultDuration }) {

    return (
        <View style={[styles.container,
        defaultDuration === duration ?
            { borderColor: "#20D262" } :
            { borderColor: "white" }]
        }>
            {
                defaultDuration === duration && <View style={styles.antDesign}>
                    <AntDesign name="checkcircle" size={24} color="green" />
                </View>
            }
            <Text style={styles.duration}>{duration}</Text>
            <Text style={styles.price}>{price}</Text>
            <Text style={styles.text}>{text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        // width: 156,
        borderRadius: 16,
        height: 128,
        borderWidth: 2,
        position: "relative"

    },
    antDesign: {
        width: "100%",
        alignItems: "center",
        position: "absolute",
        top: -15
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