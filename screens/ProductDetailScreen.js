import * as React from 'react';

import { Text, View, StyleSheet, Button, Image } from 'react-native'
import { images } from '../global/Global1'

import { AntDesign } from '@expo/vector-icons';
import VideoPlayer from '../components/VideoPlayer';
import Colors from '../global/Colors';
import { Video, AVPlaybackStatus } from 'expo-av';


function ProductDetailScreen ({ route, navigation  }) {
    
    const {title, year, pic, rating, duration, url} = route.params
    const pat2 = '../assets/movies/'

    console.log(url)
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});


  
  
    return (   
            <View style={ styles.screen} >
                <View  >
                <Text style={ styles.title } >
                    {title}
                    {/* {url} */}
                    
                 </Text>
                 <View style={styles.container}>
                    <Text> { }</Text>
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
                    
                </View>
                 
            
                    <View>
                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Year: </Text>
                            <Text style={styles.text1} >{year}</Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Rating: </Text>
                            <Text style={styles.text1} >{rating}</Text>

                            {/* <AntDesign name="star" size={22} color="yellow" /> */}
                            
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Duration: </Text>
                            <Text style={styles.text1} >{duration}</Text>
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
        backgroundColor: Colors.black2
    },

    video: {
        width: 340,
        height: 280,
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
        marginBottom: 5,
        marginTop: -100,
        color: Colors.green,
    },

    info: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Colors.green,

    },
    inline: {
        flexDirection: 'row'
    },
    text1: {
        color: Colors.green,
        fontSize:22
    }
})

export default ProductDetailScreen