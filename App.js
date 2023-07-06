import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Alert, Platform, Dimensions } from 'react-native';
import {useDimensions, useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen'
import ViewScreen from './app/screens/ViewScreen'

export default function App() {
  return (
    <WelcomeScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android"? 30 : 0
  },
});
