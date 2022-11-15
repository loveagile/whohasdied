import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

const getDuration = (date) => {
  const m1 = moment(date)
  const m2 = moment(new Date())

  const duration = moment.duration(m2.diff(m1))
  const days = duration.days(),
    months = duration.months(),
    years = duration.years()

  if (years) {
    return `${years} years ago`
  } else if (months) {
    return `${months} months ago`
  } else if (days) {
    return `${days} days ago`
  } else {
    return 'today'
  }
}

const Table = (props) => {
  const { list } = props
  const navigate = useNavigate()
  const admin_token = localStorage.getItem('admin_token')

  return (
    <div className='mt-[50px] min-w-[350px]'>
      <div className='w-full mx-auto bg-white rounded-sm'>
        <header className='px-5 py-4 border-b border-gray-100 flex justify-between'>
          <h2 className='font-semibold text-gray-800 text-2xl'>Title</h2>
          <div className='flex'>
            <button
              type='button'
              className={
                'p-2 pl-4 pr-4 bg-[#009ef7] text-white rounded-lg mr-2 font-semibold ' +
                (admin_token ? '' : 'hidden')
              }
              onClick={() => {
                navigate('/add')
              }}
            >
              <FontAwesomeIcon className='mr-1' icon={['fas', 'fa-plus']} />
              Add
            </button>
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
                {list &&
                  list.length &&
                  list.map((item, index) => (
                    <tr
                      className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                      key={index}
                      onClick={() => {
                        navigate(`/${item.urlname}`)
                      }}
                    >
                      <td className='table-content min-w-[140px]'>
                        <div className='flex items-center'>
                          <div className='flex-shrink-0 mr-2 sm:mr-3'>
                            <img
                              className='rounded-lg '
                              src={item?.photo}
                              width='65'
                              height='65'
                              alt='photo'
                            />
                          </div>
                          <div className='font-medium text-gray-800'>
                            {item?.fullname}
                          </div>
                        </div>
                      </td>
                      <td className='table-content'>
                        <div className='text-left'>{item?.age}</div>
                      </td>
                      <td className='table-content hidden sm:table-cell'>
                        <div className='text-left'>{item?.deadPlace}</div>
                      </td>
                      <td className='table-content'>
                        <div className='text-left'>
                          {getDuration(item?.deadDay)}
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
