import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Api = () => {

    const [data, setData] = useState();

    useEffect(() => {
        axios.get('http://localhost:5001/user/getUsers')
        .then(function (response) {
            // console.log(response);
            setData(response)
        })
    }, [])

    // const blood = {
    //     type: 'A+',
    //     amount: 10,
    //     disease: 'No'
    // }

    const req = [
        {
            type: "A+",
            amount: 20,
            disease: "NA",
            status: "Pending"
        }
    ]

    const don = 
        {
            email: 'raviragwwxjbhgoshaaslgejgrdgbhgc619nb1@gmail.com'
        }
    
    

    const user = {
        name: 'qwerty',
        email: 'ravirajbhosalejbhgc619@gmail.com',
        password: 'abcdefgh'
    }

    const handleClick = () => {
        axios.post('http://localhost:5001/donate/getBloodDonationForm', don)
        .then(function (response) {
            console.log(response.code);
            alert("Good");
        })
        .catch(function (error) {
            // alert("Sorry a User with this email already exists");
            alert("Please Login with correct credentials, wrong password");
            console.log(error);
            return;
        });
    }
    

  return (
    <div>
        Api
        <button onClick={handleClick}>Click</button>
        {/* {
            data
            ?
            <h1>{data.data}</h1>
            :
            ""
        } */}
    </div>
  )
}

export default Api