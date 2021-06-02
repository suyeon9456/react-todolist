import React from 'react'
import { RiDraftLine, RiCheckboxCircleLine } from 'react-icons/ri'

function ItemDetail ({ title, contents, updateTitle, updateContents, isUpdate, todoUpdate, onChangeTitle, onChangeContents, onUpdateStatus }) {
  // const [isUpdate, setIsUpdate] = useState(false)
  // const { title, setTitle, contents, setContents } = useContext(formContext)
  return (
    <div>
      {isUpdate
        ? (
          <>
            <form onSubmit={todoUpdate}>
              <input type="text" value={updateTitle} onChange={onChangeTitle} />
              <textarea value={updateContents} onChange={onChangeContents} />
              <button type="submit"><RiCheckboxCircleLine />등록</button>
            </form>
          </>
          )
        : (
          <>
            <h2>{title}</h2>
            <RiDraftLine onClick={onUpdateStatus} />
            <p>{contents}</p>
          </>
          )}
    </div>
  )
}

export default ItemDetail
