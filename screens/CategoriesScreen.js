import React from 'react'

import { Text, View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native'
import { globalStyles } from '../global/Global1'

function CategoriesScreen ({navigation}) {
    return (
        <View style={ styles.screen } >

            <Text style={ globalStyles.title } >Multimedia Center</Text>
            

            <Text style={ globalStyles.subTitle }
            
            >
                Movies
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Products' )} >
                        
                    <Image 
                    // style={ { width: 120, height:110, resizeMode: 'contain' }}
                    style={styles.img}
                    source={ require('../assets/movies/movies.png')}
                    />
                </TouchableOpacity>  

                <Text style={ globalStyles.subTitle } >
                Music
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Music' )} >
                        
                    <Image 
                    // style={ { width: 120, height:110, resizeMode: 'contain' }}
                    style={styles.img}
                    source={ require('../assets/movies/music.png')}
                    />
                </TouchableOpacity>         
        </View>
    )
}


const styles = StyleSheet.create({

    screen: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'yellow'
    },

    img: {
        width: 120,
        height: 100,
        marginBottom: 20
    }
    
})

export default CategoriesScreen