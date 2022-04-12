import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import MusicScreen from '../screens/MusicScreen';
import MusicDetailScreen from '../screens/MusicDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Colors from '../global/Colors';

const Stack = createNativeStackNavigator();

function ProfileNavigator () {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: 'Profiles'
    }}>
        {/* <Stack.Screen name="Categories" component={CategoriesScreen} /> */}
        <Stack.Screen 
        name="Profile" component={ProfileScreen}

        options={{
          title: 'Perfil',
          headerTitleStyle:{
              color: Colors.white,
              fontSize:25,
              fontWeight: 'bold'
          },
          headerStyle: {
              backgroundColor: '#595959',
              color: 'white'
          }
      }}
         />
        
      
      

      </Stack.Navigator>
  );
}

export default ProfileNavigator;




