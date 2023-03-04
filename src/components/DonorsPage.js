import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarTypeSpecific from './NavbarTypeSpecific'
import './dashboard.css'
function DonorsPage() {
    const { id } = useParams()
    return (
        <>
            <NavbarTypeSpecific url={`/donor/${id}`} />
            <div className='wrapperContainer'>
                <div className='dashboard-container'>
                    <div className='row'>
                        <div className='box'>
                            <h2>Blood Donated</h2>
                            <h3>0 Units</h3>
                        </div>
                        <div className='box'>
                            <h2>Request Pending</h2>
                            <h3>0</h3>
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
                            <h3>0</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DonorsPage