import React from 'react'

import { Text, View, StyleSheet, Button, Image } from 'react-native'
import { images } from '../global/Global1'

import { AntDesign } from '@expo/vector-icons';

function ProductDetailScreen ({ route, navigation  }) {
    
    const {title, year, pic, rating, duration} = route.params
    
    const pat2 = '../assets/movies/'


  
  
    return (   
            <View style={ styles.screen} >
                <View style={  styles.cardContainer} >
                <Text style={ styles.title } >
                    {title}
                    </Text>
                    <Image 
                            style={{ width: 330, height:260, resizeMode: 'contain', padding: 20 }}
                            source={ images.img[pic] }
                            />  
                    <View>
                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Year: </Text>
                            <Text style={{ fontSize:22 }} >{year}</Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Rating: </Text>
                            <Text style={{ fontSize:22, color:'yellow', fontWeight: 'bold' }} >{rating}</Text>

                            {/* <AntDesign name="star" size={22} color="yellow" /> */}
                            



                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Duration: </Text>
                            <Text style={{ fontSize:22 }} >{duration}</Text>
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
        // backgroundColor: 'lightblue'
    },

    cardContainer: {
        // padding: 20,
        paddingHorizontal: 30,
        paddingVertical: 30,

        shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    backgroundColor: 'white',
    // flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },

    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },

    info: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    inline: {
        flexDirection: 'row'
    }
})

export default ProductDetailScreen