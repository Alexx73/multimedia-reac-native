import React from 'react'

import { Text, View, StyleSheet, Image} from 'react-native'

import { globalStyles, images } from '../global/Global1'



function MusicDetailScreen ({route, navigation }) {

    const { title, year, tracks, pic } = route.params
    return (
        // <View>
        //     <Text>
        //     MusicDetailScreen
        //     </Text>
            
        // </View>

        <View style={ styles.screen} >
                <View style={  styles.cardContainer} >
                <Text style={ styles.title } >
                    {title}
                    </Text>
                    <Image 
                            style={{ width: 320, height:250, resizeMode: 'contain', padding: 20 }}
                            source={ images.img[pic] }
                            />  
                    <View>
                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Year: </Text>
                            <Text style={{ fontSize:22 }} >{year}</Text>
                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Rating: </Text>
                            <Text style={{ fontSize:22, color:'yellow', fontWeight: 'bold' }} >{tracks}</Text>

                            {/* <AntDesign name="star" size={22} color="yellow" /> */}
                            



                        </View>

                        <View style={ styles.inline} >
                            <Text style={ styles.info } >Duration: </Text>
                            <Text style={{ fontSize:22 }} ></Text>
                        </View>
                        
                        {/* <Text>Rating: {year}</Text> 
                        <Text>Duration: {year}</Text> */}
                    </View>        
                </View>            
            </View>
    )
}


const styles = StyleSheet.create({
    
})

export default MusicDetailScreen