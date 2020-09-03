import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'

export default function Card({image,title,price}){
    return (
        <View style={styles.crd}>
            <Image style={styles.img} source={image} />
            <View>
            <Text style={styles.tex}>{title}</Text>
            <Text style={styles.texp}>{price}</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    crd:{
        backgroundColor:"white",
        borderRadius:15,
        overflow:"hidden",
        marginBottom:"10%",
        elevation:8,
    },
    img:{
        width:"100%",
        height:200,
    },
    tex:{
        margin:'1%'
    },
    texp:{
        margin:'1%',
        color:'green',
        fontSize:15,
        fontWeight:"900"
    }
})
