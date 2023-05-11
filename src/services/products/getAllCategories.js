import axios from 'axios'

export default function GetAllCategories () {
  return axios.get('http://localhost:3000/categories').then(response => {
    const { data } = response
    return data
  })
}
