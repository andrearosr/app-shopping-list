import React from 'react'
import { View, Text, Button, Modal } from 'react-native'
import styles from './styles'

function DeleteModal({ modalVisible, itemSelected, handleConfirmDelete }) {
  return (
    <Modal animationType='slide' visible={modalVisible}>
      <View>
        <View>
          <Text>¿Está seguro que desea eliminar?</Text>
          <Text>{itemSelected.value}</Text>
        </View>
        <View>
          <Button
            onPress={handleConfirmDelete}
            title="CONFIRMAR"
          />
        </View>
      </View>
    </Modal>
  )
}

export default DeleteModal