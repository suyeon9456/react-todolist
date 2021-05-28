import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin2Line, RiSearch2Line } from 'react-icons/ri'

function Item ({ title, contents, id, checked, todoCheck, todoDelete }) {
  return (
    <li
      onClick={() => todoCheck(id)}
      style={{ textDecoration: checked ? 'line-through' : 'none' }}
    >
      <h2 style={{ display: 'inline-block' }}>{title}</h2>
      <RiDeleteBin2Line onClick={() => todoDelete(id)} />
      <Link to={`/todo/${id}`}>
        <RiSearch2Line />
      </Link>
      <p>{contents}</p>
    </li>
  )
}

export default Item
