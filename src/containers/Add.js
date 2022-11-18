import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import DatePicker from '../components/DatePicker'
import TextInput from '../components/TextInput'
import TextareaField from '../components/TextareaField'
import { addDeadPerson } from '../api/apiCaller'

const Add = () => {
  const [photo, setPhoto] = useState('')
  const [fullname, setFullname] = useState('')
  const [age, setAge] = useState()
  const [birthday, setBirthday] = useState()
  const [birthplace, setBirthplace] = useState('')
  const [deadDay, setDeadDay] = useState()
  const [deadPlace, setDeadPlace] = useState('')
  const [career, setCareer] = useState('')
  const [death, setDeath] = useState('')
  const [reason, setReason] = useState('')
  const [facebook, setFacebook] = useState('')
  const [twitter, setTwitter] = useState('')
  const [instagram, setInstagram] = useState('')
  const [youtube, setYoutube] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('admin_token')) {
      navigate('/')
    }
  }, [])

  const onFileChange = (event) => {
    setPhoto(event.target?.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('photo', photo)
    formData.append('fullname', fullname)
    formData.append('age', age)
    formData.append('birthday', birthday)
    formData.append('birthplace', birthplace)
    formData.append('deadDay', deadDay)
    formData.append('deadPlace', deadPlace)
    formData.append('career', career)
    formData.append('death', death)
    formData.append('reason', reason)
    formData.append('facebook', facebook)
    formData.append('twitter', twitter)
    formData.append('instagram', instagram)
    formData.append('youtube', youtube)

    addDeadPerson(formData)
      .then((data) => {
        navigate('/list')
        toast('The person was added successfully!', 'success')
      })
      .catch((error) => {
        toast.error(error?.message)
      })
  }

  return (
    <div className='mt-10'>
      <form onSubmit={handleSubmit}>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <div className='form-group mb-5'>
            <input
              className='form-control block w-full px-3 py-1.5 text-base font-normal h-full text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white  :border-blue-600 focus:outline-none'
              type='file'
              id='formFile'
              onChange={onFileChange}
            />
          </div>
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            name='fullname'
            label='Full name'
            type='text'
            value={fullname}
            setValue={setFullname}
          />
          <TextInput
            name='age'
            label='Age'
            type='number'
            value={age}
            setValue={setAge}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <DatePicker
            name='birthday'
            label='Birthday'
            type='text'
            value={birthday}
            setValue={setBirthday}
          />
          <TextInput
            name='birthplace'
            label='Birthplace'
            type='text'
            value={birthplace}
            setValue={setBirthplace}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <DatePicker
            name='deadDay'
            label='Dead day'
            type='text'
            value={deadDay}
            setValue={setDeadDay}
          />
          <TextInput
            name='deadPlace'
            label='Dead place'
            type='text'
            value={deadPlace}
            setValue={setDeadPlace}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            name='reason'
            label='Cause of death'
            type='text'
            value={reason}
            setValue={setReason}
          />
        </div>
        <div className='grid grid-cols'>
          <TextareaField
            name='career'
            type='tel'
            label='Career'
            value={career}
            setValue={setCareer}
          />
        </div>
        <div className='grid grid-cols'>
          <TextareaField
            name='death'
            type='tel'
            label='Death'
            value={death}
            setValue={setDeath}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            name='facebook'
            label='Facebook'
            type='text'
            value={facebook}
            setValue={setFacebook}
          />
          <TextInput
            name='twitter'
            label='Twitter'
            type='text'
            value={twitter}
            setValue={setTwitter}
          />
        </div>
        <div className='grid md:grid-cols-2 md:gap-6'>
          <TextInput
            name='instagram'
            label='Instagram'
            type='text'
            value={instagram}
            setValue={setInstagram}
          />
          <TextInput
            name='youtube'
            label='Youtube'
            type='text'
            value={youtube}
            setValue={setYoutube}
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
