import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import AdminNavbar from './AdminNavbar';
import './table.css'
import axios from 'axios';

function AdminActionPage() {

    const {id} = useParams();

    const [userData, setUserData] = useState([])

    
    function handleClick(e){
        const targetId=e.target.id;
        const action=e.target.classList[1]==='action-green' ? 'approve' : "reject"
        const type=e.target.classList[3];
        const userId=e.target.classList[2];
        const targetObj=userData.find((data) => data._id==userId);
        const targetObjIdx=userData.findIndex((data) => data._id==userId);

        const targetIdx= type==="Donation" ? targetObj.donate.findIndex((data) => data._id==targetId) : targetObj.request.findIndex((data) => data._id==targetId)
        const targetArray= type==="Donation" ? targetObj.donate.find((data) => data._id==targetId) : targetObj.request.find((data) => data._id==targetId);
        
        targetArray.status = action==='approve' ? "Approved" : "Rejected"

        if(type==="Donation") targetObj.donate[targetIdx]=targetArray
        else targetObj.request[targetIdx]=targetArray

        axios.put(`http://localhost:5001/updateusers/${userId}`,targetObj)
        .then(function (response) {
            // console.log(response.data);
            setUserData(response.data)
            // alert("Good");
        })
        .catch(function (error) {
            // alert("Sorry a User with this email already exists");
            alert("Error");
            console.log(error);
            return;
        });

        userData[targetObjIdx]=targetObj
    }
    
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

    }, [userData])
    
    const data=[]
    for(let i=0;i<userData.length;i++){
        for(let j=0;j<userData[i].donate.length;j++){
            const obj={
                userId:userData[i]._id,
                name:userData[i].name,
                typeId:userData[i].donate[j]._id,
                // email:userData[j].email,
                type:userData[i].donate[j].type,
                disease:userData[i].donate[j].disease,
                amount:userData[i].donate[j].amount,
                status:userData[i].donate[j].status,
                don_req:'Donation'
            }
            data.push(obj);
        }
        for(let j=0;j<userData[i].request.length;j++){

            const obj={
                userId:userData[i]._id,
                name:userData[i].name,
                typeId:userData[i].request[j]._id,
                // email:userData[j].email,
                type:userData[i].request[j].type,
                disease:userData[i].request[j].disease,
                amount:userData[i].request[j].amount,
                status:userData[i].request[j].status,
                don_req:"Request"
            }
            data.push(obj);
        }
    }

    // console.log(data);
    const datas= data.map((filteredData => (
                <tr key={filteredData.id}>
                    <td>{filteredData.name}</td>
                    {/* <td>{filteredData.email}</td> */}
                    <td>{filteredData.type}</td>
                    <td>{filteredData.disease}</td>
                    <td>{filteredData.amount}</td>
                    <td>{filteredData.don_req}</td>
                    <td style={{'color': filteredData.status==='Pending' ? '#F6BE00' : filteredData.status==='Approved' ? 'green' : 'red'}}>{filteredData.status}</td>
                    {filteredData.status==="Pending" ? <td>{<div className='action-container'><div className={`action-btn action-green ${filteredData.userId} ${filteredData.don_req}`} id={`${filteredData.typeId}`} onClick={handleClick}>Accept</div>
                    <div className={`action-btn action-red ${filteredData.userId} ${filteredData.don_req}`} id={`${filteredData.typeId}`}  onClick={handleClick}>Reject</div></div>}</td> : <div className='action-container'><p>No Action</p></div>}
                </tr>
            )
    ))
    return (
        <>
        <AdminNavbar url={`/admin/${id}`} />
        <div className='wrapper-container'>
            <h1>All Requests</h1>
            <div className='history-container'>
                <table className='table'>
                    <tr>
                        <th>Name</th>
                        {/* <th>Email</th> */}
                        <th>Blood Type</th>
                        <th>Disease(If Any)</th>
                        <th>Amount(units)</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    {datas}
                </table>
            </div>
        </div>
        </>
    );
}

export default AdminActionPage