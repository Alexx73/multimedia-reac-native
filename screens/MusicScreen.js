import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { globalStyles, images } from '../global/Global1'


function MusicScreen ({navigation}) {
    return (
        <View style={styles.container } >
            {/* <Text  >
            MusicScreen
            </Text> */}

            <Text style={ [globalStyles.title, {marginTop: 30},] } >
                Music
            </Text>      

            <TouchableOpacity onPress={() => navigation.navigate('MusicDetails', {
                title:'Use Your Illusion',
                year: '1991',
                tracks: 12, 
                pic: 5,
                rating: '*****'
            } )} >
                        
                    <Image 
                    // style={ { width: 120, height:110, resizeMode: 'contain' }}
                    style={globalStyles.musicImg}
                    source={ require('../assets/movies/music1.jpg')}
                    />
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => navigation.navigate('MusicDetails', {
                title:'Permanent Vacation',
                year: '1988',
                tracks: 13, 
                pic: 6,
                rating: '*****'

            } )} >
                        
                    <Image 
                    // style={ { width: 120, height:110, resizeMode: 'contain' }}
                    style={globalStyles.musicImg}
                    source={ require('../assets/movies/music2.jpg')}
                    />
            </TouchableOpacity> 
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
    
})

export default MusicScreen