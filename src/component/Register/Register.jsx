import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const [error,setError]=useState('')
    const {createUser}=useContext(AuthContext)
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

        if(password!==confirm){
            setError('password diddnt match')
        }
        else if(password.length<6){
            setError('password must be at least 6 characters')

        }

        createUser(email, password)
        .then(result=>{
            const logedUser=result.user
            console.log(result)
        })
        .catch(error =>{
            console.error(error)
            setError(error.message)
        })

  };
  return (
    <div className="center">
      <div className="login-form">
        <h2 className="login">Sign up</h2>
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label htmlFor="email">Email</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirm">confirm Passsword</label> <br />
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="confirm your password"
            />
          </div>
          <div className="form-group">
            <button type="submit">SignUp</button>
          </div>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <div className="new-to-amazon">
          <p>Already have an account?</p>
          <Link to="/login">Please Login</Link>
        </div>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default Register;
