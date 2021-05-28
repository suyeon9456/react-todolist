import React from 'react'
import ItemDetailContainer from '../container/ItemDetailContainer'

function ItemDetailPage ({ match }) {
  console.log('match::', match)
  const { id } = match.params
  return (
    <>
      <h1>상세페이지</h1>
      <ItemDetailContainer id={id} />
    </>
  )
}

export default ItemDetailPage
