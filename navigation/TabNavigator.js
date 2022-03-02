import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, StyleSheet, Image} from 'react-native'

import { MaterialIcons } from '@expo/vector-icons';

import MusicNavigator from './MusicNavigator'
import ShopNavigator from './ShopNavigator'

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
                tabBarLabel:  'Music',
                tabBarIcon: ({ focused }) => (

                    <MaterialIcons name="library-music" size={38} color="black" />
                    // <Image
                    //   focused={focused}
                    //   source={require('../assets/movies/music.png')}
                    //   style={{height:50, width:50}}/>
                  ),
            }}   
            />

            <Tab.Screen 
            name="MoviesTab" component={ShopNavigator} 
            screenOptions={{
                title: 'Movies 2',
            }}
            options={{
                tabBarLabel:  'Movies',
                tabBarIcon: ({ focused }) => (
                    <MaterialIcons name="movie" size={24} color="black" />
                    // <Image
                    //   focused={focused}
                    //   source={require('../assets/movies/movies.png')}
                    //   style={{height:50, width:50}}/>
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
})

export default TabNavigator