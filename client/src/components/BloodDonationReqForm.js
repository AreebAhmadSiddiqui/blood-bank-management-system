import React from 'react'
import './login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BloodDonationReqForm(props) {

    const navigate = useNavigate();
  
    const [title, setTitle] = useState()

    const [amount, setAmount] = useState()

    const [description, setDescription] = useState()

    const loc = window.location.href.split('/')[4]

    const user = window.location.href.split('/')[3]

    // console.log(user);
    
    const arr = window.location.href.split('/');

    arr.pop();

    const url = arr.toString()



    // const email = {email: loc}

  const handleClick = (e) => {

    e.preventDefault();

    const data = [
      {
        email: loc
      },
      {
        type: title,
        amount: amount,
        disease: description,
        status: "Pending"
      }
    ]

    axios.post(`http://localhost:5001/${user==='donor'?'donate':'request'}/${user==='donor'?'addBloodDonation':'addBloodRequest'}`, data)
        .then(function (response) {
            console.log(response);
            alert("Good");
        })
        .catch(function (error) {
            // alert("Sorry a User with this email already exists");
            alert("Error in adding Blood Data");
            console.log(error);
            return;
        });

  }

  return (
      <div className='login'>
        <form className="login-form">
          <h2>Blood {user==='recipient' ? 'Request Form' : 'Donation Form'}</h2>

          <select placeholder='Blood Type' onChange={(e) => (setTitle(e.target.value))}>
            <option value="" selected>Select Blood Type</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <input
            type='number'
            placeholder='Amount'
            onChange={(e) => (setAmount(e.target.value))}
            name='number'
          />
          <input
            type='text'
            placeholder='Disease (if any)'
            onChange={(e) => (setDescription(e.target.value))}
            name='lname'
          />
          <div className='login-footer'>
            <button className='login-btn' onClick={(e) => handleClick(e)}>{user==='recipient' ? 'Request' : 'Donate'}</button>
          </div>
        </form>
      </div>
  )
}

export default BloodDonationReqForm
