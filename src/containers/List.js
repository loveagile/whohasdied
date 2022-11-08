import React from 'react'

import SearchForm from '../components/SearchForm'
import Table from '../components/Table'

const people = [
  {
    id: 1,
    photo: '/images/avatar-1.jpg',
    text: 'Text here',
    age: 30,
    where: 'Los Angeles, CA',
    when: '2 dyas ago',
  },
  {
    id: 2,
    photo: '/images/avatar-2.jpg',
    text: 'Text here',
    age: 28,
    where: 'Los Angeles, CA',
    when: '2 dyas ago',
  },
  {
    id: 3,
    photo: '/images/avatar-3.jpg',
    text: 'Text here',
    age: 35,
    where: 'Los Angeles, CA',
    when: '2 dyas ago',
  },
]

const List = () => {
  return (
    <div className='mt-[50px] w-full max-w-[1000px] ml-auto mr-auto'>
      <SearchForm />
      <Table list={people} />
    </div>
  )
}

export default List
