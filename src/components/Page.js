import React from 'react'
import { useParams } from 'react-router-dom'
import NavbarRecipient from './NavbarTypeSpecific';
function Page() {
    
  const user=window.location.pathname.split('/')[1];
  const {id,type}=useParams();
  return (
    <>
    <NavbarRecipient url={`/${user}/${id}`}/>
    <div>{id} and {type}</div>
    </>
  )
}

export default Page