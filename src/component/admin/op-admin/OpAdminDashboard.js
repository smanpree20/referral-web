import React from 'react'
import Header from '../../master/Header/Header.js'
const OpAdminDashboard = () => {
    return (
        <>
    
        
      <Header type="Admin"/>
      <br/>
          <div class="container mt-5 ml-5">
          
              <button type="button" class="btn btn-outline-secondary btn-lg "  style={{borderRadius:"25px",padding:"2px 35px"}}>All</button>
              &nbsp;&nbsp;<button type="button" class="btn btn-outline-secondary btn-lg "  style={{borderRadius:"25px",padding:"2px 35px"}}>Open</button>
              &nbsp;&nbsp;<button type="button" class="btn btn-outline-secondary btn-lg "  style={{borderRadius:"25px",padding:"2px 35px"}}>Closed</button>
           
          </div>
        </>

        
    )
}
export default OpAdminDashboard