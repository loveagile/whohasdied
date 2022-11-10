import axios from 'axios'

import { BASE_URL } from '../config'

export const login = (password) => {
  return axios.post(`${BASE_URL}/admin/login`, { password })
}

export const getDeadPeople = () => {
  return axios.get(`${BASE_URL}/deadpeople`)
}

export const getDeadPerson = (urlname) => {
  return axios.get(`${BASE_URL}/deadpeople/${urlname}`)
}

export const addDeadPerson = (formData) => {
  const token = localStorage.getItem('admin_token')
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }
  return axios.post(`${BASE_URL}/deadpeople`, formData, config)
}
