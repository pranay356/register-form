import React, { useState } from "react";
import "./login.css";
import {BrowerRouter,routes,Route} from "react-router-dom";
function Login() {
  const [user, setUser] = useState("");
  const [loginUser,setLoginUser]=useState("");
  const [password, setPassword] = useState(false);
  const [error, setError] = useState(false);
  
  function loginHandler(e) {
    if(user.length<3||loginUser.length<8){
    document.write("not valid")
    }else{
      document.write("valid")
    }
    e.preventDefault();
  }
  function userHandler(e) {
    const item = e.target.value;
    if (item.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
    setUser(item)
  }
  function userPassword(e) {
    const pass = e.target.value;
    if (pass.length < 8) {
      setPassword(true);
    } else {
      setPassword(false);
    }
    setLoginUser(pass)
  }
  return (
    <div className="login-wrapper">
      <div className="card">
        <h1>Login</h1>
        <form onSubmit={loginHandler}>
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              onChange={userHandler}
            ></input>
            {error ? <p>please enter username</p> : ""}
          </div>
          <div className="form-group">
            <label> Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={userPassword}
            ></input>
            {password ? <p>please enter 8 character</p> : ""}
          </div>
          <div>
            <button className="form-button" type="submit" >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
