import * as React from 'react';

import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native'

import { globalStyles, images } from '../global/Global1'
import { MUSIC, DATOS } from '../data/datos'

import { useSelector } from 'react-redux'
import { Audio, Video } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../global/Colors';


function MusicDetailScreen ({ navigation , route}) {

    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    
             

    // ------------------------
    const music = useSelector ( state => state.music.list)

    const selectedMusic = useSelector(state => state.music.selected)

    const filteredMusic = music.filter( item => item.music === selectedMusic)
    console.log(music[selectedMusic])

    const {title, year, pic, rating, duration, url} = route.params

    // const { title, year,tracks, pic, rating, id,  } = route.params

    console.log(route.params)
    return (
       
        <View style={ styles.screen} >
                <View style={  styles.cardContainer} >
                    <Text style={ [globalStyles.title, {marginTop: -90}, styles.text1] } >
                    { title }
                    </Text>
                    <Video
                        ref={video}
                        style={styles.video}
                        source={{  uri: url  
                        }}
                        useNativeControls
                        resizeMode="contain"
                        // isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                   
                    <View>
                    {/* <Text style={ styles.text1} > ID: 
                    {id} 
                    </Text> */}

                        <View style={ styles.inline} >
                            <Text style={ styles.text1 } >Year: </Text>
                            <Text style={ styles.text1 } >
                                {year}
                                </Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.text1 } >Rating: </Text>
                            <Text style={ styles.text1 } >
                                { rating }
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
        backgroundColor: Colors.black1
    },
    video: {
        marginTop: -40,
        padding: 10,
        width: 380,
        height: 380,
    },

    inline: {
        flexDirection: 'row'
    },

    info: {
        marginTop: 5,
        fontSize: 22,
        fontWeight: 'bold'
    },
    text1: {
        color: Colors.green,
        fontSize:22
    }
    
})

export default MusicDetailScreen