import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './login.css'
import { useEffect } from 'react';
import axios from 'axios'

function DonorsSignup() {

  const [userName, setUserName] = useState()

  const [email, setEmail] = useState()

  const [password, setPassword] = useState()

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();

    const user = {
      name: userName,
      email: email,
      password: password
    }

    axios.post('http://localhost:5001/user/signup', user)
    .then(function (response) {
        console.log(response.code);
        alert("Donor created Successfully, now please Login");
        navigate('../donor')

    })
    .catch(function (error) {
        alert("Sorry a User with this email already exists");
        console.log(error);
        return;
    });

  }

  return (
    <>
      <Navbar />
      <div className='login'>
        <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
          <h2>Sign Up</h2>
          <input
            type='text'
            placeholder='name'
            onChange={(e) => {setUserName(e.target.value)}}
            name='name'
          />
          <input
            type='email'
            placeholder='Email'
            onChange={(e) => {setEmail(e.target.value)}}
            name='email'
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => {setPassword(e.target.value)}}
            name='password'
          />
          <div className='login-footer'>
            <button className='login-btn'>Sign Up</button>
            <Link to={'/donor'} style={{ 'textDecoration': 'none' }}><span style={{ 'fontSize': '0.9rem', 'color': 'blue' }}>Already registered?</span></Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default DonorsSignup