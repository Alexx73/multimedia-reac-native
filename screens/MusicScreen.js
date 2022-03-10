import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'

import { globalStyles, images } from '../global/Global1'
import List from '../components/List'

import { DATOS, MUSIC } from '../data/datos'
import { useDispatch } from 'react-redux'
import { musicCategory } from '../store/actions/music.action'



function MusicScreen ({navigation}) {

    const dispatch = useDispatch()

    const handlePress = (item) => {
        dispatch(musicCategory(item.id))
        navigation.navigate('MusicDetails',{
            name: item.title,
        } )
    }

    return (
        <View style={styles.container } >           
        
            <TouchableOpacity onPress={handlePress
            // {
            //     title:'Use Your Illusion 1',
            //     year: '1988',
            //     tracks: 13, 
            //     pic: 5,
            //     rating: '*****'
            // } 
            } >                      
                    
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
                    <TouchableOpacity onPress={handlePress
                    // {
                    //     title: item.title,
                    //     year: item.year,
                    //     tracks: item.tracks, 
                    //     pic: item.source,
                    //     rating: '*****',
                    //     id: item.id
                    // }
                     } >
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