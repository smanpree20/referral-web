import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../master/Header'
const OpAdminDashboard = () => {
    return (
        <>     
            <Header type="Admin" />
            <br />
            <div className="container mt-2 ml-5 ">

            <ul className="nav nav-tabs mb-3">
                <li className="nav-item">
                    <Link className="nav-link active"  to="/allDetails">All</Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/openDetails">Open</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/closedDetails">Closed</Link>
                </li>
            </ul>
           
            <table id="example" class="table table-striped" style={{width:"100%"}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Contact No.</th>
                <th>Email</th>
                <th>Product Type</th>
                <th>Product</th>
                <th>Referred By</th>
                <th>Date</th>
                <th>Status</th>
                <th>Update</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Ajay</td>
                <td>9632587410</td>
                <td>ajay@gmail.com</td>
                <td>Insurance</td>
                <td>VISA Card</td>              
                <td>Rupendra</td>
                <td>22/06/2022</td>
                <td>Open</td>
                <td ><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{all: "unset",cursor: "pointer"}}>Edit</button></td>
            </tr>
            
            <tr>
                <td>Ajay</td>
                <td>9632587410</td>
                <td>ajay@gmail.com</td>
                <td>Insurance</td>
                <td>VISA Card</td>              
                <td>Rupendra</td>
                <td>22/06/2022</td>
                <td>Open</td>
                <td ><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{all: "unset",cursor: "pointer"}}>Edit</button></td>
            </tr><tr>
                <td>Ajay</td>
                <td>9632587410</td>
                <td>ajay@gmail.com</td>
                <td>Insurance</td>
                <td>VISA Card</td>              
                <td>Rupendra</td>
                <td>22/06/2022</td>
                <td>Open</td>
                <td ><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{all: "unset",cursor: "pointer"}}>Edit</button></td>
            </tr><tr>
                <td>Ajay</td>
                <td>9632587410</td>
                <td>ajay@gmail.com</td>
                <td>Insurance</td>
                <td>VISA Card</td>              
                <td>Rupendra</td>
                <td>22/06/2022</td>
                <td>Open</td>
                <td ><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{all: "unset",cursor: "pointer"}}>Edit</button></td>
            </tr><tr>
                <td>Ajay</td>
                <td>9632587410</td>
                <td>ajay@gmail.com</td>
                <td>Insurance</td>
                <td>VISA Card</td>              
                <td>Rupendra</td>
                <td>22/06/2022</td>
                <td>Open</td>
                <td ><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{all: "unset",cursor: "pointer"}}>Edit</button></td>
            </tr><tr>
                <td>Ajay</td>
                <td>9632587410</td>
                <td>ajay@gmail.com</td>
                <td>Insurance</td>
                <td>VISA Card</td>              
                <td>Rupendra</td>
                <td>22/06/2022</td>
                <td>Open</td>
                <td ><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{all: "unset",cursor: "pointer"}}>Edit</button></td>
            </tr><tr>
                <td>Ajay</td>
                <td>9632587410</td>
                <td>ajay@gmail.com</td>
                <td>Insurance</td>
                <td>VISA Card</td>              
                <td>Rupendra</td>
                <td>22/06/2022</td>
                <td>Open</td>
                <td ><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{all: "unset",cursor: "pointer"}}>Edit</button></td>
            </tr>
        </tbody>
       
    </table>
            </div>


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
     
    </>
    )
}
export default OpAdminDashboard