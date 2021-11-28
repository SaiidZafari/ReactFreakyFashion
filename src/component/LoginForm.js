import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {

const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted")
  };

  return (
    <div className="LoginForm">
      <h1> LoginForm </h1>
      <form onSubmit={handleSubmit} className="col-md-4 text-start">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" className="form-control" />{" "}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input id="password" type="text" className="form-control" />{" "}
        </div>
        <button type="submit" className="btn btn-primary col-md-6 mt-3 mb-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
