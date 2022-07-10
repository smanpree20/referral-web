import React from 'react';
import Signup from './component/auth/Signup';
import Login from './component/auth/Login';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/" element={<Login />}></Route>
      </Routes>
   </BrowserRouter>
    
  )
}
export default App