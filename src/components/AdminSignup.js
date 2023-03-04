import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
import './login.css'
import { useEffect } from 'react';
function AdminSignup() {

  const [isAuthenticated,setIsAuthenticated]=React.useState(false)

  function isValid(oldArray, newData) {
    const userName = newData.username
    const password = newData.password
    const cnfPassword = newData.cnfpassword
    const email = newData.email
    const fname=newData.fname
    const lname=newData.lname

    if(userName==="" || password==="" || cnfPassword==="" || email==='' || fname==='' || lname===''){
      alert("Fields cannot be empty")
      return false;
    }
    for (let i = 0; i < oldArray.length; i++) {

      let obj = oldArray[i]
      if (obj.email === email || obj.username === userName || (obj.username === userName && obj.password !== password)) {
        alert("User already exist Please Log in");
        setIsAuthenticated(true)
        return false;
      }
    }

    if (password !== cnfPassword) {
      alert("Paswords Don't Match")
    } else {
      alert("User Registered Please Log in")
      setIsAuthenticated(true)
      return true;
    }
  }
  const getLocalStorageItems = () => {
    const data = localStorage.getItem('admin')
    return data ? JSON.parse(data) : []
  }

  const [adminsData, setAdminsData] = React.useState(getLocalStorageItems)

  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    cnfpassword: ""
  })

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (isValid(adminsData, formData)) {
      setAdminsData([...adminsData, {
        'username': formData.username,
        'fname': formData.fname,
        'lname': formData.lname,
        'email': formData.email,
        'password': formData.password
      }])
    }
  }

  useEffect(() => {
    if(isAuthenticated===true) navigate('../admin');
  }, [isAuthenticated])

  useEffect(() => {
    localStorage.setItem('admin', JSON.stringify(adminsData))
  }, [adminsData])

  return (
    <>
      <Navbar />
      <div className='login'>
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <input
            type='text'
            placeholder='Username'
            onChange={handleChange}
            name='username'
            value={formData.username}
          />
          <input
            type='text'
            placeholder='First Name'
            onChange={handleChange}
            name='fname'
            value={formData.fname}
          />
          <input
            type='text'
            placeholder='Last Name'
            onChange={handleChange}
            name='lname'
            value={formData.lname}
          />
          <input
            type='email'
            placeholder='Email'
            onChange={handleChange}
            name='email'
            value={formData.email}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={handleChange}
            name='password'
            value={formData.password}
          />
          <input
            type='password'
            placeholder='Confirm Password'
            onChange={handleChange}
            name='cnfpassword'
            value={formData.cnfpassword}
          />
          <div className='login-footer'>
            <button className='login-btn'>Sign Up</button>
            <Link to={'/admin'} style={{ 'textDecoration': 'none' }}><span style={{ 'fontSize': '0.9rem', 'color': 'blue' }}>Already registered?</span></Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminSignup