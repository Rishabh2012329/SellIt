import React,{useState} from 'react'
import { Text, View,StyleSheet } from 'react-native'
import Welcome from './Screens/Welcome';
import Icard from './Screens/Icard';
import Image from './Screens/Image';
import Users from './Screens/Users'

export default function App(){
    const [card,set]=useState(false);
    return (
        <View style={styles.style}>   
         <Users/>
        </View>
        
    )
}
const styles=StyleSheet.create({
 style:{
     flex:1
 }
})