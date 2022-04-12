import React from 'react'

import { Text, View, StyleSheet, Card, Image, TouchableOpacity } from 'react-native'
import Colors from '../global/Colors'

function ProductsScreen ({ navigation }) {

    return (
        <View style={ styles.container } > 

            
            <View  style={{ flexDirection: 'row' }} >
                <TouchableOpacity onPress={() => navigation.navigate('Details', { 
                    title:'Star Trek Beyond !!', 
                     year: 2016,
                     pic: '1',
                     rating: '****',
                    duration: '122 min',
                    url: 'https://firebasestorage.googleapis.com/v0/b/app-tienda-18e1b.appspot.com/o/mov%2FSt-trek.mp4?alt=media&token=ee5d370e-7b3b-49e2-88d8-5c62f396f9aa' ,
                     })} >

                    <Image 
                    style={styles.tinyLogo}
                    source={ require('../assets/movies/mov1.jpg')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Details', {
                    title: "Matrix 4",  
                    year: 2022,
                    pic: 2,
                    rating: '*****',
                    duration: '148 min',
                    url:'https://firebasestorage.googleapis.com/v0/b/app-tienda-18e1b.appspot.com/o/mov%2Fma4.mp4?alt=media&token=d753f9a2-d38a-416a-8454-f41e5967241a'
                    } )} >
                        
                    <Image 
                    style={styles.tinyLogo}
                    source={ require('../assets/movies/mov2.jpg')}
                    />
                </TouchableOpacity> 
                
            </View>

            <View  style={{ flexDirection: 'row' }} > 
                <TouchableOpacity onPress={() => navigation.navigate('Details', {
                    title: "The Rise of Skywalker",  
                    year: 2019,
                    pic: 3,
                    rating: '******',
                    duration: '89 min',
                    url: 'https://firebasestorage.googleapis.com/v0/b/app-tienda-18e1b.appspot.com/o/mov%2FSt-war.mp4?alt=media&token=0bf7dcda-58eb-4369-816c-681d6936f1c6',
                    } )} >
                        
                    <Image 
                    style={styles.tinyLogo}
                    source={ require('../assets/movies/mov3.jpg')}
                    />
                </TouchableOpacity>    

                <TouchableOpacity onPress={() => navigation.navigate('Details', { 
                    title:'The Tomorrow War',
                    year: 2021,
                    pic: 4,
                    rating: '*******',
                    duration: '135 min',
                    url: 'https://firebasestorage.googleapis.com/v0/b/app-tienda-18e1b.appspot.com/o/mov%2FTomwar-1.mp4?alt=media&token=ffd340ed-688a-4dd5-81a9-585b5b60030f',
                    })} >
                    <Image 
                    // style={ { width: 120, height:110, resizeMode: 'contain' }}
                    style={styles.tinyLogo}
                    source={ require('../assets/movies/mov4.jpg')}
                    />
                </TouchableOpacity>           
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({ 
    
    container: {
        marginTop: -360,
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a1a1a'
        // flexDirection: 'row', 
        // padding: 20
    },

    title: {
        marginTop: 10,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    tinyLogo: {

        width: 160,
        height: 120,
        // margin: 10,
        resizeMode: 'contain',
        marginBottom: 10,
        // padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15,
      },

})

export default ProductsScreen