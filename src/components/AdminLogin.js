import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'
import './login.css'
function AdminLogin() {


    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({
        username: "",
        password: ""
    })
    
    function isValid(oldArray, newData) {
        const userName = newData.username
        const password = newData.password

        for (let i = 0; i < oldArray.length; i++) {

            let obj = oldArray[i]
            if (obj.username === userName && obj.password == password) {
                alert(`Hello, ${obj.fname} ${obj.lname}`);
                return true;
            }
        }

        return false;
    }

    const getLocalStorageItems = () => {
        const admin = localStorage.getItem('admin')
        return admin ? JSON.parse(admin) : []
    }

    const [adminData, setAdminData] = React.useState(getLocalStorageItems);

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
        
        if (isValid(adminData, formData)) {
            navigate(`/admin/${formData.username}`)   
        } else {
            alert("No such user found");
        }
    }

    return (
        <><Navbar />
            <div className='login'>
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <input
                        type='text'
                        placeholder='Username'
                        onChange={handleChange}
                        name='username'
                        value={formData.username}
                    />
                    <input
                        type='password'
                        placeholder='Password'
                        onChange={handleChange}
                        name='password'
                        value={formData.password}
                    />
                    <div className='login-footer'>
                        <button className='login-btn'>Log In</button>
                        <Link to={'/admin/signup'} style={{ 'textDecoration': 'none' }}><span style={{ 'fontSize': '0.9rem', 'color': 'blue' }}>New user?</span></Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminLogin