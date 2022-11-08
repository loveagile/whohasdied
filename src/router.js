import React from 'react'
import { Routes, Route } from 'react-router-dom'

import List from './containers/List'

const Router = () => {
  return (
    <Routes>
      <Route path='/list' element={<List />}></Route>
      <Route path='/' element={<List />}></Route>
    </Routes>
  )
}

export default Router
