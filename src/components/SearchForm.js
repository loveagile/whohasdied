import React, { useState } from 'react'

const SearchForm = (props) => {
  const { search, setSearch } = props
  const [key, setKey] = useState(search)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearch(key)
  }

  return (
    <form className='flex justify-center w-full' onSubmit={handleSubmit}>
      <input
        className='search-input focus:outline-none'
        placeholder='Search People'
        value={key}
        onChange={(e) => {
          setKey(e.target.value)
        }}
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
