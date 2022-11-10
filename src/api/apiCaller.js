import axios from 'axios'

import { BASE_URL } from '../config'

export const getDeadPeople = () => {
  return axios.get(`${BASE_URL}/deadpeople`)
}

export const getDeadPerson = (urlname) => {
  return axios.get(`${BASE_URL}/deadpeople/${urlname}`)
}

export const login = (password) => {
  return axios.post(`${BASE_URL}/admin/login`, { password })
}
