
import React from 'react'

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { useSelector  } from 'react-redux'


function Logout ( { size, color}) {

    const handleLogout = () => {
        console.log("icono salir + pressed") 
        console.log('just pressed')
        const isLoggedIn = useSelector( state =>state.signIn.logout )
    }
    return (
        <View>
             <TouchableOpacity
                    style={{ marginRight:20 }}
                    onPress={ () =>{ handleLogout }  
                }                   
                    >
                        <AntDesign 
                        name="logout" 
                        size={size} 
                        color={color} />             
                    </TouchableOpacity>
            
        </View>
    )
}


const styles = StyleSheet.create({
    
})

export default Logout