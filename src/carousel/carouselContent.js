import React from 'react'

export default function CarouselContent () {
  return (
    <div id='carouselExampleInterval' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='10000'>
          <img src={require('../assets/pexels-adrian-dorobantu-2300334.jpg')} style={{ width: '1980px', height: '960px' }} alt='...' />
        </div>
        <div className='carousel-item' data-bs-interval='2000'>
          <img src={require('../assets/pexels-marcus-12252411.jpg')} style={{ width: '1980px', height: '960px' }} alt='...' />
        </div>
        <div className='carousel-item' data-bs-interval='2000'>
          <img src={require('../assets/pexels-shattha-pilabut-135620.jpg')} style={{ width: '1980px', height: '960px' }} alt='...' />
        </div>
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleInterval' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}
