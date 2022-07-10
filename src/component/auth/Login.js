import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
 import pic from '../../asset/images/login_logo.png'
import '../../asset/css/style.css';
const Login = () => {
    return (

<section class="h-100 gradient-form" style={{backgroundColor: "none"}}>
      
      <div class="container py-5 h-100" >
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black" >
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
      
                    <div class="text-center mb-5">
                      <img src={pic}
                        style={{width: "50px"}} alt="logo" />
                    </div>
      
                    <form>
                  
      
                      <div class="form-outline mb-4">
                      <input type="email"  class="form-rounded" placeholder='Email'/>
                      </div>
      
                      <div class="form-outline mb-4">
                      <input type="password" class="form-rounded" placeholder='Password'/>
      
                      </div>
                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Sign Up Now</p>
                      </div>
      
                      <div class="text-center pt-1 mb-5 pb-1">
                        <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                          in</button>
                        
                      </div>
                      <div class="text-center pt-1 mb-5 pb-1"><a class="text-muted" href="#!">Forgot password?</a></div>
                      
                     
                    </form>
      
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      
    )
}
export default Login