import React from 'react'
import { NavLink } from 'react-router-dom'
function AdminNavbar({url}) {
  return (
    <div className='nav'>
        <NavLink style={{ 'textDecoration': 'none', 'color': 'white' }}><h1>Blood Bank Management System</h1></NavLink>
      <ul>
        <NavLink to={`${url}`} style={{ 'textDecoration': 'none', 'color': 'white' }}>Dashboard</NavLink>
        <NavLink to={`${url}/requests`} style={{ 'textDecoration': 'none', 'color': 'white' }}>Requests</NavLink>
        <NavLink to={'/'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Logout</NavLink>
      </ul>
    </div>
  )
}

export default AdminNavbar