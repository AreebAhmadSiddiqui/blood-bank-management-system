import React from 'react'
import { useParams } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import './dashboard.css'
function AdminPage() {

    
    const { id } = useParams()
    // const [userData, setUserData] = useState([])
    // useEffect(() => {
        
    //     axios.get('http://localhost:5001/user/getUsers')
    //     .then(function (response) {
    //         // console.log(response.data);
    //         setUserData(response.data)
    //         // alert("Good");
    //     })
    //     .catch(function (error) {
    //         // alert("Sorry a User with this email already exists");
    //         alert("Please Login with correct credentials, wrong password");
    //         console.log(error);
    //         return;
    //     });

    // }, [])

    // const aPos=donorsData.reduce((counter, obj) => obj.userId === id ? counter += Number(obj.amount) : counter, 0);
    // const aNeg=
    // const bPos
    // const bNeg
    // const oPos
    // const oNeg
    // const abPos
    // const abNeg
    // const requestsPending=donorsData.reduce((counter, obj) => obj.userId === id ? counter += obj.status.toLowerCase()==='pending': counter, 0);
    // const totalRequest=donorsData.reduce((counter, obj) => obj.userId === id ? counter += 1 : counter, 0);
    return (
        <>
            <AdminNavbar url={`/admin/${id}`} />
            <div className='wrapperContainer'>
                <div className='dashboard-container'>
                    <div className='row'>
                        <div className='box'>
                            <h2>A+</h2>
                            <h3>100 Units</h3>
                        </div>
                        <div className='box'>
                            <h2>A-</h2>
                            <h3>20 units</h3>
                        </div>
                        <div className='box'>
                            <h2>B+</h2>
                            <h3>30 units</h3>
                        </div>
                        <div className='box'>
                            <h2>B-</h2>
                            <h3>40 units</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='box'>
                            <h2>O+</h2>
                            <h3>20 units</h3>
                        </div>
                        <div className='box'>
                            <h2>O-</h2>
                            <h3>23 units</h3>
                        </div>
                        <div className='box'>
                            <h2>AB+</h2>
                            <h3>45 units</h3>
                        </div>
                        <div className='box'>
                            <h2>AB-</h2>
                            <h3>50 units</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminPage