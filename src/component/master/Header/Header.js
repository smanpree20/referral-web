import React from "react";
import { Link } from "react-router-dom";
const Header = (props) => {
    return (
        <>

<nav className="navbar navbar-expand-sm navbar-light ">
        <div className="container-fluid">
            <Link to="/user-dash" className="navbar-brand"><i className="fa-solid fa-house-chimney fa-2xl"></i></Link>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navbarCollapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav ms-auto">
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link " data-bs-toggle="dropdown"><i className="fa-regular fa-bell fa-lg" style={{color:"black"}}></i></a>
                        <div className="dropdown-menu dropdown-menu-end text-center">
                            <a href="#" className="dropdown-item">1st Notification</a>
                            <div className="dropdown-divider"></div>href="#"
                            <a href="#" className="dropdown-item">2nd Notificationt</a>
                        </div>
                    </li>
                
                    <li className="nav-item dropdown">
                        <a href="#" className="nav-link " data-bs-toggle="dropdown"><span style={{color:"black"}}>&nbsp;&nbsp;&nbsp;{props.type}&nbsp;&nbsp;&nbsp;</span><i className="fa-solid fa-user fa-2xl" style={{color:"black"}}></i></a>
                        <div className="dropdown-menu dropdown-menu-end text-center">
                            <Link to="/profile-edit" className="dropdown-item">Profile</Link>
                            <Link to="/changepassword" className="dropdown-item">Change Password</Link>
                            <div className="dropdown-divider"></div>
                            <Link to="/login" className="dropdown-item">Logout</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 


        </>
    )
}
export default Header