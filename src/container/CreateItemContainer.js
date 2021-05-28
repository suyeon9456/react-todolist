import React, { useState, useRef } from 'react'
import CreateItem from '../component/CreateItem'
import { useDispatch } from 'react-redux'

function CreateItemContainer () {
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  const id = useRef(3)

  const dispatch = useDispatch()

  const createTodo = (e) => {
    e.preventDefault()
    dispatch({ type: 'CREATE_ITEM', item: { title, contents, id, checked: false } })
    id.current += 1
    setTitle('')
    setContents('')
  }

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  }

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  return (
    <CreateItem
      title={title}
      contents={contents}
      createTodo={createTodo}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
    />
  )
}

export default CreateItemContainer
