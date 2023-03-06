import * as React from 'react';
import { useState } from 'react';
import './table.css'

export default function BloodDonationReqHistory({ user, id }) {
    const [rows, setRows] = useState(JSON.parse(localStorage.getItem(user === 'recipient' ? 'recipientsData' : 'donorsData')) || [])

    function makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const data =
        rows != null ?
            rows.filter(row => row.userId === id).map((filteredData => (
                <tr key={makeid}>
                    <td>{filteredData.title}</td>
                    <td>{filteredData.description}</td>
                    <td>{filteredData.amount}</td>
                    <td style={{'color':'red'}}>{filteredData.status}</td>
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
                    {data}
                </table>
            </div>
        </div>
    );
}