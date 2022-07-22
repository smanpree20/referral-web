import React, { useState, useEffect } from "react";
// import pic1 from '../../asset/images/logo-side-image.jpg'
// import { Link } from 'react-router-dom'
import '../../asset/css/login.css'
const LoginCopy = () => {
  const intialValues = { email: "", password: "" };

  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmitting && (
        <span className="success-msg">LoginCopy submitted successfully</span>
      )}

<div class="container">

<div class="row">

  <div class="col-lg-10 col-xl-9 mx-auto text-center"><h2>Login</h2>

    <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
      <div class="card-body p-4 p-sm-5"  >
        <h5 class="card-title text-center mb-5 fw-light fs-5"><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-login-web-store-flaticons-lineal-color-flat-icons-3.png" alt="icon"/></h5>

      <form onSubmit={handleSubmit} noValidate>
      <div className="form-outline mb-4">
                <input type="email"
                        name="email"
                        id="email"
                        value={formValues.email}
                        onChange={handleChange}
                        // className={formErrors.email && "input-error"}
                        class="rounded-pill form-control"  placeholder="name@example.com" />
                        {/* <label for="floatingInputEmail">Email address</label> */}
                    
                        {formErrors.email && (
            <span  >{formErrors.email}</span>
          )}
        </div>
       
        <div className="form-outline mb-3 ">
        <input type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
            // className={formErrors.password && "input-error"}
            class="rounded-pill form-control"  placeholder="Password" />
            {/* <label for="floatingPassword">Password</label> */}
            {formErrors.password && (
            <span className="error" >{formErrors.password}</span>
          )}
          
        </div>
        <a class="d-block text-center mt-2 small fw-bold" href="#!" style={{color:"grey",fontSize:"15px"}} >Create an Account</a>
        <div class="d-grid mb-2 mt-4 text-center">
            <button class="btn  btn-primary btn-login fw-bold text-uppercase rounded-pill" type="submit">Login</button>
          </div>

          

          <hr class="my-4" />

        
          <a class="d-block text-center mt-2 small " href="#!" style={{color:"grey",fontSize:"15px"}} >Forgot Password</a>

         
      </form>
      </div>

      <div class="card-img-left d-none d-md-flex">
      </div>




    </div>
  </div>
</div>
</div>

    </div>
  );
};

export default LoginCopy;






        

         
      