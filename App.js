// import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AppText from './app/components/AppText';
import AppButton from './app/components/AppButton';

export default function App() {
  return <WelcomeScreen />
  // (
  // < View
  //   style={{
  //     flex: 1,
  //     justifyContent: "center",
  //     alignItems: "center",
  //   }}
  // >
  //   <MaterialCommunityIcons 
  //     name="email"
  //     size={60} />
  //     <AppText>I love react native</AppText>
  //   <AppButton title="Login" onPress={() => console.log("Tapped")} />
  // </View>
  // );
}