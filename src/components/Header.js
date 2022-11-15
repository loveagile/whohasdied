import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='box-content bg-[#f8f8f8]'>
      <div className='flex justify-between h-28 w-full'>
        <Link className='logo ml-4 md:ml-[90px]' to='/'>
          <img src='/logo.png' className='h-[25px] w-[151px]' alt='logo'></img>
        </Link>
        <button className='article-btn mr-4 md:mr-[100px]'>Articles</button>
      </div>
    </div>
  )
}

export default Header
