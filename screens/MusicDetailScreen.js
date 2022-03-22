import React from 'react'

import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

import { globalStyles, images } from '../global/Global1'
import { MUSIC, DATOS } from '../data/datos'

import { useSelector } from 'react-redux'
import { Audio, Video } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';


function MusicDetailScreen ({ navigation , route}) {

    
      
         

    // ------------------------
    const music = useSelector ( state => state.music.list)

    const selectedMusic = useSelector(state => state.music.selected)

    const filteredMusic = music.filter( item => item.music === selectedMusic)
    console.log(music[selectedMusic])


    const { title, year,tracks, pic, rating, id,  } = route.params

    console.log(route.params)
    return (
       
        <View style={ styles.screen} >
                <View style={  styles.cardContainer} >
                <Text style={ [globalStyles.title, {marginTop: -90}] } >
                    { title }
                    </Text>
                    <Image 
                            // style={{ width: 320, height:250, resizeMode: 'contain', padding: 20 }}
                            style={  globalStyles.musicImg2}
                            source={ pic }
                            />  
                    <View>
                    <Text style={ styles.info} > ID: 
                    {id} 
                    </Text>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Year: </Text>
                            <Text style={{ fontSize:22 }} >
                                {year}
                                </Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Rating: </Text>
                            <Text style={{ fontSize:22,  color: 'red', fontWeight: 'bold' }} >
                                { rating }
                                </Text>
                        </View>

                        {/* <View style={ styles.inline} >
                            <Text style={ styles.info } >Tracks: </Text>
                            <Text style={{ fontSize:22 }} >
                                { tracks } 
                            </Text>                                               
                        </View> */}

                        <View>

                        <TouchableOpacity
                        onPress={ () => {console.log(tracks.track1, " pressed")
                        console.log('move on')
                        }
                        
                        }
                        >
                            <Text>
                                    {tracks.track1}

                            </Text>
                        </TouchableOpacity>    

                        <TouchableOpacity>
                            <Text>
                                    {tracks.track2}

                            </Text>
                        </TouchableOpacity>  


                        
                        <Text>
                            {tracks.track2}
                        </Text>

                        <Text>
                                Track 3
                        </Text>
                        <Text>
                                Track 4
                        </Text>


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
        marginTop: -5,
        fontSize: 22,
        fontWeight: 'bold'
    }
    
})

export default MusicDetailScreen