import React from 'react'
import Header from '../master/Header/Header.js'
import Card from './card'
const Dashboard = () => {
    return (
        <>
    
        
      <Header type="User"/>
      <div className="container" style={{marginTop:"80px"}} >             
      <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="col-md-5 col-xl-4" >
            <Card color="bg-c-blue" title="Total Referrals" data="&nbsp;" link="Add Referrals" font="fa-solid fa-people-group f-right"/>
        </div>
  
        <div className="col-md-1 col-xl-1" >
        </div>
        <div className="col-md-5 col-xl-4">
            <Card color="bg-c-yellow" title="Check Account Summary" data="&nbsp;" link="&nbsp;" font="fa-solid fa-receipt f-right"/>
        </div>
      </div> 
  <div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="col-md-6 col-xl-4">
            <Card color="bg-c-blue" title="Total Earnings" data="Rs. 650" link="&nbsp;" font="fa-solid fa-indian-rupee-sign f-right"/>
        </div>
        <div className="col-md-1 col-xl-1" >
        </div>
        <div className="col-md-6 col-xl-4">
            <Card color="bg-c-yellow" title="Total Points" data="4500" link="&nbsp;" font="fa-solid fa-coins f-right"/>
        </div>
      </div> 
      </div>
    
        </>

        
    )
}
export default Dashboard