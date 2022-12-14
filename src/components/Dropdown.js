import React from 'react'

const Dropdown = (props) => {
  const { title, list } = props

  return (
    <div className='dropdown relative mr-2'>
      <button
        className='dropdown-toggle rounded-xl flex items-center bg-[#f7f7f7] p-2'
        type='button'
        id='dropdownMenu'
        data-bs-toggle='dropdown'
        aria-expanded='false'
      >
        <div className='flex'>
          <p className='text-md font-semibold'>{title}:</p>
          <p className='flex items-center ml-1 text-sm'>{list[0]}</p>
        </div>
        <svg
          aria-hidden='true'
          focusable='false'
          data-prefix='fas'
          data-icon='caret-down'
          className='w-2 ml-2'
          role='img'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
        >
          <path
            fill='currentColor'
            d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
          ></path>
        </svg>
      </button>
      <ul
        className='
        dropdown-menu
        min-w-max
        absolute
        hidden
        bg-white
        z-50
        float-left
        py-2
        rounded-lg
        shadow-lg
        mt-1
        bg-clip-padding
        '
        aria-labelledby='dropdownMenu'
      >
        <li>
          <a
            className='dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100'
            href='#'
          >
            All
          </a>
        </li>
        <li>
          <a
            className='dropdown-item
            text-sm
            py-2
            px-4
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100'
            href='#'
          >
            selected
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Dropdown
