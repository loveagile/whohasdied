import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Layout from './components/Layout'
import Router from './router'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  )
}

export default App
