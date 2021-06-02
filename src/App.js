import React from 'react'
import { Route } from 'react-router-dom'
import ItemDetailPage from './pages/ItemDetailPage'
import ItemListPage from './pages/ItemListPage'
import { FormProvider } from './context/TodoContext'

function App () {
  console.log(FormProvider)
  return (
    <FormProvider>
      <Route path="/" component={ItemListPage} exact />
      <Route path="/todo/:id" component={ItemDetailPage} />
    </FormProvider>
  )
}

export default App
