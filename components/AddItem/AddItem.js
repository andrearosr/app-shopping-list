import React from 'react'
import { View, TextInput, Button } from 'react-native'
import styles from './styles'

function AddItem({ textInput, handleChangeText, handleOnPress }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={textInput}
        onChangeText={handleChangeText}
      />
      <Button
        onPress={handleOnPress}
        title="Add"
      />
    </View>
  )
}

export default AddItem