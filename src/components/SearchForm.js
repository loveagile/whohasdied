import React from 'react'

const SearchForm = (props) => {
  const handleSubmit = (value) => {}
  return (
    <form className='flex justify-center w-full' onSubmit={handleSubmit}>
      <input
        className='search-input focus:outline-none'
        placeholder='Search People'
      ></input>
      <button
        type='submit'
        className='search-btn md:pl-[50px] md:pr-[50px] sm:pl-[50px] sm:pr-[50px]'
      >
        Search
      </button>
    </form>
  )
}

export default SearchForm
