import axios from 'axios'

import { BASE_URL } from '../config'

export const getDeadPeople = () => {
  return axios.get(`${BASE_URL}/deadpeople`)
}
