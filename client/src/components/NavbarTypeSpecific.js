import React from 'react'
import { NavLink } from 'react-router-dom'
function NavbarTypeSpecific({url}) {
    const user=window.location.href.split('/')[3];
    const id = window.location.href.split('/')[4];
    // console.log(user)
    // console.log(id)
    // console.log(url);
  return (
    <div className='nav'>
        <NavLink to='/' style={{ 'textDecoration': 'none', 'color': 'white' }}><h1>Blood Bank Management System</h1></NavLink>
      <ul>
        <NavLink to={`${url}`} style={{ 'textDecoration': 'none', 'color': 'white' }}>Dashboard</NavLink>
        <NavLink to={`${url}/${user==='donor' ? 'donateblood' : 'reqblood'}`} style={{ 'textDecoration': 'none', 'color': 'white' }}>{user=='donor' ? 'Donate Blood' : 'Request Blood'}</NavLink>
        <NavLink to={`${url}/${user==='donor' ? 'donationhistory' : 'reqhistory'}`} style={{ 'textDecoration': 'none', 'color': 'white' }}>{user=='donor' ? 'Donation History' : 'Request History'}</NavLink>
        <NavLink to={'/'} style={{ 'textDecoration': 'none', 'color': 'white' }}>Logout</NavLink>
      </ul>
    </div>
  )
}

export default NavbarTypeSpecific