/* eslint-disable react/jsx-key */
import * as React from 'react'
import { getAllproducts } from '../services/products/getAllproducts'
import { useState, useEffect } from 'react'
import Skeleton from '@mui/material/Skeleton'
import Box from '@mui/material/Box'
import '../assets/styles/styles.css'
import '../assets/styles/Buttons.css'
import { Link } from 'react-router-dom'
import Paginations from '../assets/pagination/pagination'

export default function MultiActionAreaCard () {
  const [data, setData] = useState({})
  const [status, setStatus] = useState(false)
  const [page, setPage] = useState(1)
  // eslint-disable-next-line no-unused-vars
  const [productsPerPage, setproductsPerPage] = useState(6)
  const LastIndex = page * productsPerPage
  const FirstIndex = LastIndex - productsPerPage

  useEffect(() => {
    setTimeout(() => {
      getAllproducts().then(
        (e) => {
          setData(e)
          setStatus(true)
        }
      )
    }, 2000)
    setStatus(false)
  }, [])

  return (
    <>
      {status
        ? (
            data.map((e) =>
              <div className='card border-0 shadow ms-2 mb-2'>
                <div className='row align-items-center'>
                  <div className='col-md-3 divImgCard'>
                    <img src={e.image} className='img-fluid pt-2 pb-2 m-3 imgCard' style={{ maxHeight: '150px' }} alt={e.title} />
                  </div>
                  <div className='col-md-9 '>
                    <div className='card-body BodyCard'>
                      <div className='row'>
                        <div className='col-8'>
                          <h6 className='fw-bold text-start text-break'>{e.title}</h6>
                        </div>
                        <div className='col-4'>
                          <span className='card-text fw-bold text-success'>{e.price} $</span>
                        </div>
                      </div>
                      <div className='row justify-content-center Cardproduct'>
                        <p className='card-text fs-6 overflow-hidden' style={{ height: '150px' }}>{e.description}</p>
                      </div>
                      <div className='d-flex justify-content-end'>
                        <p className='badge rounded-pill card-text mt-2 CategoryPill'><Link to='#' className='text-decoration-none text-dark text-capitalize'><small className='text-body-secondary'>#{e.category}</small></Link></p>
                        <button type='button' class='btn ms-2 ButtonClass'>Load More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ).slice(FirstIndex, LastIndex)
          )
        : (
          <>
            <div className='row'>
              <div className='col'>
                <Box sx={{ width: 300 }}>
                  <Skeleton />
                  <Skeleton animation='wave' />
                  <Skeleton animation={false} />
                </Box>
              </div>
            </div>
            <div className='row mt-2'>
              <div className='col'>
                <Box sx={{ width: 300 }}>
                  <Skeleton />
                  <Skeleton animation='wave' />
                  <Skeleton animation={false} />
                </Box>
              </div>
            </div>
            <div className='row mt-2'>
              <div className='col'>
                <Box sx={{ width: 300 }}>
                  <Skeleton />
                  <Skeleton animation='wave' />
                  <Skeleton animation={false} />
                </Box>
              </div>
            </div>
          </>
          )}
      <Paginations productsPerPage={productsPerPage} page={page} setPage={setPage} totalProducts={data.length} />
    </>
  )
}
