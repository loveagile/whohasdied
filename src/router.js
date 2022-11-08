import React from 'react'
import { Routes, Route } from 'react-router-dom'

import List from './containers/List'
import Detail from './containers/Detail'

const Router = () => {
  return (
    <Routes>
      <Route path='/list' element={<List />}></Route>
      <Route path='/detail/:id' element={<Detail />}></Route>
      <Route path='/' element={<List />}></Route>
    </Routes>
  )
}

export default Router
