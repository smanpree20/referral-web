import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import pic from '../../asset/images/login_logo.png'
import pic1 from '../../asset/images/logo-side-image.jpg'
import { Link } from 'react-router-dom'

import '../../asset/css/style.css';
const Login = () => {
    return (

<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <h2 class="text-center" style={{color:"#98f098",fontWeight:"bold"}}>Login</h2>
      <div class="col-md-5 col-lg-3 col-xl-3 offset-xl-1 " id="loginbox" style={{backgroundColor:"rgb(198, 242, 198)",padding:"50px",borderRadius:"15px"}}>

      <div class="d-flex justify-content-around align-items-center mb-4" >
        
      <img src={pic} class="img-fluid" alt="Phone" style={{width:"50px"}}/>
            
          </div>
        <form>

          <div class="form-outline mb-4">
          <input type="email"  class="form-rounded" placeholder='Email' style={{borderRadius: "25px",border: "3px solid #98f098",height: "30px",padding:"15px",width: "100%",paddingLeft:"25px"}}/>
          </div>

     
          <div class="form-outline mb-4">
          <input type="password"  placeholder='Password' style={{borderRadius: "25px",border: "3px solid #98f098",height: "30px",padding:"15px",width: "100%",paddingLeft:"25px"}}/>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
          <Link to="/" style={{textDecoration:"none",color:"grey"}}>Sign Up Now</Link>
            
          </div>

          
          <div class="d-flex justify-content-around align-items-center mb-4">
          <button type="submit " class="button4" >Login</button>
          </div>
          
          <div class="d-flex justify-content-around align-items-center mb-4">
          <a href="#!" style={{textDecoration:"none",color:"grey"}}>Forgot password</a>
            
          </div>
        

         

        </form>
      </div>
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src={pic1}
          class="img-fluid" alt="Phone"/>
      </div>
    </div>
  </div>
</section>
  
    )
}
export default Login