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
            <button type="button" class="button4" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign Up</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content rounded-0">
                    <div class="modal-header border-0 my-0 py-3 mt-0">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body py-0 my-0 pb-5">
                      Sign Up Successful
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          

            <div className='form-group mb-3 text-center'>
                <p>Already have an account <Link to="/login" class="link"><b>Login</b></Link></p>
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