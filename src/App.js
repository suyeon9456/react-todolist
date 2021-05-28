import React from 'react'
import { Route } from 'react-router-dom'
import ItemDetailPage from './pages/ItemDetailPage'
import ItemListPage from './pages/ItemListPage'

function App () {
  return (
    <div>
      <Route path="/" component={ItemListPage} exact />
      <Route path="/todo/:id" component={ItemDetailPage} />
    </div>
  )
}

export default App
