import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import ImageView from '../Components/ImageView'


export default function Image() {
    return (
        <View style={styles.back}>
             <View style={styles.trash}>
                 <MaterialCommunityIcons name="trash-can-outline" color="white" size={30} />
             </View>
             <View style={styles.close}>
                 <MaterialCommunityIcons name="close" color="white" size={30} />
             </View>
            <ImageView image={require('../assets/chair.jpg')}/>
        </View>
    )
}

const styles=StyleSheet.create({
    back:{
        flex:1,
        backgroundColor:"black"
    },
    trash:{
        top:30,
        right:20,
        position:"absolute"
    },
    close:{
        top:30,
        left:20,
        position:"absolute"
    }
})