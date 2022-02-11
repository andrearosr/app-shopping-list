import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AddItem from './components/AddItem/AddItem';
import Modal from './components/Modal/Modal';
import List from './components/List';

export default function App() {
  const [textInput, setTextInput] = useState('')
  const [itemList, setItemList] = useState([])

  const [itemSelected, setItemSelected] = useState({})
  const [modalVisible, setModalVisible] = useState(false)

  const handleChangeText = (text) => {
    setTextInput(text)
  }

  const handleOnPress = () => {
    setTextInput('')
    setItemList([
      ...itemList,
      {
        value: textInput,
        id: Math.random().toString(),
      },
    ])
  }

  const handleOnDelete = (item) => {
    setModalVisible(true)
    setItemSelected(item)
  }

  const handleConfirmDelete = () => {
    const { id } = itemSelected
    setItemList(itemList.filter(item => item.id !== id))
    setModalVisible(false)
    setItemSelected({})
  }

  return (
    <View style={styles.container}>
      <AddItem
        textInput={textInput}
        handleOnPress={handleOnPress}
        handleChangeText={handleChangeText}
      />

      <List
        itemList={itemList}
        handleOnDelete={handleOnDelete}
      />

      <Modal
        modalVisible={modalVisible}
        itemSelected={itemSelected}
        handleConfirmDelete={handleConfirmDelete}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
