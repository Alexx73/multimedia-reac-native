import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ProductsScreen from '../screens/ProductsScreen';
import MusicScreen from '../screens/MusicScreen';
import MusicDetailScreen from '../screens/MusicDetailScreen';

const Stack = createNativeStackNavigator();

function ShopNavigator () {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Products" component={ProductsScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />        
        <Stack.Screen name="MusicDetails" component={MusicDetailScreen} />


        <Stack.Screen name="Details" component={ProductDetailScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ShopNavigator;




