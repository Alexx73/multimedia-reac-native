import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'

import { globalStyles, images } from '../global/Global1'


function MusicScreen ({navigation}) {
    return (
        <View style={styles.container } >
            <Text  >
            MusicScreen
            </Text>

            <Text style={ globalStyles.subTitle } >
                Music
            </Text>      

            <TouchableOpacity onPress={() => navigation.navigate('MusicDetails', {
                title:'',
                year: '',
                tracks: 12, 
                pic: 5
            } )} >
                        
                    <Image 
                    // style={ { width: 120, height:110, resizeMode: 'contain' }}
                    style={globalStyles.musicImg}
                    source={ require('../assets/movies/music1.jpg')}
                    />
            </TouchableOpacity> 

            <TouchableOpacity onPress={() => navigation.navigate('MusicDetails', {
                title:'',
                year: '',
                tracks: 12, 
                pic: 6
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