import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as query from 'query-string'

import SearchForm from '../components/SearchForm'
import Table from '../components/Table'
import Pagination from '../components/Pagination'
import { getDeadPeople } from '../api/apiCaller'

const List = () => {
  const [people, setPeople] = useState()
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [total, setTotal] = useState(1)
  const [size, setSize] = useState(5)
  const navigate = useNavigate()
  let param = query.parse(window.location.search)

  useEffect(() => {
    getDeadPeople(
      param?.search || search,
      param?.page || page,
      param?.size || size
    )
      .then((list) => {
        setPeople(list?.data?.people)
        const to = parseInt((list?.data?.total - 1) / size + 1)
        setTotal(to)
        if (page > to) setPage(1)
      })
      .catch((error) => {
        navigate('/list')
      })
  }, [window.location.search])

  useEffect(() => {
    navigate(`?search=${search}&page=${page}&size=${size}`)
  }, [search, page, size])

  return (
    <div className='mt-[50px] w-full max-w-[1000px] ml-auto mr-auto'>
      <SearchForm search={search} setSearch={setSearch} />
      <Table list={people} />
      <Pagination
        page={page}
        setPage={setPage}
        total={total}
        size={size}
        setSize={setSize}
      />
    </div>
  )
}

export default List
