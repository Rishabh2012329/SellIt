import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function ImageView({image}) {
    return (
        <View styl={styles.back}>
            <Image style={styles.styl} source={image} resizeMode="contain"/>
        </View>
    )
}

const styles=StyleSheet.create({
    styl:{
       width:"100%",
       height:"100%"
    }
})