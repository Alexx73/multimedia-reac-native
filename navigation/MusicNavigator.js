import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MusicScreen from '../screens/MusicScreen'
import MusicDetailScreen from '../screens/MusicDetailScreen';
import Colors from '../global/Colors';

import { AntDesign } from '@expo/vector-icons';

import { useSelector } from 'react-redux';
import Logout from '../components/Logout';



const Stack = createNativeStackNavigator();

const MusicNavigator = () => {

    const handleLogout =  () => {
        console.log("icono salir + pressed") 
        console.log('just pressed')
        // const isLoggedIn = useSelector( state =>state.signIn.logout )
 
    }
   
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Music" 
            component={MusicScreen}
            
            options={{
                title: 'Musica',
                headerTitleStyle:{
                    color: Colors.white,
                    fontSize:25,
                    fontWeight: 'bold'
                },
                headerStyle: {
                    backgroundColor: "black",
                    color: 'white',
                    fontWeight: 'bold'
                },
                headerTintColor: '#fff',

               
                headerRight: () => ( 
                    <TouchableOpacity
                    style={{ marginRight:20 }}
                    onPress={ handleLogout  }                   
                    >
                        <AntDesign 
                        name="logout" 
                        size={28} 
                        color="yellow" />             
                    </TouchableOpacity>
                )               
            }}


             />

            <Stack.Screen name="MusicDetails" component={MusicDetailScreen}
                 options={{
                    title: 'Album',
                    headerTitleStyle:{
                        color: Colors.white,
                        fontSize:25,
                        fontWeight: 'bold'
                    },
                    headerStyle: {
                        backgroundColor: Colors.black1,
                        color: 'white',
                        fontWeight: 'bold'
                    },
                    headerTintColor: '#fff',

                   
                    headerRight: () => ( 
                        <TouchableOpacity
                        style={{ marginRight:20 }}
                        onPress={ () =>{  console.log("icono salir + pressed") }  
                    }                   
                        >
                            <AntDesign 
                            name="logout" 
                            size={28} 
                            color="yellow" />             
                        </TouchableOpacity>
                    )               
                }}
            
            />

        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    
})

export default MusicNavigator