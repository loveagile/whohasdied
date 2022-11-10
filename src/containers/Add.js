import React from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as yup from 'yup'

import DatePicker from '../components/DatePicker'
import TextInput from '../components/TextInput'
import TextareaField from '../components/TextareaField'

const validationSchema = yup.object({
  fullname: yup.string().required('Fullname is required'),
  age: yup.number().required('Age is required'),
  when: yup.date().required('Date is required'),
  where: yup.string().required('DeadPlace is required'),
})

const Add = () => {
  const initial = {
    fullname: '',
    age: '',
    birthday: '',
    birthplace: '',
    deadDay: new Date(),
    deadPlace: '',
    description: '',
    career: '',
    death: '',
    reason: '',
    facebook: '',
    twitter: '',
    instagram: '',
    youtube: '',
  }
  const formik = useFormik({
    initialValues: initial,
    validationSchema: validationSchema,
    onSubmit: (values) => {},
  })

  return (
    <div className='mt-10'>
      <form onSubmit={formik.handleSubmit}>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='form-group mb-5'>
            <input
              className='form-control block w-full px-3 py-1.5 text-base font-normal h-full text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  :border-blue-600 focus:outline-none'
              type='file'
              id='formFile'
            />
          </div>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            name='fullname'
            label='Full name'
            type='text'
            value={formik.values?.fullname}
            setValue={formik.setFieldValue}
          />
          <TextInput
            name='age'
            label='Age'
            type='number'
            value={formik.values?.age}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <DatePicker
            name='birthday'
            label='Birthday'
            type='text'
            value={formik.values?.birthday}
            setValue={formik.setFieldValue}
          />
          <TextInput
            name='birthplace'
            label='Birthplace'
            type='text'
            value={formik.values?.birthplace}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <DatePicker
            name='deadDay'
            label='Dead day'
            type='text'
            value={formik.values?.deadDay}
            setValue={formik.setFieldValue}
          />
          <TextInput
            name='deadPlace'
            label='Dead place'
            type='text'
            value={formik.values?.deadPlace}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            name='reason'
            label='Cause of death'
            type='text'
            value={formik.values?.reason}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='grid grid-cols'>
          <TextareaField
            name='description'
            type='tel'
            label='Description'
            value={formik.values?.description}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='grid grid-cols'>
          <TextareaField
            name='career'
            type='tel'
            label='Career'
            value={formik.values?.career}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='grid grid-cols'>
          <TextareaField
            name='death'
            type='tel'
            label='Death'
            value={formik.values?.death}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            name='facebook'
            label='Facebook'
            type='text'
            value={formik.values?.facebook}
            setValue={formik.setFieldValue}
          />
          <TextInput
            name='twitter'
            label='Twitter'
            type='text'
            value={formik.values?.twitter}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            name='instagram'
            label='Instagram'
            type='text'
            value={formik.values?.instagram}
            setValue={formik.setFieldValue}
          />
          <TextInput
            name='youtube'
            label='Youtube'
            type='text'
            value={formik.values?.youtube}
            setValue={formik.setFieldValue}
          />
        </div>
        <div className='flex justify-between'>
          <Link
            to='/list'
            className='p-2 focus:ring-4 focus:outline-none font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <FontAwesomeIcon
              className='mr-2'
              icon={['fas', 'fa-arrow-rotate-left']}
            />
            To List
          </Link>
          <button
            type='submit'
            className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            <FontAwesomeIcon
              className='text-white mr-2'
              icon={['fas', 'fa-floppy-disk']}
            />
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
