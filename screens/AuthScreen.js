import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import { Text, View, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native'
import Colors from '../global/Colors';
import { signUp } from '../store/actions/auth.action'

import Input from '../components/Input';
import Funtime from '../components/Funtime';
import { MaterialCommunityIcons } from '@expo/vector-icons';



function AuthScreen ({navigation}) {

  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = () => {
    console.log('signup pressed', email, password )
    dispatch(signUp(email, password))
  }

  const gotoLogin = () => {
    navigation.navigate('Login')
    console.log('Going to Login')
  }


    const title = 'REGISTRO',
    message = 'Ya tienes cuenta?',
    messageAction = 'Ingresa Aquí',
    messageTarget = 'REGISTRARSE';

    return (

      <View style={styles.screen} >
           <Image 
            source={ require('../assets/movies/movies.png') }
            style={{ marginTop: 20, width: 120, height:120, marginBottom: -10 }}
            />
          <View style={styles.container} >

            <View style={{ marginBottom: 20 }} >
              <Funtime></Funtime>
            </View>

            <View style={{ marginTop:5 }} >

            <Text style={{ marginBottom: -30 }} > <MaterialCommunityIcons   name="email-outline" size={28} color="black" /> </Text>
              <View  style={{ marginLeft: 35, marginBottom: 20  }}>
                  
                  <TextInput
                    style={  styles.input}
                    label="email"
                     value={email}
                     onChangeText={setEmail}
                     keyboardType="email-address"
                     autoCapitalize='none'
                   >
                  </TextInput>
                  
                  {/* <Input style={{ marginLeft:20 }}
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize='none'
                  /> */}
              </View>              
            </View>

            <Text style={{ marginBottom: -30 }} > <MaterialCommunityIcons name="lock-outline" size={28} color="black" /> </Text>
            <View style={{ marginLeft: 35, marginBottom: 10 }} >
                <TextInput
                  style={  styles.input}
                    label="password"
                     value={password}
                     onChangeText={setPassword}
                     autoCapitalize='none'
                     secureTextEntry
                    >
                </TextInput>
                
                
                {/* <Input 
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                /> */}
            </View>
          
                <TouchableOpacity
                  onPress={handleSignUp}
                  >
                    <Text style={styles.button}>
                      {messageTarget}
                    </Text>
                </TouchableOpacity >

                <View style={{ flexDirection: "row",  textAlign: 'center', marginLeft: 40}}>
                <Text  >
                  {message}
                </Text>

                <TouchableOpacity 
                onPress={gotoLogin}
                >
                  <Text style={{ color: 'blue' }} >
                 {messageAction}
                  </Text>
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
    backgroundColor: 'white'
  },
  title: {
    fontSize: 36,
    marginBottom: 18,
    textAlign: 'center',
    fontWeight: "900",
  },
  container: {
    width: '80%',
    // maxWidth: 400,
    padding: 12,
    margin: 12,
    // borderColor: '#ccc',
    // borderWidth: 1,
    // borderRadius: 10,
    // backgroundColor: 'red',
  },
  prompt: {
    alignItems: 'center',
  },
  promptMessage: {
    fontSize: 16,
    color: '#333',
    marginRight: 10,
  },
  promptButton: {
    fontSize: 16,
    // color: Colors.primary,
  },
  button: {
    backgroundColor: Colors.green,
    color: Colors.white,
    fontSize: 22,
    padding: 11,
    // justifyContent: 'center',
    // alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius:10,
    marginVertical: 14,
    // marginTop: 12,
    marginBottom: 20,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    // borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 15,
    borderBottomColor: Colors.green,
    fontSize: 22,

  },
    
})

export default AuthScreen