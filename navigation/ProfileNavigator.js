import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import MusicScreen from '../screens/MusicScreen';
import MusicDetailScreen from '../screens/MusicDetailScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function ProfileNavigator () {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: true,
        title: 'Profile'
    }}>
        {/* <Stack.Screen name="Categories" component={CategoriesScreen} /> */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        
        {/* <Stack.Screen 
        name="Music" 
        component={MusicScreen} 
        options={{
          
        }}
        />         */}
        

      </Stack.Navigator>
  );
}

export default ProfileNavigator;




