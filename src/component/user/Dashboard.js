import React from 'react'
import Header from '../master/Header.js'
import Card from './card'
import Footer from '../master/Footer'
import '../../asset/css/dashboard.css'
import  side_logo  from '../../asset/images/bg.jpg';
const Dashboard = () => {
    return (
        <>
   
      <Header type="User  "/>
      
      <div className="container-fluid middle_content" style={{marginTop:"0px"}} >   
    <div className="row">

        <div className="col-md-6"  >
            
            <img src={side_logo} width="750px" alt="side_image" className='side_logo'/>

        </div>
        <div className="col-md-6 card-content" >
<div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>


<div className="col-md-6 " >
   <a href="#!"> <Card color="bg-c-blue" title="Total Referrals" data="&nbsp;" link="Add Referrals" font="fa-solid fa-people-group f-right"/>
   </a></div>
<div className="col-md-6 ">
<a href="#!"> <Card color="bg-c-yellow" title="Check Account Summary" data="&nbsp;" link="&nbsp;" font="fa-solid fa-receipt f-right"/>
</a></div>

</div> 
<div className="row" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>

<div className="col-md-6 ">
<a href="#!"> <Card color="bg-c-green" title="Total Earnings" data="Rs. 650" link="&nbsp;" font="fa-solid fa-indian-rupee-sign f-right"/>
</a></div>

<div className="col-md-6 ">
<a href="#!">  <Card color="bg-c-pink" title="Total Points" data="4500" link="&nbsp;" font="fa-solid fa-coins f-right"/></a>
</div>
</div> </div>
        
    </div>          
      
      </div>
      <br/><br/>
    <Footer/>
        </>

        
    )
}
export default Dashboard