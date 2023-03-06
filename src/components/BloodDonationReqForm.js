import React from 'react'
import './login.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BloodDonationReqForm({user,id,type}) {

  const navigate = useNavigate();
  const [title, setTitle] = useState("");

  const [amount, setAmount] = useState(0);

  const [description, setDescription] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    if (title === "" || amount === 0 || description === "") {
      alert("Enter valid transaction details...");
      return;
    }

    var oldData = JSON.parse(localStorage.getItem(user==='recipient' ? 'recipientsData' : 'donorsData')) || [];

    const newItems = {
      userId: id,
      title: title,
      status: "Pending",
      amount: amount,
      description: description,
    };

    oldData.push(newItems);

    localStorage.setItem(user==='recipient' ? 'recipientsData' : 'donorsData', JSON.stringify(oldData));

    alert("Request sent successfully !!!")

    navigate(`/${user}/${id}`)
  };

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
            <button className='login-btn' onClick={handleClick}>{user==='recipient' ? 'Request' : 'Donate'}</button>
          </div>
        </form>
      </div>
  )
}

export default BloodDonationReqForm
