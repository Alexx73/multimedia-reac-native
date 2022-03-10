import React from 'react'

import { Text, View, StyleSheet, Image} from 'react-native'

import { globalStyles, images } from '../global/Global1'
import { MUSIC, DATOS } from '../data/datos'

import { useSelector } from 'react-redux'


function MusicDetailScreen ({ navigation }) {
    const music = useSelector ( state => state.music.list)

    const selectedMusic = useSelector(state => state.music.selected)

    const filteredMusic = music.filter( item => item.id === selectedMusic)
    console.log(filteredMusic.id)


    // const { title, year, tracks, pic, rating, id } = route.params
    return (
        // <View>
        //     <Text>
        //     MusicDetailScreen
        //     </Text>
            
        // </View>

        <View style={ styles.screen} >
                <View style={  styles.cardContainer} >
                <Text style={ [globalStyles.title, {marginTop: -20}] } >
                    { filteredMusic.title}
                    </Text>
                    <Image 
                            // style={{ width: 320, height:250, resizeMode: 'contain', padding: 20 }}
                            style={  globalStyles.musicImg2}
                            source={filteredMusic.source}
                            />  
                    <View>
                    <Text style={ styles.info} > ID: {filteredMusic.id} </Text>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Year: </Text>
                            <Text style={{ fontSize:22 }} >{filteredMusic.year}</Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Rating: </Text>
                            <Text style={{ fontSize:22,  color: 'red', fontWeight: 'bold' }} >{filteredMusic.rating}*</Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Tracks: </Text>
                            <Text style={{ fontSize:22 }} >{filteredMusic.tracks} </Text>
                        </View>
                        
                    </View>        
                </View>            
            </View>
    )
}


const styles = StyleSheet.create({

    screen: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#e6e6fa',
        // backgroundColor: '#00203FFF',
        // backgroundColor: 'red',
    },

    inline: {
        flexDirection: 'row'
    },

    info: {
        fontSize: 22,
        fontWeight: 'bold'
    }
    
})

export default MusicDetailScreen