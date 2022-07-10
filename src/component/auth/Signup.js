import React from 'react'
import { Link } from 'react-router-dom';
import '../../asset/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import pic from '../../asset/images/Signup.webp'
const Signup = () => {
    return (
        <>
           

<section class="vh-100">
  <div class="container py-5 h-100">
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src={pic}
          class="img-fluid" alt="PhoneImage" />
      </div>
      <div class="col-md-6 col-lg-4 col-xl-4 offset-xl-1 " >
            <div className=' mb-5 text-center'>
                <h2 style={{color:"#98f098",fontWeight:"bold"}}>Sign Up</h2>
            </div>
        <form>

        
          <div class="form-outline mb-4">
            <input type="text"  class="form-rounded" placeholder='Name'/>
          </div>
      
          <div class="form-outline mb-4">
            <input type="email" class="form-rounded" placeholder='Email' />
          </div>


          <div class="form-outline mb-4">
            <input type="text" class="form-rounded" placeholder='Contact No.'/>
          </div>
          <div class="form-outline mb-4">
            <input type="password" class="form-rounded" placeholder='Password'/>
          </div>
          <div class="form-outline mb-5">
            <input type="password" class="form-rounded" placeholder='Confirm Password'/>
          </div>
         
        
          <div className='form-group mb-3 text-center'>
            <button type="submit " class="button4">Sign Up</button>
            </div>
          

            <div className='form-group mb-3 text-center'>
                <p>Already have an account <Link to="/" class="link"><b>Login</b></Link></p>
            </div>

        </form>
      </div>
    </div>
  </div>
</section>
        </>
    )
}
export default Signup