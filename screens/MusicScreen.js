import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'

import { globalStyles, images } from '../global/Global1'
import List from '../components/List'



// import { DATOS, MUSIC } from '../data/datos'
import { useDispatch, useSelector} from 'react-redux'
import { musicCategory } from '../store/actions/music.action'
import Colors from '../global/Colors'



function MusicScreen ({navigation}) {

    // const dispatch = useDispatch()
    const music = useSelector(state => state.music.list)

    const handlePress = (item) => {
        // dispatch(musicCategory(item.id))
        // console.log(item.title)
        // console.log(music[0].title)
        console.log(item.title)
        navigation.navigate('MusicDetails',  {
            title: item.title,
            year: item.year,
            tracks: item.tracks, 
            pic: item.source,
            rating: '*****',
            id: item.id,
            url: item.url
        }
        );
        
    }

    return (
        <View style={styles.container } >           
               

            {/* ---------------------------- */}

            <FlatList
            data={music}
            numColumns={2}
            renderItem={({item}) => (
                <View>
                    <Text style={styles.title2   } >
                    { item.title}
                    </Text>
                    <TouchableOpacity onPress={ () => {console.log(item.url)
                    navigation.navigate('MusicDetails',{
                        title: item.title,
                        year: item.year,
                        pic: item.source,
                        rating: '*****',
                        duration: '',
                        url: item.url,
                        id: item.id,
                    }     )                               
                }                
                     } >
                        <Image 
                        style={globalStyles.musicImg}
                        source={ item.source} />
                    </TouchableOpacity>
                    
                </View>
            )  }
            />
            
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 40,
        backgroundColor: 'black',
        color:'white',
        marginTop: -2,

      },

      title2: {
        color: Colors.green, 
        fontSize: 17, 
        fontWeight:'bold', 
        // marginTop:5,
        marginLeft: 12,
    }
    
})

export default MusicScreen