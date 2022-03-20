import React from 'react'

import { Text, View, StyleSheet, Image } from 'react-native'
import { globalStyles, images } from '../global/Global1'



function ProfileScreen () {
    return (
        <View style={ styles.profile } >
            <Text>
                Profile Screen
            </Text>

            <Image  
                style={globalStyles.musicImg}
                source={ require('../assets/movies/music2.jpg') } />

            <Text>
                Name: Tristan Luna
            </Text>

            <Text>
                Favorites: movie 1
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    profile: {
        flex:1 ,
        backgroundColor: 'red',
    },
    
})

export default ProfileScreen