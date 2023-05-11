import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBarMenu () {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary '>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='http://localhost:3001/home'>FreeStore</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'><span className='navbar-toggler-icon' /></button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          <ul className='navbar-nav'>
            <li className='nav-item'><Link className='nav-link active' aria-current='page' to='http://localhost:3001/home'>Home</Link></li>
            <li className='nav-item'><Link className='nav-link' to='#'>Catergories</Link></li>
            <li className='nav-item'><Link className='nav-link' to='#'>Pricing</Link></li>
            <li className='nav-item dropdown'>
              <Link className='nav-link dropdown-toggle' to='#' role='button' data-bs-toggle='dropdown' aria-expanded='false'>Dropdown link</Link>
              <ul className='dropdown-menu'>
                <li><Link className='dropdown-item' to='#'>Action</Link></li>
                <li><Link className='dropdown-item' to='#'>Another action</Link></li>
                <li><Link className='dropdown-item' to='#'>Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
