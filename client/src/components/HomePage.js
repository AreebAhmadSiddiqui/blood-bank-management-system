import React from 'react'
import Navbar from './Navbar'
import bloodGroupsData from './bloodGroupsData'
import BloodGroupBox from './BloodGroupBox'
import faqData from './faqData'
function HomePage() {
  const data=bloodGroupsData.map((item)=>
  <BloodGroupBox
    url={item.url}
    title={item.title}
    p1={item.p1}
    p2={item.p2}
    p3={item.p3}
    p4={item.p4}
  />
  )
  
  const faqs=faqData.map((item)=>
  <>
  <h4>{item.ques}</h4>
  <p>{item.ans}</p>
  </>
  )
  return (
    <>
    <Navbar />
    <div className='outer-container'>
      <div className='homepage-container'>
        <p style={{marginBottom:"30px", fontSize:"1.2rem"}}>
        Blood donation is the process of voluntarily giving blood, which is then used for medical purposes such as transfusions or for research. The blood is collected from donors, who are usually healthy individuals who meet certain eligibility criteria. Blood donation can be done at blood donation centers, mobile blood drives, or hospitals. The donated blood is carefully screened for infections and other health conditions before it is used to ensure the safety of the recipient. Blood donation is a critical part of the healthcare system and helps save many lives each year.
        </p>
        {data}
        <div className='faq-container'>
          <h2 style={{margin:"10px 0px"}}>FAQs</h2>
          <hr></hr>
          {faqs}
        </div>
      </div>
    </div>
    </>
  )
}

export default HomePage