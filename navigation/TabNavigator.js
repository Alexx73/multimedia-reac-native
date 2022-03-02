import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View } from 'react-native'

import MusicNavigator from './MusicNavigator'
import ShopNavigator from './ShopNavigator'

const Tab = createBottomTabNavigator()

function TabNavigator () {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Music" component={MusicNavigator} />

            <Tab.Screen name="Movies" component={ShopNavigator} />
        </Tab.Navigator>
    )
}

export default TabNavigator