// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableWithoutFeedback, View, SafeAreaView, Image, Alert, Button, StatusBar, Platform } from 'react-native';


export default function App() {

  return (
    // SafeAreaView is only for iOS, for android use the platform module and add padding
    <View
    style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
      justifyContent: clearInterval,
    }}
    >
      <View style={{
        backgroundColor: "dodgerblue",
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "gold",
        width: 100,
        height: 100,
      }} />
      <View style={{
        backgroundColor: "tomato",
        width: 100,
        height: 100,
      }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
