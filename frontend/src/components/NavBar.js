import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      This is the navbar
      <Link to='/'>Home</Link>
      <Link to='/random'>Pick food for me</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default NavBar