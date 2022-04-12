import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, StyleSheet, Image} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

import MusicNavigator from './MusicNavigator'
import ShopNavigator from './ShopNavigator'
import ProfileNavigator from './ProfileNavigator';
import  Colors  from '../global/Colors'

const Tab = createBottomTabNavigator()

function TabNavigator () {
    return (
        <Tab.Navigator
         initialRouteName="MusicTab"
         screenOptions={{
             headerShown: false,
             tabBarStyle: styles.tabBar
         }}
         >
            <Tab.Screen 
            name="MusicTab" 
            component={MusicNavigator} 
            screenOptions={{

            }}
            options={{
                tabBarLabel:  'Musica',
                tabBarLabelStyle:{
                    fontSize:15,
                    fontWeight: 'bold',
                    color: Colors.green

                },
                tabBarIcon: ({ focused }) => (

                    <MaterialIcons name="library-music" size={32} color="#9B641C" />
                   
                  ),
            }}   
            />

            <Tab.Screen 
            name="MoviesTab" component={ShopNavigator} 
            screenOptions={{
                title: 'Movies',
            }}
            options={{
                tabBarLabel:  'Pelis',
                tabBarLabelStyle:{
                    fontSize:15,
                    fontWeight: 'bold',
                    color: Colors.green


                },
                tabBarIcon: ({ focused }) => (
                    <MaterialIcons name="movie" size={30} color="#ff9933" />
                    
                  ),
            }}
            />

            <Tab.Screen 
                name="Profile" component={ProfileNavigator} 
                screenOptions={{
                    title: 'Movies',
                }}
                options={{
                    tabBarLabel:  'Perfil',
                    tabBarLabelStyle: {
                        fontSize:15,
                        fontWeight: 'bold',
                        color: Colors.green

                    },
                tabBarIcon: ({ focused }) => (
                    <MaterialIcons name="person" size={40} color="#E093B9" />
                    
                  ),
            }}
            />

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        position: 'absolute',
        // bottom: 25,
        // left: 20,
        // right:20,
        // borderRadius: 15,
        height: 60,
    },

    tabFont: {
        fontSize:12,
        fontWeight: 'bold',
        color:'red'
    }
})

export default TabNavigator