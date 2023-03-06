import React from 'react'
import { NavLink } from 'react-router-dom'
function NavbarTypeSpecific({url}) {
    const user=window.location.pathname.split('/')[1];
  return (
    <div className='nav'>
        <NavLink style={{ 'textDecoration': 'none', 'color': 'white' }}><h1>Blood Bank Management System</h1></NavLink>
      <ul>
        <NavLink to={`${url}`} style={{ 'textDecoration': 'none', 'color': 'white' }}>Dashboard</NavLink>
        <NavLink to={`${url}/${user==='donor' ? 'donateblood' : 'reqblood'}`} style={{ 'textDecoration': 'none', 'color': 'white' }}>{user=='donor' ? 'Donate Blood' : 'Request Blood'}</NavLink>
        <NavLink to={`${url}/${user==='donor' ? 'donationhistory' : 'reqhistory'}`} style={{ 'textDecoration': 'none', 'color': 'white' }}>{user=='donor' ? 'Donation History' : 'Request History'}</NavLink>
        <NavLink to={'/blood-bank-management-system'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Logout</NavLink>
      </ul>
    </div>
  )
}

export default NavbarTypeSpecific