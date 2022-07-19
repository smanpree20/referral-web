import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../master/Header/Header.js'
import { Link } from "react-router-dom";
const AddNewReferral = () => {
    return (
        <>
            <Header />

            <div class="container mt-5"  >
            <div class="row">
                       
                                    <div class="col-sm-4">
                                    <h2 style={{color:"grey"}}>Add Referrals</h2>
                                    </div>
                        <div class="col-sm-5">
                        <Link type="button" to="/addreferral" class="btn btn-outline-secondary btn-lg " style={{padding: "5px 50px" }}  ><span style={{fontSize:"20px"}}>Add New Referral</span></Link>

                        </div>

                    </div>
                
                <hr />

                <form class="row" >
                    <div class="row mt-3">
                        <div class="col-sm-3"> </div>
                        <div class="col-sm-1">
                            <label class="form-label">Name</label>
                        </div>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3"> </div>
                        <div class="col-sm-1">
                            <label class="form-label">Contact No.</label>
                        </div>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" />
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-sm-3"> </div>
                        <div class="col-sm-1">
                            <label class="form-label">Email</label>
                        </div>
                        <div class="col-sm-5">
                            <input type="text" class="form-control" />
                        </div>
                    </div>

                    <div class="row mt-3">
                        <div class="col-sm-3"> </div>
                        <div class="col-sm-1">
                            <label class="form-label">Product</label>
                        </div>
                        <div class="col-sm-5">
                        <select class="form-select" aria-label="Select Payment Mode">
                            <option selected>Select Product</option>
                            <option value="1">Credit Card</option>
                            <option value="2">Bank Loans</option>
                            <option value="3">Insurance</option>
                            <option value="3">Investment</option>
                        </select>
                        </div>
                    </div>

                   

                   





                    <div class="col-md-5 text-center mt-5"></div>

                    <div class="col-md-7 text-center mt-5">
                        <br />
                        <button type="button" class="btn btn-outline-secondary btn-lg " data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ borderRadius: "25px", padding: "5px 50px" }}>Save</button>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content rounded-0">
                                    <div class="modal-header border-0 my-0 py-3 mt-0">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body py-0 my-0 pb-5">
                                        Referral Added Successfully
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
export default AddNewReferral