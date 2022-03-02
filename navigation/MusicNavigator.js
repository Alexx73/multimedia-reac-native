import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MusicScreen from '../screens/MusicScreen'
import MusicDetailScreen from '../screens/MusicDetailScreen';


const Stack = createNativeStackNavigator();

const MusicNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Music" component={MusicScreen} />
            <Stack.Screen name="MusicDetails" component={MusicDetailScreen} />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    
})

export default MusicNavigator