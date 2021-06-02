import React, { createContext, useState, useMemo } from 'react'

export const formContext = createContext()

export const FormProvider = ({ children }) => {
  const [title, setTitle] = useState('')
  const [contents, setContents] = useState('')
  // const [state, dispatch] = useReducer(formReducer, initialForm)

  const value = useMemo(() => ({ title, setTitle, contents, setContents }), [title, setTitle, contents, setContents])

  console.log('children', children)
  return (
    <formContext.Provider value={value}>
      {children}
    </formContext.Provider>
  )
}
