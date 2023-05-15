import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const LogIn = () => {
    const [show,setShow]=useState(false)

    const {signIn}=useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const from=location.state?.from?.pathname||"/"

    const handleSignIn = (event) => {
        event.preventDefault();
        const form=event.target;
        const email= form.email.value
        const password= form.password.value
        // console.log(email, password)
        signIn(email, password)
        .then(result=>{
            const logedUser=result.user;
            console.log(logedUser)
            form.reset();
            navigate(from,{replace:true});

        })
        .catch(error=>{
            console.error(error.message)
        })

    };
  return (
    <div className="center">
      <div className="login-form">
        <h2 className="login">Login</h2>
        <form onSubmit={handleSignIn}>
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
              type={show?'text':"password"}
              id="password"
              name="password"
              placeholder="Enter your password"
            />

            <p onClick={()=>setShow(!show)}>{
                show?<span>hide password</span>:<span>show pasword</span>
                
                }</p>
          </div>
          <div className="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="forgot-password">
          <a href="#">Forgot password?</a>
        </div>
        <div className="new-to-amazon">
          <p>New to Amazon?</p>
          <Link to="/register">Create your Amazon account</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
