import React, { useRef, useEffect } from 'react'
import Datepicker from 'flowbite-datepicker/Datepicker'

const DatePicker = (props) => {
  const { name, label, type, value, setValue } = props
  const datepickerRef = useRef()

  useEffect(() => {
    const datepicker = new Datepicker(datepickerRef.current, {})

    const handleDateChange = (e) => {
      setValue(e.target.value)
    }
    datepickerRef.current.addEventListener('changeDate', handleDateChange)

    return () =>
      datepickerRef?.current?.removeEventListener(
        'changeDate',
        handleDateChange
      )
  }, [])

  const handleChange = (e) => {
    e.stopPropagation()
    setValue(e.target.value)
  }

  return (
    <div className='relative z-0 mb-6 w-full group'>
      <input
        datepicker
        name={name}
        ref={datepickerRef}
        type={type}
        datepicker-format='dd/MM/yyyy'
        value={value}
        onChange={handleChange}
        className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer'
      />
      <label
        htmlFor={name}
        className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
      >
        {label}
      </label>
    </div>
  )
}

export default DatePicker
