import React from 'react'
import { View, Text  } from 'react-native'
import ListItem from '../Components/ListItem'

export default function Users() {
    return (
        <View>
            <ListItem img={require('../assets/mosh.jpg')} t1='Mosh' t2="project"/>
        </View>
    )
}
