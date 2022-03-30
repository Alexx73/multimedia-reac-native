import React from 'react'

import { Text, View, StyleSheet, Input, TouchableOpacity, TextInput, Button } from 'react-native'
import Colors from '../global/Colors';

function AuthScreen () {

    const title = 'REGISTRO',
    message = 'Ya tienes cuenta?',
    messageAction = 'Ingresar',
    messageTarget = 'Login';

    return (
        <View style={styles.screen} >
            <View style={styles.container} >
                <Text style={styles.title} > {title} </Text>

                <Text  style={styles.label} > Email </Text>
                <TextInput />

                <Text  style={styles.label}> Clave </Text>
                <TextInput />
                <Button title="REGISTRATSE"/>


                <View style={styles.prompt} >
                <Text style={styles.promptMessage} > {message} </Text>
                <TouchableOpacity>
                    <Text style={styles.promptMessage} > {messageAction} </Text>
                </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 24,
        marginBottom: 18,
        textAlign: 'center',
      },
      container: {
        width: '80%',
        maxWidth: 400,
        padding: 12,
        margin: 12,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white',
      },
      prompt: {
        alignItems: 'center',
      },
      promptMessage: {
        fontSize: 16,
        color: '#333',
      },
      promptButton: {
        fontSize: 16,
        color: Colors.primary,
      },
    
})

export default AuthScreen