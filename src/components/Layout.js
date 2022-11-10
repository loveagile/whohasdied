import React from 'react'

import Header from './Header'

const Layout = ({ children }) => {
  return (
    <div className='mx-auto'>
      <Header />
      <div className='container mx-auto flex justify-center'>{children}</div>
    </div>
  )
}

export default Layout
