import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from './styles'

function ListItem({ item, handleOnDelete }){
  return (
    <View style={styles.item}>
      <Text>{item.value}</Text>
      <Button onPress={handleOnDelete.bind(this, item)} title="X" />
    </View>
  )
}

export default ListItem