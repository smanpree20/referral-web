import React from "react";
import { Link } from "react-router-dom";


function Header(props) {

  

  return (


<>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/user-dash"><div style={{paddingLeft:"40px"}}><img src="https://img.icons8.com/parakeet/96/000000/experimental-home-parakeet.png" alt="" width="45" height="45" class="d-inline-block align-text-top" />
      </div></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ms-auto">
        
        <li class="nav-item dropdown"style={{paddingTop:"10px"}}>
          <a class="nav-link " href="hey" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className="thumbnail-image" 
                            src="https://img.icons8.com/external-anggara-blue-anggara-putra/64/000000/external-notification-interface-anggara-blue-anggara-putra-2.png"
                            alt="notification"

                            style={{ width: '25px' }}
                        />
          </a>
          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#!">Notification 1</a></li>
            <div className="dropdown-divider"></div>
            <li><a class="dropdown-item" href="#!">Notification 1</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown" >
          <a class="nav-link " href="hey" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {/* <span style={{color:"#fff",fontWeight:"bold"}}>User</span> */}
            
            <img className="thumbnail-image" 
                            src="https://img.icons8.com/color/48/000000/user.png"
                            alt="user pic"

                            style={{ width: '45px' }}
                        />
          </a>
          <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#!">Profile</a></li>
            <li><a class="dropdown-item" href="#!">Change Password</a></li>
            <div className="dropdown-divider"></div>
            <li><a class="dropdown-item" href="#!">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>





</>

  );
}

export default Header;