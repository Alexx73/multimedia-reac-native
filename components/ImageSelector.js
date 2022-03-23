
import React, { useState } from 'react'

import { Text, View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native'
import * as ImagePicker from 'expo-image-picker'
import Colors from '../global/Colors'



function ImageSelector () {

    const [pickedUri, setPickedUri] = useState()

    const [image, setImage ] = useState()

    const verifyPermissions = async () => {
     const {granted} = await ImagePicker.requestCameraPermissionsAsync()
     
     if (granted) {
       return true
     }
     Alert.alert(
       'Permisos Insuficientes',
       'Necesita otorgar permisos de la camara',
       [{text: 'OK'}]
     )

     return false
    }

    // ----------

    const handleTakeImage = async () => {
        const isCameraOk =  await verifyPermissions()
        if(!isCameraOk) {return
  } else {  
        
        const image = await ImagePicker.launchCameraAsync({
          allowsEditing: true,
          aspect: [4,3],
          quality: 0.8,
        })
        console.log('granted permission')
        console.log(image)
        setPickedUri(image.uri)
        onImageSelected( image.uri )
      }
      }
  

    return (
        
        <View style={styles.container}>
          <View style={styles.preview}>
            {!pickedUri
              ? <Text>No hay imagen seleccionada</Text>
              : <Image 
              style={styles.image} source={{ uri: pickedUri }} />}
          </View>

          {/* <Button
            title="Tomar Foto"
            color={Colors.primary }
            onPress={handleTakeImage}
          /> */}

          {/* <View style={{ width: '95%' }} > */}
            <TouchableOpacity
              style={styles.button}
              title="Tomar Foto"
              color={Colors.primary }
              onPress={handleTakeImage}
              >
                <Text>Tomar foto</Text>
              </TouchableOpacity>

          {/* </View> */}

           

        </View>

    )
}


const styles = StyleSheet.create({

    container: {
        marginBottom: 10,
      },
      preview: {
        padding: '2%',
        width: '100%',
        height: 250,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        // borderColor: COLORS.BLUSH,
        // borderWidth: 1,
      },
      image: {
        padding: 20 ,
        width: '90%',
        height: '90%',
        borderRadius: 20,
        // margin: 5,
        // backgroundColor: 'red',
      },
      button: {
        alignItems: "center",
        backgroundColor: Colors.third ,
        padding: 10,
        borderRadius: 50,
        padding: 10,
        marginHorizontal: 5,
        // width: '95%'
      },
      
    
})

export default ImageSelector