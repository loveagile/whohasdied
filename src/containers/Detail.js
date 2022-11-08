import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Detail = () => {
  const init = {
    id: 1,
    photo: '/images/300-12.jpg',
    firstname: 'Jack',
    lastname: 'Ben',
    age: 30,
    birthday: '3 December 1990',
    birthplace: 'Wisla, Poland',
    deadDay: '3 December 1997',
    deadPlace: 'Wisla, Poland',
    description: `Lorem ipsum dolor sit amst, consetetur sadipscing eltr, sed diam nonumy eirmod tempor individen ut labore et fdolor mangean caccusam et jus to duo dolores et ea rebum. Stet clita kasd gubergren, no sea trakimata sanctus est lorem ipsum dolor sit amet elitr, sed diam nonumy eir mod tempor inviduunt ut labore et dolore manga aliquaym erat, sed diam volupatua. At vero esos et ac gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum doloro sit amet, conseteutr sadipscing elitr, sed diam nonumy eirmod tempor invideunt labore et dolor accsuam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor soelt, sed diam noenumy eirm tempor invidunt ut loatbore et dolore mangan alguqysn,teidnat woise diam.`,
    career: `Lorem ipsum dolor sit amst, consetetur sadipscing eltr, sed diam nonumy eirmod tempor individen ut labore et fdolor mangean caccusam et jus to duo dolores et ea rebum. Stet clita kasd gubergren, no sea trakimata sanctus est lorem ipsum dolor sit amet elitr, sed diam nonumy eir mod tempor inviduunt ut labore et dolore manga aliquaym erat, sed diam volupatua. At vero esos et ac gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum doloro sit amet, conseteutr sadipscing elitr, sed diam nonumy eirmod tempor invideunt labore et dolor accsuam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor soelt, sed diam noenumy eirm tempor invidunt ut loatbore et dolore mangan alguqysn,teidnat woise diam.`,
    death: `Lorem ipsum dolor sit amst, consetetur sadipscing eltr, sed diam nonumy eirmod tempor individen ut labore et fdolor mangean caccusam et jus to duo dolores et ea rebum. Stet clita kasd gubergren, no sea trakimata sanctus est lorem ipsum dolor sit amet elitr, sed diam nonumy eir mod tempor inviduunt ut labore et dolore manga aliquaym erat, sed diam volupatua. At vero esos et ac gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum doloro sit amet, conseteutr sadipscing elitr, sed diam nonumy eirmod tempor invideunt labore et dolor accsuam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor soelt, sed diam noenumy eirm tempor invidunt ut loatbore et dolore mangan alguqysn,teidnat woise diam.`,
  }
  const [detail, setDetail] = useState({})
  const id = useParams().id || ''
  useEffect(() => {
    setDetail(init)
  }, [])

  return (
    <div className='p-16'>
      <div className='flex w-full'>
        <img
          src={detail?.photo}
          width={230}
          height={230}
          className='rounded-lg'
          alt='photo'
        />
        <div className='ml-8 w-full'>
          <div className='pt-10 flex justify-between'>
            <div className='flex flex-col'>
              <p className='text-2xl font-semibold'>{`${detail?.firstname} ${detail?.lastname}`}</p>
              <div className='pt-4 flex justify-between'>
                <div className='flex'>
                  <p className='font-semibold text-md mr-1'>age:</p>
                  <p className='text-sm'>{detail?.age}</p>
                </div>
              </div>
            </div>
            <div className='flex'>
              <p className='mr-2 flex items-center'>Socials:</p>
              <div className='flex items-center'>
                <FontAwesomeIcon
                  className='mr-2 text-[#009ef7] cursor-pointer'
                  icon={['fab', 'facebook-f']}
                />
                <FontAwesomeIcon
                  className='mr-2 text-[#009ef7] cursor-pointer'
                  icon={['fab', 'twitter']}
                />
                <FontAwesomeIcon
                  className='mr-2 text-[#009ef7] cursor-pointer'
                  icon={['fab', 'instagram']}
                />
                <FontAwesomeIcon
                  className='mr-2 text-[#009ef7] cursor-pointer'
                  icon={['fab', 'youtube']}
                />
              </div>
            </div>
          </div>
          <div className='mt-6 flex'>
            <div className=''>
              <p className='font-semibold text-md'>Born:</p>
              <p className=''>{detail?.birthday}</p>
              <p className=''>{detail?.birthplace}</p>
            </div>
            <div className='ml-10'>
              <p className='font-semibold text-md'>Died:</p>
              <p className=''>{detail?.deadDay}</p>
              <p className=''>{detail?.deadPlace}</p>
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
