import React from 'react'
import { FlatList } from 'react-native'
import ListItem from './ListItem'

function List({ itemList, ...rest }) {
  return (
    <FlatList
      data={itemList}
      renderItem={({ item }) => <ListItem item={item} {...rest} />}
      keyExtractor={item => item.id}
      horizontal
    />
  )
}

export default List