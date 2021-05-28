import React from 'react'
import ItemList from '../component/ItemList'
import { useSelector, useDispatch } from 'react-redux'
import { deleteItem, toggleItem } from '../module/itemList'

function ItemListContainer () {
  const items = useSelector(state => state.itemListReducer.todos)
  console.log(items)
  const dispatch = useDispatch()
  console.log(dispatch)

  const todoCheck = id => {
    dispatch(toggleItem(id))
  }

  const todoDelete = id => {
    dispatch(deleteItem(id))
  }

  return (
    <ItemList items={items} todoCheck={todoCheck} todoDelete={todoDelete} />
  )
}

export default ItemListContainer
