import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'

import { globalStyles, images } from '../global/Global1'
import List from '../components/List'

import { DATOS, MUSIC } from '../data/datos'



function MusicScreen ({navigation}) {
    return (
        <View style={styles.container } >           
        
            <TouchableOpacity onPress={() => navigation.navigate('MusicDetails', {
                title:'Use Your Illusion 1',
                year: '1988',
                tracks: 13, 
                pic: 5,
                rating: '*****'
            } )} >                      
                    
            </TouchableOpacity> 

            {/* ---------------------------- */}

            <FlatList
            data={MUSIC}
            numColumns={2}
            renderItem={({item}) => (
                <View>
                    <Text style={{color:'#00203FFF', fontSize: 16, fontWeight:'bold', marginTop:5}} >
                    { item.title}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('MusicDetails', {
                        title: item.title,
                        year: item.year,
                        tracks: item.tracks, 
                        pic: item.source,
                        rating: '*****',
                        id: item.id
                    } )} >
                        <Image 
                        style={globalStyles.musicImg}
                        source={ item.source} />
                    </TouchableOpacity>
                    {/* <Image 
                    style={globalStyles.musicImg}
                    source={ item.source} /> */}
                </View>
            )  }
            />
            
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 40,
        backgroundColor: '#ADEFD1FF',
        color:'white',

      },
    
})

export default MusicScreen