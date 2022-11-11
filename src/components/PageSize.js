import React from 'react'

const PageSize = (props) => {
  const { list, size, setSize } = props

  return (
    <div class='flex justify-center items-center mr-3'>
      <p className='mt-3'>Page Size:</p>
      <div class='dropdown relative mt-3'>
        <button
          class='
            dropdown-toggle
            px-3
            py-2.5
            font-medium
            text-xs
            leading-tight
            rounded
            shadow-md
            hover:bg-gray-100 hover:shadow-lg
            focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0
            active:bg-gray-200 active:shadow-lg
            transition
            duration-150
            ease-in-out
            flex
            items-center
            whitespace-nowrap
          '
          type='button'
          id='dropdownMenuButton1'
          data-bs-toggle='dropdown'
          aria-expanded='false'
        >
          {size}
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='caret-down'
            class='w-2 ml-2'
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
          class='
            dropdown-menu
            min-w-max
            absolute
            hidden
            bg-white
            text-base
            z-50
            float-left
            py-2
            list-none
            text-left
            rounded-lg
            shadow-lg
            mt-1
            hidden
            m-0
            bg-clip-padding
            border-none
          '
          aria-labelledby='dropdownMenuButton1'
        >
          {list?.map((item) => (
            <li>
              <p
                class='
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                '
                onClick={() => {
                  setSize(item)
                }}
              >
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageSize
