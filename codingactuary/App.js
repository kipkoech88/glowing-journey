import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi, I am <Text style={{fontWeight: "bold"}}>Hosea Kipngetich</Text></Text>
      <Text style={{fontSize: 16, color: 'red'}}>The Coding Actuary</Text>
      <Button title="Press me"
      onPress={()=> console.log("Hello")} style={{marginTop: 50}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
