import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../master/Header.js'

const ProfileSetup = () => {
    return (
        <>
        <Header/>
       
<div class="container mt-5"  >
    <h2>Profile Setup</h2>
    <hr/>

    <form class="row" >
            <div class="row">
                <div class="col-sm-1"> </div>
                <div class="col-sm-1">
                    <label class="form-label">Name</label>
                  </div>
                  <div class="col-sm-7">
                    <input type="text" class="form-control" />
                  </div>
            </div>
            <div class="row mt-3">
            <div class="col-sm-1"> </div>
                <div class="col-sm-1">
                    <label class="form-label">Contact No.</label>
                  </div>
                  <div class="col-sm-7">
                    <input type="password" class="form-control" />
                  </div>
            </div>
            <div class="row mt-3">
            <div class="col-sm-1"> </div>
                <div class="col-sm-1">
                    <label class="form-label">Email</label>
                  </div>
                  <div class="col-sm-7">
                    <input type="password" class="form-control" />
                  </div>
            </div>

            <div class="row mt-3">
            <div class="col-sm-1"> </div>
                <div class="col-sm-1 ">
                    <label class="form-label">Payment Mode</label>
                  </div>
                  <div class="col-sm-3">
                  <select class="form-select" aria-label="Select Payment Mode">
                            <option selected>Select Payment Mode</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                  </div>
                  <div class="col-sm-4">
                  <input type="password" class="form-control" placeholder="Enter UPI ID/UPI Phone No."/>
                  </div>
            </div>

            <div class="row mt-3">
            <div class="col-sm-1"> </div>
                <div class="col-sm-1">
                    <label class="form-label">Address</label>
                  </div>
                  <div class="col-sm-7">
                    <input type="password" class="form-control" />
                  </div>
            </div>

            <div class="row mt-3">
            <div class="col-sm-1"> </div>
                <div class="col-sm-1">
                    <label class="form-label">Country</label>
                  </div>
                  <div class="col-sm-3">
                    <input type="password" class="form-control" />
                  </div>
                  <div class="col-sm-1">
                    <label class="form-label">State</label>
                  </div>
                  <div class="col-sm-3">
                    <input type="password" class="form-control" />
                  </div>
            </div>
            <div class="row mt-3">
            <div class="col-sm-1"> </div>
                <div class="col-sm-1">
                    <label class="form-label">City</label>
                  </div>
                  <div class="col-sm-3">
                    <input type="password" class="form-control" />
                  </div>
                  <div class="col-sm-1">
                    <label class="form-label">Zip</label>
                  </div>
                  <div class="col-sm-3">
                    <input type="password" class="form-control" />
                  </div>
            </div>





           
               
                <div class="col-md-12 text-center mt-5">
                <br/>
                    <button type="button" class="btn btn-outline-secondary btn-lg " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{borderRadius:"25px",padding:"5px 50px"}}>Save</button>
                    
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content rounded-0">
                    <div class="modal-header border-0 my-0 py-3 mt-0">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body py-0 my-0 pb-5">
                      Profile Setup Successfully
                    </div>
                    
                  </div>
                </div>
              </div>
                    
                    
                    </div>

                    
             
        </form>

       

</div>
        </>
    )
}
export default ProfileSetup