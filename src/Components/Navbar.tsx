import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Paths } from '../commons/paths.ts'
function Navbar() {
  return (
    <div className='navbar bg-base-100 shadow-sm' >
      <div className='flex-1'> 
          <Link className='btn btn-ghost text-xl'to={Paths.HomePage}>Agency</Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li><NavLink to={Paths.AboutPage}>About</NavLink></li>
            <li><NavLink to={Paths.ContactPage}>Contact</NavLink></li>
          </ul>
        </div>
     
    </div>
  )
}

export default Navbar