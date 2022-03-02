import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, StyleSheet} from 'react-native'

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
            
            />

            <Tab.Screen 
            name="MoviesTab" component={ShopNavigator} 
            screenOptions={{
                title: 'Movies'
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