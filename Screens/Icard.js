import React from 'react'
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import Card from '../Components/Card'

export default function Icard() {
    return (
        <ScrollView style={styles.contain}>
             <View style={styles.back}>
            <Card image={require('../assets/jacket.jpg') } title='Red Jacket' price="50$"/>
            <Card image={require('../assets/jacket.jpg') } title='jacket' price="100$" />
            <Card image={require('../assets/jacket.jpg') } title='Couch' price="100$" />
        </View >
        </ScrollView >
    )
}
const styles=StyleSheet.create({
    back:{
        padding:20,
        paddingTop:40,
        justifyContent:"space-around",
    },
    contain:{
        height:"100%",
        backgroundColor:"#f8f4f4",
    }
})