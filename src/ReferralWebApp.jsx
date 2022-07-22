import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './component/auth/Signup';
import LoginCopy from './component/auth/LoginCopy';
import Dashboard from './component/user/Dashboard';
import PageNotFound from './component/PageNotFound'
import ChangePassword from './component/user/ChangePassword'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import ProfileSetup from './component/user/ProfileSetup';
import AddNewReferral from './component/user/AddNewReferral';
import OpAdminDashboard from './component/admin/op-admin/OpAdminDashboard';

const ReferralWebApp = () => {
  return (

     <BrowserRouter>
       <Routes>
        
         <Route exact path="/login" element={<LoginCopy />}></Route>  
         <Route exact path="*" element={<PageNotFound />}></Route> 
         <Route exact path="/" element={<Signup />}></Route>
         <Route exact path="/user-dash" element={<Dashboard />}></Route>
         <Route exact path="/changepassword" element={<ChangePassword />}></Route>
         <Route exact path="/profile-edit" element={<ProfileSetup />}></Route>
         <Route exact path="/addreferral" element={<AddNewReferral />}></Route>
         <Route exact path="/opadmin" element={<OpAdminDashboard />}></Route>
       </Routes>
    </BrowserRouter>

  )
}
export default ReferralWebApp