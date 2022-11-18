import React from 'react'
import { Link } from 'react-router-dom'

import { isAdmin } from '../config/utils'

const Header = () => {
  return (
    <div className='box-content bg-[#f8f8f8]'>
      <div className='flex justify-between h-28 w-full'>
        <Link className='logo ml-4 md:ml-[90px]' to='/'>
          <img src='/logo.png' className='h-[25px] w-[151px]' alt='logo'></img>
        </Link>
        <div className='flex'>
          <button className='article-btn mr-5 md:mr-[100px]'>Articles</button>
          <Link
            className={
              `mr-4 text-lg flex items-center ` + (isAdmin() ? '' : 'hidden')
            }
            to='/admin'
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
