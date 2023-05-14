import * as React from 'react';
import { useState, useEffect } from 'react';
import './table.css'
import axios from 'axios'

export default function BloodDonationReqHistory(props) {

    const loc = window.location.href.split('/')[4]

    const user = window.location.href.split('/')[3]

    console.log(loc);

    const email = {email: loc}

    const [data, setData] = useState()
    
    
    useEffect(() => {
      
        axios.post(`http://localhost:5001/${user==='donor'?'donate':'request'}/${user==='donor'?'getBloodDonationForm':'getBloodRequestForm'}`, email)
        .then(function (response) {
            console.log(response.data.result);
            setData(response.data.result)
        })
        .catch(function (error) {
            // alert("Sorry a User with this email already exists");
            alert("Please Login with correct credentials, wrong password");
            console.log(error);
            return;
        });
        
    }, [window.location.href])
    

    const mapper = 
        data != null ?
            data.map((filteredData => (
                <tr key={filteredData.email}>
                    <td>{filteredData.type}</td>
                    <td>{filteredData.disease}</td>
                    <td>{filteredData.amount}</td>
                    <td style={{'color': filteredData.status==='Pending' ? '#F6BE00' : filteredData.status==='Approved' ? 'green' : 'red'}}>{filteredData.status}</td>
                </tr>
            )
            ))
            :
            ""
    return (
        <div className='wrapper-container'>
            <h1>All Requests</h1>
            <div className='history-container'>
                <table className='table'>
                    <tr>
                        <th>Blood Type</th>
                        <th>Disease(If Any)</th>
                        <th>Amount(units)</th>
                        <th>Status</th>
                    </tr>
                    {mapper}
                </table>
            </div>
        </div>
    );
}