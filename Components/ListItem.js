import React from 'react'
import { View, Text,Image, StyleSheet} from 'react-native'

export default function ListItem({img,t1,t2}) {
    return (
        <View>
            <Image source={img} style={styles.img} />
            <Text>{t1}</Text>
            <Text>{t2}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    img:{
     width:50,
     height:50,
    }
})
