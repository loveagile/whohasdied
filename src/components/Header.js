import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  return (
    <div className='box-content bg-[#f8f8f8] pl-[50px] pr-[50px]'>
      <div className='container flex justify-between h-28 w-full'>
        <Link className='logo'>LOGO</Link>
        <button className='article-btn'>Articles</button>
      </div>
    </div>
  )
}

export default Header
