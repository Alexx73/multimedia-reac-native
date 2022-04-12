import React from 'react'

import { Text, View, StyleSheet, Image } from 'react-native'
import ImageSelector from '../components/ImageSelector'
import { globalStyles, images } from '../global/Global1'



function ProfileScreen () {
    return (
        <View style={ styles.profile } >
            
            <ImageSelector />

            <Text style={[ styles.text1, { fontWeight: 'bold' } ]} >
                Usuario: 
                <Text style={ styles.text1 }>Tristan Luna</Text>
            </Text  >

            <Text  style={ styles.text1 } >
                Favorites: movie 1
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    profile: {
        flex:1 ,
        backgroundColor: '#595959',
        color: 'white'
    },

    text1: {
        color: 'white',
        fontSize: 20,
        marginBottom: 5,

    }
    
})

export default ProfileScreen