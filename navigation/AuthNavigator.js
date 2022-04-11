import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AuthScreen from '../screens/AuthScreen'
import LoginScreen from '../screens/user/LoginScreen'

const Stack = createNativeStackNavigator()

function AuthNavigator() {

    return ( 

    <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{ headerShown: false }}
    >

        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />

    </Stack.Navigator>
    )
}


export default AuthNavigator