import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Dropdown from './Dropdown'

const Table = (props) => {
  const { list } = props
  const navigate = useNavigate()

  return (
    <div className='mt-[50px] min-w-[350px]'>
      <div className='w-full mx-auto bg-white rounded-sm'>
        <header className='px-5 py-4 border-b border-gray-100 flex justify-between'>
          <h2 className='font-semibold text-gray-800 text-2xl'>Title</h2>
          <div className='flex'>
            <button
              type='button'
              className='p-2 pl-4 pr-4 bg-[#009ef7] text-white rounded-lg mr-2 font-semibold'
              onClick={() => {
                navigate('/add')
              }}
            >
              <FontAwesomeIcon className='mr-1' icon={['fas', 'fa-plus']} />
              Add
            </button>
            <Dropdown title='Status' list={['All', 'Selected']}></Dropdown>
            <Dropdown title='Age' list={['All', 'Selected']}></Dropdown>
            <Dropdown title='Sort by' list={['Date', 'Selected']}></Dropdown>
          </div>
        </header>
        <div className='p-3'>
          <div className='overflow-x-auto'>
            <table className='table-auto w-full'>
              <thead className='mb-5 font-semibold text-[#009ef7]'>
                <tr>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='table-header'>Name</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='table-header'>Age</div>
                  </th>
                  <th className='p-2 whitespace-nowrap hidden sm:block'>
                    <div className='table-header'>Where</div>
                  </th>
                  <th className='p-2 whitespace-nowrap'>
                    <div className='table-header'>When</div>
                  </th>
                </tr>
              </thead>
              <tbody className='text-sm divide-y divide-gray-100'>
                {list.map((item, index) => (
                  <tr
                    className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    key={index}
                    onClick={() => {
                      navigate(`/detail/${item.id}`)
                    }}
                  >
                    <td className='table-content min-w-[140px]'>
                      <div className='flex items-center'>
                        <div className='flex-shrink-0 mr-2 sm:mr-3'>
                          <img
                            className='rounded-lg '
                            src={item.photo}
                            width='65'
                            height='65'
                            alt='photo'
                          />
                        </div>
                        <div className='font-medium text-gray-800'>
                          {item.text}
                        </div>
                      </div>
                    </td>
                    <td className='table-content'>
                      <div className='text-left'>{item.age}</div>
                    </td>
                    <td className='table-content hidden sm:table-cell'>
                      <div className='text-left'>{item.where}</div>
                    </td>
                    <td className='table-content'>
                      <div className='text-left'>{item.when}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <div classNameName='table w-full h-full flex flex-col justify-center'>
        <div classNameName='table-header-group'>
          <div classNameName='table-row'>
            <div classNameName='table-cell text-left'>Name</div>
            <div classNameName='table-cell text-left'>Age</div>
            <div classNameName='table-cell text-left'>Where</div>
            <div classNameName='table-cell text-left'>When</div>
          </div>
        </div>
        <div classNameName='table-row-group'>
          {list.map((item) => (
            <div classNameName='table-row' key={item.id}>
              <div classNameName='table-cell flex items-center'>
                <img
                  src={item.photo}
                  classNameName='w-[75px] rounded-lg'
                  alt='photo'
                ></img>
              </div>
              <div classNameName='table-cell'>{item.text}</div>
              <div classNameName='table-cell'>{item.where}</div>
              <div classNameName='table-cell'>{item.when}</div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  )
}

export default Table
