
import React from 'react'

import { Text, View, StyleSheet, TextInput } from 'react-native'
import  Colors  from '../global/Colors'


function Input ( {label}, ...props) {
    return (
        <View style={styles.formControl} >
            <Text style={styles.label} > { label } </Text>
            <TextInput 
            {...props}
            style={styles.input}
            />
        </View>
    )
}

const styles = StyleSheet.create({

    formControl: {
        width: '100%',
      },
      label: {
        marginVertical: 8,
      },
      input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        // borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 8,
        borderBottomColor: Colors.green,

      },
      errorText: {
        marginVertical: 5,
        color: '#cc7755'
      }
    
})

export default Input