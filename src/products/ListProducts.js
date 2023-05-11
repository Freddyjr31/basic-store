/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import GetAllCategories from '../services/products/getAllCategories'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Link } from 'react-router-dom'

export default function Listproduct () {
  const [products, setProduct] = useState({})
  const [loading, setLoading] = useState(false)
  const [itemsList, setItemsList] = useState(false)
  const [Listproducts, setListProduct] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      GetAllCategories().then((products) => {
        setProduct(products)
        setItemsList(true)
      })
    }, 2000)
    setLoading(false)
  }, [])

  return (
    <div className='col'>
      {itemsList === true
        ? (
          <div className='col-md ms-2 border-dark-subtle border-end'>
            <h6 className='text-center'>categories</h6>
            <ul className='rounded list-unstyled'>
              {products.map((e) =>
                // eslint-disable-next-line react/jsx-key
                <li className='text-sm-start ms-2 pt-1'> - <Link to='#' className='text-decoration-none text-dark text-capitalize'>{e}</Link></li>
              )}
            </ul>
          </div>
          )
        : (
          <>
            <div className='d-flex justify-content-center m-1'>
              <div className='spinner-border text-primary m-1' role='status' />
            </div>
            {/* <img className="img-thumbnail" src={giftload} style={{width:'18rem'}}/> */}
          </>
          )}
    </div>

  )
}
