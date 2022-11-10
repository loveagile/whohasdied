import React, { useEffect, useState } from 'react'

import SearchForm from '../components/SearchForm'
import Table from '../components/Table'
import { getDeadPeople } from '../api/apiCaller'

const List = () => {
  const [people, setPeople] = useState()
  useEffect(() => {
    console.log('effect')
    getDeadPeople().then((list) => {
      setPeople(list.data)
    })
  }, [])

  return (
    <div className='mt-[50px] w-full max-w-[1000px] ml-auto mr-auto'>
      <SearchForm />
      <Table list={people} />
    </div>
  )
}

export default List
