import React from 'react'

import { Text, View, StyleSheet, Button} from 'react-native'


export const images = {
    img: {
        '1': require('../assets/movies/mov1.jpg'),
        '2': require('../assets/movies/mov2.jpg'),
        '3': require('../assets/movies/mov3.jpg'),
        '4': require('../assets/movies/mov4.jpg'),
        '5': require('../assets/movies/music1.jpg'),
        '6': require('../assets/movies/music2.jpg'),
    }
} 


const globalStyles = StyleSheet.create({
    centered: {

        alignItems: 'center',
    },
    
    title: {
        marginTop: -80,
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    subTitle: {
        fontSize: 24, fontWeight: '900'
    },

    musicImg: {
        width: 200,
        height:200,
        // flex: 1,
        // alignItems: 'center',
        marginHorizontal: 'auto',
        // marginBottom: 30,
        marginVertical:20
    },

    musicImg2: {
        width: 350,
        height:350,
        // flex: 1,
        // marginHorizontal: 'auto',
        // marginBottom: 30,
        marginVertical:20,
        justifyContent: 'center',
        alignItems: 'center',
        
    }




})

export  {globalStyles}