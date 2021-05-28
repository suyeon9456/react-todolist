import React from 'react'
import Item from './Item'

function ItemList ({ items, todoCheck, todoDelete }) {
  return (
    <ul>
      {items.map(({ id, title, contents, checked }) =>
        <Item
          key={id}
          id={id}
          title={title}
          contents={contents}
          checked={checked}
          todoCheck={todoCheck}
          todoDelete={todoDelete}
        />
      )}
    </ul>
  )
}

export default ItemList
