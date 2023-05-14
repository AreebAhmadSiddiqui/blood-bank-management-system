import React from 'react'

function BloodGroupBox(props) {
  return (
    <div className='blood-group-box'>
        <img src={props.url}></img>
        <h3>{props.title}</h3>
        <ul>
            <li>{props.p1}</li>
            <li>{props.p2}</li>
            <li>{props.p3}</li>
            <li>{props.p4}</li>
        </ul>
    </div>
  )
}

export default BloodGroupBox