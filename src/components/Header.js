import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='box-content bg-[#f8f8f8]'>
      <div className='container flex justify-between h-28 w-full'>
        <Link className='logo md:ml-[90px]'>
          <img src='/logo.png' className='h-[25px] w-[151px]' alt='logo'></img>
        </Link>
        <button className='article-btn'>Articles</button>
      </div>
    </div>
  )
}

export default Header
