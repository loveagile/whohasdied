import React from 'react'
import { Routes, Route } from 'react-router-dom'

import List from './containers/List'
import Detail from './containers/Detail'
import Login from './containers/Login'
import Add from './containers/Add'

const Router = () => {
  return (
    <Routes>
      <Route path='/list' element={<List />}></Route>
      <Route path='/add' element={<Add />}></Route>
      <Route path='/admin' element={<Login />}></Route>
      <Route path='/:urlname' element={<Detail />}></Route>
      <Route path='/' element={<List />}></Route>
    </Routes>
  )
}

export default Router
