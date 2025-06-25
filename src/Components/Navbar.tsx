import React from 'react'
import { NavLink } from 'react-router-dom'
import { Paths } from '../commons/paths.ts'
function Navbar() {
  return (
    <nav>
      <ul>
        <NavLink to={Paths.HomePage}><li>Home</li></NavLink>
        <NavLink to={Paths.AboutPage}><li>About</li></NavLink>
        <NavLink to={Paths.ContactPage}><li>Contact</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar