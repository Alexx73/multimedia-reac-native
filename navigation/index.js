import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { useSelector  } from 'react-redux'

import TabNavigator from './TabNavigator'
import AuthNavigator from './AuthNavigator'

function MainNavigator () {

    // const isAuthenticated = useSelector( state =>state.auth.token )

    const isSignedUp = useSelector( state =>state.signIn.token )
    const isLoggedIn = useSelector( state =>state.signIn.token )

    return (
        <NavigationContainer>

            {(isLoggedIn || isSignedUp )
                ? <TabNavigator />
                : <AuthNavigator />
            }
            
        </NavigationContainer>
    )
}



export default MainNavigator