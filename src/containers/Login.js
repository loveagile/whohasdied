import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { login } from '../api/apiCaller'

const Login = () => {
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(password).then((data) => {
      localStorage.setItem('admin_token', data.data.token)
      navigate('/list')
    })
  }

  return (
    <div className='shadow-lg w-full flex justify-center mt-10 md:max-w-lg p-10'>
      <div className='space-y-2 w-full'>
        <h3 className='text-3xl font-semibold flex justify-center mb-6'>
          Login
        </h3>
        <form onSubmit={handleSubmit}>
          <div className='form-group mb-5'>
            <label
              for='name'
              className='form-label inline-block mb-2 text-gray-700'
            >
              Password
            </label>
            <input
              type='password'
              className='form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
              id='password'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              aria-describedby='password'
              placeholder='Enter password'
            ></input>
          </div>
          <div className='flex justify-between'>
            <Link to='/list' className='p-2'>
              <FontAwesomeIcon
                className='mr-2'
                icon={['fas', 'fa-arrow-rotate-left']}
              />
              To List
            </Link>
            <button
              type='submit'
              className='p-2 bg-[#009ef7] text-white rounded'
            >
              <FontAwesomeIcon
                className='text-white mr-2'
                icon={['fas', 'fa-sign-in-alt']}
              />
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
