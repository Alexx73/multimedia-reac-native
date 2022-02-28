import React from 'react'

import { Text, View, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { DATOS } from '../data/datos'

function List (itemList, item) {

    renderItemComponent = (itemData) => // 1
  <TouchableOpacity>   // 2
      <Image style={styles.image} source={{ uri: itemData.source }} /> // 3
  </TouchableOpacity>

    return (
        <FlatList
        data={DATOS}
        renderItem={item => renderItemComponent(item)}
        />
            
        
    )
}


const styles = StyleSheet.create({
    
})

export default List