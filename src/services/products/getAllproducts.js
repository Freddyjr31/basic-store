import axios from 'axios'

export const getAllproducts = () => {
  return axios.get('http://localhost:3000/products')
    .then(res => {
      const { data } = res
      return data
    })
}
