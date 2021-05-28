import React from 'react'

function CreateItem ({ title, contents, createTodo, onChangeTitle, onChangeContents }) {
  return (
    <form onSubmit={createTodo}>
      <input type="text" value={title} onChange={onChangeTitle} />
      <textarea value={contents} onChange={onChangeContents} />
      <button type="submit">등록</button>
    </form>
  )
}

export default CreateItem
