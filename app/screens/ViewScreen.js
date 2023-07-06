import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native'

function ViewScreen(props) {
    return (
        <View style={styles.container} >
        <View style={styles.closeIcon}>
            <Text style={{color: "#fff", padding: 7}}>Close</Text>
        </View>
        <View style={styles.deleteIcon}>
        <Text style={{color: "#fff", padding: 7}}>Delete</Text>
        </View>
            <Image
        resizeMode='contain'
        style={styles.image}
         source={require("../assets/chair.jpg")}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: "100%",
        height: "100%"
    },
    container:{
        backgroundColor: '#000',
        flex: 1
    },
    closeIcon:{
        width: 50,
        height: 50,
        backgroundColor: '#fc4c56',
        top: 40,
        left: 30,
        position: "absolute"
    },
    deleteIcon:{
        width: 50,
        height: 50,
        backgroundColor: '#4ecdc4',
        top: 40,
        right: 30,
        position: 'absolute'
    }
})

export default ViewScreen;