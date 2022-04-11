import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'


import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import MusicScreen from '../screens/MusicScreen';
import MusicDetailScreen from '../screens/MusicDetailScreen';

import { AntDesign } from '@expo/vector-icons';

import Colors from '../global/Colors';
const Stack = createNativeStackNavigator();

function ShopNavigator () {

  const handleLogout =  () => {
    console.log("icono salir + pressed") 
    console.log('just pressed')
    // const isLoggedIn = useSelector( state =>state.signIn.logout )

}
  return (
      <Stack.Navigator
      
      screenOptions={{
        headerShown: true,
        // title: 'Movies'
    }}
    
    
    
    >
        {/* <Stack.Screen name="Categories" component={CategoriesScreen} /> */}
        <Stack.Screen 
          name="Products" component={ProductsScreen} 
          options={{
            title: 'Peliculas',
            headerTitleStyle:{
                color: Colors.white,
                fontSize:25,
                fontWeight: 'bold'
            },
            headerStyle: {
                backgroundColor: '#1a1a1a',
                color: 'white'
            },

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

        <Stack.Screen name="Details" component={ProductDetailScreen} 
             options={{
              title: 'Matrix 4',
              headerTitleStyle:{
                  color: Colors.green,
                  fontSize:25,
                  fontWeight: 'bold'
              },
              
              headerStyle: {
                  backgroundColor: '#1a1a1a',
                  color: 'white'
              },
              headerTintColor: '#fff',
          }}
        />

        
        <Stack.Screen 
        name="Music" 
        component={MusicScreen} 
        options={{
          
        }}
        />        
        <Stack.Screen name="MusicDetails" component={MusicDetailScreen} />



      </Stack.Navigator>
  );
}

export default ShopNavigator;




