import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarTypeSpecific from './NavbarTypeSpecific'
import './dashboard.css'
function DonorsPage() {
    const donorsData = JSON.parse(localStorage.getItem('donorsData')) || [];
    const { id } = useParams()

    const totalBloodDonated=donorsData.reduce((counter, obj) => obj.userId === id ? counter += Number(obj.amount) : counter, 0);
    const requestsPending=donorsData.reduce((counter, obj) => obj.userId === id ? counter += obj.status.toLowerCase()==='pending': counter, 0);
    const totalRequest=donorsData.reduce((counter, obj) => obj.userId === id ? counter += 1 : counter, 0);
    return (
        <>
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
                            <h3>0</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='box'>
                            <h2>Request Approved</h2>
                            <h3>0</h3>
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