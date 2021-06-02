import React from 'react'
import ItemDetailContainer from '../container/ItemDetailContainer'
import useTodoDetail from '../hook/useTodoDetail'

function ItemDetailPage () {
  const id = useTodoDetail()
  console.log(id)
  return (
    <>
      <h1>상세페이지</h1>
      <ItemDetailContainer id={id} />
    </>
  )
}

export default ItemDetailPage
