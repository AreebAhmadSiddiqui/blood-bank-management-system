import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarTypeSpecific from './NavbarTypeSpecific'
import './dashboard.css'
import { useState,useEffect } from 'react'
import axios from 'axios'

function DonorsPage() {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        
        axios.get('http://localhost:5001/user/getUsers')
        .then(function (response) {
            // console.log(response.data);
            setUserData(response.data)
            // alert("Good");
        })
        .catch(function (error) {
            // alert("Sorry a User with this email already exists");
            alert("Please Login with correct credentials, wrong password");
            console.log(error);
            return;
        });

    }, [])


    const { id } = useParams()
    const targetObj=userData.find((data) => data.email==id);

    let totalBloodDonated=0
    let requestsPending=0
    let totalRequest=0
    let requestApproved=0
    if(targetObj){
        // console.log(targetObj);
        totalBloodDonated=targetObj.donate.reduce((counter, obj) => counter += Number(obj.amount) , 0);
        // console.log(totalBloodDonated);
        requestsPending=targetObj.donate.reduce((counter, obj) => counter += obj.status.toLowerCase()==='pending' , 0);
        requestApproved=targetObj.donate.reduce((counter, obj) => counter += obj.status.toLowerCase()==='approved' , 0);
        totalRequest=targetObj.donate.reduce((counter, obj) => counter += 1 , 0);
    }

    let requestRejected=totalRequest-(requestApproved+requestsPending)
    return (
        <>
            {/* <h1>{id}</h1> */}
            <NavbarTypeSpecific url={`/donor/${id}`} />
            <div className='wrapperContainer'>
                <div className='dashboard-container'>
                    <div className='row'>
                        <div className='box'>
                            <h2>Blood Donated</h2>
                            <h3>{totalBloodDonated} Units</h3>
                        </div>
                        <div className='box'>
                            <h2>Request Pending</h2>
                            <h3>{requestsPending}</h3>
                        </div>
                        <div className='box'>
                            <h2>Request Rejected</h2>
                            <h3>{requestRejected}</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='box'>
                            <h2>Request Approved</h2>
                            <h3>{requestApproved}</h3>
                        </div>
                        <div className='box'>
                            <h2>Total Requests</h2>
                            <h3>{totalRequest}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonorsPage