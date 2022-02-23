import React from 'react'

import { Text, View, StyleSheet, Image} from 'react-native'

import { globalStyles, images } from '../global/Global1'



function MusicDetailScreen ({route, navigation }) {

    const { title, year, tracks, pic, rating } = route.params
    return (
        // <View>
        //     <Text>
        //     MusicDetailScreen
        //     </Text>
            
        // </View>

        <View style={ styles.screen} >
                <View style={  styles.cardContainer} >
                <Text style={ [globalStyles.title, {marginTop: -20}] } >
                    {title}
                    </Text>
                    <Image 
                            // style={{ width: 320, height:250, resizeMode: 'contain', padding: 20 }}
                            style={  globalStyles.musicImg2}
                            source={ images.img[pic] }
                            />  
                    <View>
                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Year: </Text>
                            <Text style={{ fontSize:22 }} >{year}</Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Rating: </Text>
                            <Text style={{ fontSize:22,  color: 'red', fontWeight: 'bold' }} >{rating}*</Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Tracks: </Text>
                            <Text style={{ fontSize:22 }} >{tracks} </Text>
                        </View>
                        
                        {/* <Text>Rating: {year}</Text> 
                        <Text>Duration: {year}</Text> */}
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
        backgroundColor: '#e6e6fa'
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