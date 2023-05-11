import axios from 'axios'

export const getAllproducts = () => {
  return axios.get('http://localhost:3000/teams')
    .then(res => {
      const { data } = res
      return data
    })
}
