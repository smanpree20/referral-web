import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../master/Header/Header.js'
const ChangePassword = () => {
    return (
        <>
        <Header/>
       
<div class="container mt-5"  >
    <h2>Change Password</h2>
    <hr/>
  
<form  >
  <div class="row mb-2">
    <label for="inputEmail3" class="col-sm-2 col-form-label" >Old Password</label>
    <div class="col-sm-5">
      <input type="email" class="form-control" id="inputEmail3" />
    </div>
  </div>
  <div class="row mb-2">
    <label for="inputPassword3" class="col-sm-2 col-form-label">New Password</label>
    <div class="col-sm-5">
      <input type="password" class="form-control" id="inputPassword3" />
    </div>
  </div>
  <div class="row mb-2">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Confirm Password</label>
    <div class="col-sm-5">
      <input type="password" class="form-control" id="inputPassword3" />
    </div>
  </div>
  <div class="text-center mt-5">
  <button type="submit" class="btn btn-outline-secondary btn-lg " style={{borderRadius:"25px",padding:"5px 50px"}}>Save</button></div>
</form>

</div>
        </>
    )
}
export default ChangePassword