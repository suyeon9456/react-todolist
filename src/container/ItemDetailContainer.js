import React, { useEffect, useState, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemDetail from '../component/ItemDetail'
import { getItem, updateItem } from '../module/itemList'
import { formContext } from '../context/TodoContext'

function ItemDetailContainer ({ id = 1 }) {
  // const [updateTitle, setUdateTitle] = useState('')
  // const [updateContents, setUdateContents] = useState('')
  const { title: updateTitle, setTitle: setUdateTitle, contents: updateContents, setContents: setUdateContents } = useContext(formContext)
  const [isUpdate, setIsUpdate] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getItem(parseInt(id)))
  }, [id])

  const todoUpdate = e => {
    e.preventDefault()
    dispatch(updateItem({ id: parseInt(id), title: updateTitle, contents: updateContents }))
    setIsUpdate(false)
    setUdateTitle('')
    setUdateContents('')
  }
  const onChangeTitle = (e) => {
    setUdateTitle(e.target.value)
  }

  const onChangeContents = (e) => {
    setUdateContents(e.target.value)
  }

  const onUpdateStatus = () => {
    setIsUpdate(true)
    setUdateTitle(title)
    setUdateContents(contents)
  }

  const { title = '', contents = '' } = useSelector(state => state.itemListReducer.todo)

  return (
    <ItemDetail
      id={id}
      title={title}
      contents={contents}
      updateTitle={updateTitle}
      updateContents={updateContents}
      isUpdate={isUpdate}
      todoUpdate={todoUpdate}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onUpdateStatus={onUpdateStatus}
    />
  )
}

export default ItemDetailContainer
