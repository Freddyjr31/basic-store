import axios from 'axios'

export default function GetAllCategories () {
  const URL_BASE = process.env.REACT_APP_CONSULT_LOCAL_DESA
  const PORT = process.env.REACT_APP_CONSULT_PORT
  return axios.get(URL_BASE + PORT + '/categories').then(response => {
    const { data } = response
    return data
  })
}
