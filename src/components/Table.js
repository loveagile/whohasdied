import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { confirmAlert } from 'react-confirm-alert'
import moment from 'moment'
import { toast } from 'react-toastify'
import 'react-confirm-alert/src/react-confirm-alert.css'

import TrashIcon from './TrashIcon'
import { deleteDeadPerson } from '../api/apiCaller'
import { isAdmin } from '../config/utils'

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
  } else if (days > 1) {
    return `${days} days ago`
  } else if (days === 1) {
    return 'yesterday'
  } else if (days < 1) {
    return 'today'
  }
}

const Table = (props) => {
  const { list, refresh, setRefresh } = props
  const navigate = useNavigate()
  const admin_token = localStorage.getItem('admin_token')

  const handleDelete = (urlname) => {
    confirmAlert({
      title: 'Delete',
      message: 'Are you sure to delete this person?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            deleteDeadPerson(urlname)
              .then(() => {
                setRefresh(!refresh)
                toast.success('Deleted successfully!')
              })
              .catch(() => {
                toast.error('Deleting is failed')
              })
          },
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    })
  }

  return (
    <div className='mt-[50px] min-w-[350px]'>
      <div className='w-full mx-auto bg-white rounded-sm'>
        <header className='px-5 py-4 border-b border-gray-100 flex justify-between'>
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
                  <th
                    className={
                      'p-2 whitespace-nowrap ' + (isAdmin() ? '' : 'hidden')
                    }
                  >
                    <div className='table-header'></div>
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
                        navigate(`/${item?.urlname}`)
                      }}
                    >
                      <td className='table-content min-w-[140px]'>
                        <Link
                          className='h-[80px] w-full flex'
                          to={`/${item?.urlname}`}
                        >
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
                        </Link>
                      </td>
                      <td className='table-content'>
                        <Link
                          className='h-[80px] w-full flex'
                          to={`/${item?.urlname}`}
                        >
                          <div className='text-left flex items-center'>
                            {item?.age}
                          </div>
                        </Link>
                      </td>
                      <td className='table-content hidden sm:table-cell'>
                        <Link
                          className='h-[80px] w-full flex'
                          to={`/${item?.urlname}`}
                        >
                          <div className='text-left flex items-center'>
                            {item?.deadPlace}
                          </div>
                        </Link>
                      </td>
                      <td className='table-content'>
                        <Link
                          className='h-[80px] w-full flex'
                          to={`/${item?.urlname}`}
                        >
                          <div className='text-left flex items-center'>
                            {getDuration(item?.deadDay)}
                          </div>
                        </Link>
                      </td>
                      <td
                        className={
                          'table-content ' + (isAdmin() ? '' : 'hidden')
                        }
                      >
                        <Link
                          className='h-[80px] w-full flex'
                          to={`/${item?.urlname}`}
                        >
                          <div
                            className='hover:cursor-pointer flex items-center'
                            onClick={(e) => {
                              e.stopPropagation()
                              handleDelete(item?.urlname)
                            }}
                          >
                            <TrashIcon></TrashIcon>
                          </div>
                        </Link>
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
