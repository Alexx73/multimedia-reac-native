import React from 'react'

import { Text, View, StyleSheet } from 'react-native'
import Colors from '../global/Colors'

// import { useFonts } from 'expo-font';



function Funtime () {

    // const [loaded] = useFonts({
    //     RoboBold: require('../assets/fonts/Roboto-Bold.ttf'),
    //   });
    return (
        <View styles={ styles.inline } >
            <Text style={ styles.banner1} > FU
                <Text style={ styles.banner2 } >
                    N T
                </Text>
                <Text  style={ styles.banner1 } >
                    IME
                </Text>

            </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    inline: {
        flexDirection: 'row',
        flexWrap:'wrap',
        textAlign: 'center',
        justifyContent: 'center', 
        alignItems: 'center',
        marginHorizontal: 'auto',
        marginLeft:50,
        marginBottom: 70,
    },

    banner1: {
        marginHorizontal: 'auto',
        fontSize: 55,
        color: Colors.black,
        textAlign: 'center',
        fontFamily: Colors.RoboBold,
        fontWeight: 'bold'



    },

    banner2: {
        fontSize: 58,
        color: Colors.green,
        fontFamily: Colors.RoboBold,
        fontWeight: 'bold'


    }
    
})

export default Funtime