import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'flowbite/dist/flowbite.js'
import 'flowbite/dist/datepicker.js'
import 'tw-elements/dist/js/index.min.js'

import Layout from './components/Layout'
import Router from './router'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
