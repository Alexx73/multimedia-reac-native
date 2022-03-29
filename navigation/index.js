import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'

function MainNavigator () {

    const [ user, setUser ] = useState(null)

    return (
        <NavigationContainer>

            {user 
                ? <TabNavigator />
                : <AuthNavigator />
            }
            
        </NavigationContainer>
    )
}



export default MainNavigator