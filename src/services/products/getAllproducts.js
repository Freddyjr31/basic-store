import axios from 'axios'

export const getAllproducts = () => {
  const URL_BASE = process.env.REACT_APP_CONSULT_LOCAL_DESA
  const PORT = process.env.REACT_APP_CONSULT_PORT
  return axios.get(`${URL_BASE}${PORT}/products`)
    .then(res => {
      const { data } = res
      return data
    })
}
