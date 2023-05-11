import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import '../assets/styles/footer.css'
// import { Link } from 'react-router-dom'

export default function FooterPage () {
  return (
    <footer>
      <div className='container-fluid mb-0'>
        <div className='row justify-content-between footerPage2 px-3 pt-3 pb-0'>
          <div className='col-md'>
            <div className='input-group mb-2'>
              <img src={require('../assets/icons/facebook.png')} width='30' height='30' className='d-inline-block align-top mr-2' alt='' />
              <p>Los Teques - Edo. Miranda - Venezuela</p>
            </div>
          </div>
        </div>
        <div className='row justify-content-between footerPage2 px-3 pt-3 pb-3'>
          <div className='col-md'>
            <p>© 2022 TecNet.com – Blog Web.</p>
          </div>
          <div className='col-md'>
            <div className='input-group justify-content-end'>
              <div className='input-group-append' id='button-addon4'>
                <img src={require('../assets/icons/facebook.png')} width='30' height='30' className='d-inline-block align-top mr-2' alt='' />
                <img src={require('../assets/icons/facebook.png')} width='30' height='30' className='d-inline-block align-top mr-2' alt='' />
                <img src={require('../assets/icons/facebook.png')} width='30' height='30' className='d-inline-block align-top mr-2' alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
