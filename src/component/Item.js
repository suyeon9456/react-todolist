import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin2Line, RiSearch2Line } from 'react-icons/ri'

function Item ({ title, contents, id, checked, todoCheck, todoDelete }) {
  const test = useCallback(() => {
    todoCheck(id)
  }, [id])

  const delTest = useCallback(() => {
    todoDelete(id)
  }, [id])
  return (
    <li
      style={{ textDecoration: checked ? 'line-through' : 'none' }}
    >
      <h2 onClick={test}>{title}</h2>
      <RiDeleteBin2Line onClick={delTest} />
      <Link to={`/todo/${id}`}>
        <RiSearch2Line />
      </Link>
      <p>{contents}</p>
    </li>
  )
}

export default React.memo(Item)
