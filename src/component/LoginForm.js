import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setLogin } from './../redux/action/ProductAction';

function LoginForm() {

  const customerInfo = useSelector((state) => state.invoice);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
   const [valueEM, setValueEM] = useState("");
   const [valuePW, setValuePW] = useState("");

  //  const [email, setEmail] = useState("");
  //  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    
    e.preventDefault();    

    if (customerInfo.email === valueEM && customerInfo.password === valuePW) {     
      
      dispatch(setLogin(false));
      navigate("/myPage");

    } else {
       
      <h1> Wrong Email og Password</h1>
      navigate("/wronglogin");
    }

  };

  return (
    <div className="LoginForm">
      <h1> Login </h1>
      <form onSubmit={handleSubmit} className="col-md-4 text-start">
        <div className="form-group mt-3 mb-3 col-md-6">
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              className="form-control"
              onChange={(e) => {
                const value = e.target.value;
                setValueEM(value);
                // setEmail(value);
              }}
            />
          </div>
          <div className="form-group mt-3 mb-3 col-md-6">
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              onChange={(e) => {
                const value = e.target.value;
                setValuePW(value);
                // setPassword(value);
              }}
            />
          </div>
        <button type="submit" className="btn btn-primary col-md-6 mt-3 mb-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
