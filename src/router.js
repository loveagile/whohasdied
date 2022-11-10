import React from 'react'
import { Routes, Route } from 'react-router-dom'

import List from './containers/List'
import Detail from './containers/Detail'
import Login from './containers/Login'
import Add from './containers/Add'

const AdminRouter = () => {
  return (
    <Routes>
      <Route path='/admin/add' element={<Add />}></Route>
    </Routes>
  )
}

const UserRouter = () => {
  return (
    <Routes>
      <Route path='/list' element={<List />}></Route>
      <Route path='/admin' element={<Login />}></Route>
      <Route path='/:fullname' element={<Detail />}></Route>
      <Route path='/' element={<List />}></Route>
    </Routes>
  )
}

const Router = () => {
  const admin_token = localStorage.getItem('admin_token')
  return admin_token ? <AdminRouter /> : <UserRouter />
}

export default Router
