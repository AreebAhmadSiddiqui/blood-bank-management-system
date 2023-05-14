import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarTypeSpecific from './NavbarTypeSpecific';
import BloodDonationReqForm from './BloodDonationReqForm';
import BloodDonationReqHistory from './BloodDonationReqHistory';
function Page() {
    
  const user=window.location.pathname.split('/')[1];
  const {id,type}=useParams();
  return (
    <>
    <NavbarTypeSpecific url={`/${user}/${id}`}/>
    { user==='recipient' ? (type==='reqblood' ? <BloodDonationReqForm user={user} id={id} type={type}/> : <BloodDonationReqHistory user={user} id={id}/>) : (type==='donateblood' ? <BloodDonationReqForm user={user} id={id} type={type}/> : <BloodDonationReqHistory user={user} id={id}/>)}
    </>
  )
}

export default Page