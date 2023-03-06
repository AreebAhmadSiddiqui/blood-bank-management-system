import React from 'react'
import './homepage.css'
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <div className='nav'>
        <NavLink to={'/'} style={{ 'textDecoration': 'none', 'color': 'white' }}><h1>Blood Bank Management System</h1></NavLink>
      <ul>
        <NavLink to={'/'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Home</NavLink>
        <NavLink to={'/admin'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Admin</NavLink>
        <NavLink to={'/donor'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Donor</NavLink>
        <NavLink to={'/recipient'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Recipient</NavLink>
      </ul>
    </div>
  )
}

export default Navbar