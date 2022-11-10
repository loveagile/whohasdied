import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'

import { getDeadPerson } from '../api/apiCaller'
import { SERVER_URL } from '../config'

const Detail = () => {
  const urlname = useParams().urlname || ''
  const [detail, setDetail] = useState({})

  useEffect(() => {
    getDeadPerson(urlname).then((data) => {
      setDetail(data.data)
    })
  }, [])

  return (
    <div className='p-16 mt-10'>
      <div className='block w-full md:flex md:mr-8'>
        <img
          src={SERVER_URL + detail?.photo}
          width={230}
          height={230}
          className='rounded-lg'
          alt='photo'
        />
        <div className='md:ml-8 w-full'>
          <div className='pt-10 flex justify-between'>
            <div className='flex flex-col'>
              <p className='text-2xl font-semibold'>{detail?.fullname}</p>
              <div className='pt-4 flex justify-between'>
                <div className='flex'>
                  <p className='font-semibold text-lg mr-1'>age:</p>
                  <p className='text-md flex items-center'>{detail?.age}</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <p className='mr-2 flex items-top text-xl'>Socials:</p>
              <div className='flex items-top mt-1'>
                <a href={detail?.facebook} target='blank'>
                  <FontAwesomeIcon
                    className={
                      'mr-3 text-[#009ef7] text-2xl cursor-pointer ' +
                      (detail?.facebook ? '' : 'hidden')
                    }
                    icon={['fab', 'facebook-f']}
                  />
                </a>
                <a href={detail?.twitter} target='blank'>
                  <FontAwesomeIcon
                    className={
                      'mr-3 text-[#009ef7] text-2xl cursor-pointer ' +
                      (detail?.twitter ? '' : 'hidden')
                    }
                    icon={['fab', 'twitter']}
                  />
                </a>
                <a href={detail?.instagram} target='blank'>
                  <FontAwesomeIcon
                    className={
                      'mr-3 text-[#009ef7] text-2xl cursor-pointer ' +
                      (detail?.instagram ? '' : 'hidden')
                    }
                    icon={['fab', 'instagram']}
                  />
                </a>
                <a href={detail?.youtube} target='blank'>
                  <FontAwesomeIcon
                    className={
                      'mr-3 text-[#009ef7] text-2xl cursor-pointer ' +
                      (detail?.youtube ? '' : 'hidden')
                    }
                    icon={['fab', 'youtube']}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className='mt-6 flex'>
            <div className=''>
              <p className='font-semibold text-md'>Born:</p>
              <p className=''>
                {moment(detail?.birthday).format('d MMMM YYYY.')}
              </p>
              <p className=''>{detail?.birthplace}</p>
            </div>
            <div className='ml-10'>
              <p className='font-semibold text-md'>Died:</p>
              <p className=''>
                {moment(detail?.deadDay).format('d MMMM YYYY.')}
              </p>
              <p className=''>{detail?.deadPlace}</p>
            </div>
            <div className='ml-10'>
              <p className='font-semibold text-md'>Cause of death:</p>
              <p className='max-w-[200px]'>{detail?.reason}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <p className='font-semibold text-xl'>Description</p>
        <span className='text-sm'>{detail?.description}</span>
      </div>
      <div className='mt-10'>
        <p className='font-semibold text-xl'>Career</p>
        <span className='text-sm'>{detail?.career}</span>
      </div>
      <div className='mt-10'>
        <p className='font-semibold text-xl'>Death</p>
        <span className='text-sm'>{detail?.death}</span>
      </div>
    </div>
  )
}

export default Detail
