const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express()
const port = 2000

app.use(cors({
  origin: '*',
  methods: ['*']
}))

app.get('/', (req, res) => res.send('Basic Store web'))

app.get('/products', (req, res) => {
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

app.post('/categories/:product_categorie', (req, res) => {
  const productCategorie = req.params.product_categorie
  console.log(productCategorie)
  axios.get(`https://fakestoreapi.com/products/category/${productCategorie}`).then(response => {
    const productInCategory = response.data
    res.json(productInCategory)
  }).catch(error => {
    console.log(error)
  })
})

app.listen(port, () => console.log(`app listening on port ${port}!`))
