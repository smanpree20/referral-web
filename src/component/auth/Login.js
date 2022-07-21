import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import pic from '../../asset/images/login_logo.png'
import pic1 from '../../asset/images/logo-side-image.jpg'
import { Link } from 'react-router-dom'
// import '../../asset/css/style.css';
// import { useState, useEffect } from 'react'
// import Dashboard from '../user/Dashboard'
const Login = () => {

  // const initialValues = { email: "", password: "" };
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormValues({ ...formValues, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFormErrors(validate(formValues));
  //   setIsSubmit(true);
  // };

  // useEffect(() => {
  //   console.log(formErrors);
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //     console.log(formValues);
  //   }
  // }, [formErrors]);

  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
  //   if (!values.email) {
  //     errors.email = "Email is required!";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format!";
  //   }
  //   if (!values.password) {
  //     errors.password = "Password is required";
  //   } else if (values.password.length < 4) {
  //     errors.password = "Password must be more than 4 characters";
  //   } else if (values.password.length > 10) {
  //     errors.password = "Password cannot exceed more than 10 characters";
  //   }
  //   return errors;
  // };



    return (

<section className="vh-100">
  <div className="container py-5 h-100">
  {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <Dashboard/>
      ) : (
        <div className="ui message success">Not Match with Our DB</div>// <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
    <div className="row d-flex align-items-center justify-content-center h-100">
      <h2 className="text-center" style={{color:"#98f098",fontWeight:"bold"}}>Login</h2>
      <div className="col-md-5 col-lg-3 col-xl-3 offset-xl-1 " id="loginbox" style={{backgroundColor:"rgb(198, 242, 198)",padding:"50px",borderRadius:"15px"}}>

      <div className="d-flex justify-content-around align-items-center mb-4" >
        
      <img src={pic} className="img-fluid" alt="Phone" style={{width:"50px"}}/>
            
          </div>
        {/* <form onSubmit={handleSubmit}> */}
        <form >
          <div className="form-outline mb-4">
          {/* <input type="email" value={formValues.email} onChange={handleChange} name="email" className="form-rounded"   placeholder='Email' style={{borderRadius: "25px",border: "3px solid #98f098",height: "30px",padding:"15px",width: "100%",paddingLeft:"25px"}}/> */}

          <input type="email"  name="email" className="form-rounded"   placeholder='Email' style={{borderRadius: "25px",border: "3px solid #98f098",height: "30px",padding:"15px",width: "100%",paddingLeft:"25px"}}/>
          {/* <p style={{color:"red",fontSize:"15px",marginLeft:"8px"}}>{formErrors.email}</p> */}
        </div>
        
     
          <div className="form-outline mb-4">
          {/* <input type="password" value={formValues.password} onChange={handleChange}  name="password" placeholder='Password' style={{borderRadius: "25px",border: "3px solid #98f098",height: "30px",padding:"15px",width: "100%",paddingLeft:"25px"}}/> */}

          <input type="password" name="password" placeholder='Password' style={{borderRadius: "25px",border: "3px solid #98f098",height: "30px",padding:"15px",width: "100%",paddingLeft:"25px"}}/>
          {/* <p style={{color:"red",fontSize:"15px",marginLeft:"8px"}}>{formErrors.password}</p> */}
          </div>
         
          <div className="d-flex justify-content-around align-items-center mb-4">
          <Link to="/" style={{textDecoration:"none",color:"grey"}}>Sign Up Now</Link>
            
          </div>

          
          <div className="d-flex justify-content-around align-items-center mb-4">
          <button type="submit"  className="button4" >Login</button>
          </div>
          
          <div className="d-flex justify-content-around align-items-center mb-4">
          <a href="#!" style={{textDecoration:"none",color:"grey"}}>Forgot password</a>
            
          </div>
        

         

        </form>
      </div>
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src={pic1}
          className="img-fluid" alt="Phone"/>
      </div>
    </div>
  </div>
</section>
  
    )
}
export default Login