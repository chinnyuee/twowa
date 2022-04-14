import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, Image, ActivityIndicator } from 'react-native';
import * as Font from "expo-font"
import OnboardingStack from './components/OnboardingStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(
    () => {
      Font.loadAsync({
        "Nunito-Regular": require("./assets/fonts/Nunito-Regular.ttf"),
        "Nunito-ExtraBold": require("./assets/fonts/Nunito-ExtraBold.ttf"),
        "Nunito-Bold": require("./assets/fonts/Nunito-Bold.ttf"),
      })
        .then(() => setFontLoaded(true))
    }
    , [])

  return (
    fontLoaded ?
      <NavigationContainer>
        <OnboardingStack />
      </NavigationContainer>
      :
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#20D262",
    justifyContent: "center"
  },
});
