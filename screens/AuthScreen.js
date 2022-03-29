import React from 'react'

import { Text, View, StyleSheet, Input, TouchableOpacity, TextInput } from 'react-native'


function AuthScreen () {

    const title = 'REGISTRO',
    message = 'Ya tienes cuenta?',
    messageAction = 'Ingresar',
    messageTarget = 'Login';

    return (
        <View>
            <Text> {title} </Text>

            <Text> Email </Text>
            <TextInput />

            <Text> Clave </Text>
            <TextInput />


            <View>
            <TouchableOpacity>
                <Text> {messageAction} </Text>
            </TouchableOpacity>

            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    
})

export default AuthScreen