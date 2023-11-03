import axios from 'axios'

export const getPorductInCategory = ({ product }) => {
  const URL_BASE = process.env.REACT_APP_CONSULT_LOCAL_DESA
  const PORT = process.env.REACT_APP_CONSULT_PORT
  return axios.post(`${URL_BASE}${PORT}/categories/${product}`)
    .then(res => {
      const { data } = res
      console.log(data)
      return data
    })
}
