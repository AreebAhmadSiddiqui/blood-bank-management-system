import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './login.css'
import axios from 'axios'

function DonorsLogin() {

    const [email, setEmail] = useState()

    const [password, setPassword] = useState()

    const navigate = useNavigate();
    
    const handleSubmit = (e) => {

        e.preventDefault();

        const user = {
            email: email,
            password: password
        }

        axios.post('http://localhost:5001/user/login', user)
        .then(function (response) {
            console.log(response.code);
            navigate(`/donor/${email}`)
            alert(`Welcome ${email}`);
        })
        .catch(function (error) {
            alert("Please Login with correct credentials");
            console.log(error);
            return;
        });

    }

    return (
        <><Navbar />
            <div className='login'>
                <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                    <h2>Login</h2>
                    <input
                        type='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={(e)=>setPassword(e.target.value)}
                        name='password'
                    />
                    <div className='login-footer'>
                        <button className='login-btn'>Log In</button>
                        <Link to={'/donor/signup'} style={{ 'textDecoration': 'none' }}><span style={{ 'fontSize': '0.9rem', 'color': 'blue' }}>New user?</span></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default DonorsLogin