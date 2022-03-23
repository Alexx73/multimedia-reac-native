import React from 'react'

import { Text, View, StyleSheet, Image } from 'react-native'
import ImageSelector from '../components/ImageSelector'
import { globalStyles, images } from '../global/Global1'



function ProfileScreen () {
    return (
        <View style={ styles.profile } >
            {/* <Text>
                Profile Screen
            </Text> */}

            {/* <Image  
                style={globalStyles.musicImg}
                source={ require('../assets/movies/music2.jpg') } /> */}

            <ImageSelector />

            <Text>
                Usuario: Tristan Luna
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
        // backgroundColor: 'yellow',
    },
    
})

export default ProfileScreen