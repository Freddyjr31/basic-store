const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({
  origin: '*',
  methods: ['*']
}))

app.get('/', (req, res) => res.send('Basic Store web'))

app.get('/teams', (req, res) => {
  axios.get('https://fakestoreapi.com/products').then(response => {
    const data = response.data
    res.json(data)
  }).catch(error => {
    console.log(error)
  })
})

app.get('/categories', (req, res) => {
  axios.get('https://fakestoreapi.com/products/categories').then(response => {
    const categoriesData = response.data
    res.json(categoriesData)
  }).catch(error => (
    console.log(error)
  ))
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
