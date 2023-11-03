import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/nav.css'

export default function NavBarMenu () {
  return (
    <nav className='navbar navbar-expand fixed-top navStyles'>
      <div className='container-sm'>
        <Link className='navbar-brand' to='http://localhost:3001/home'>Basic Store</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon' /></button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link className='nav-link active' aria-current='page' to='http://localhost:3001/home'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='#'>Catergories</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
