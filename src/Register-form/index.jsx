import React, { useState } from "react";
import "./index.css";

function Registerform() {
  const [user, setUser] = useState("");
  const [error, setError] = useState("");
  const [lasts, setLasts] = useState("");
  const [passw, setPassw] = useState("");
  const [conf, setConf] = useState("");
  const [userName, setUserName] = useState(false);
  const [firstName, setFirstName] = useState(false);
  const [lastName, setLastName] = useState(false);
  const [password, setPassword] = useState(false);
  const [confirm, setConfirm] = useState(false);

  function handler(e) {
    if (
      user.length < 3 ||
      error.length < 3 ||
      lasts.length < 3 ||
      passw.length < 5 ||
      conf.length < 5) {
      document.write(" not-valid");
    } else {
      document.write(" valid");
    }
    e.preventDefault();
  }
  function userHandler(e) {
    const item = e.target.value;
    if (item.length < 3) {
      setUserName(true);
    } else {
      setUserName(false);
    }
    setUser(item);
  }
  function firstHandler(e) {
    const first = e.target.value;
    if (first.length < 3) {
      setFirstName(true);
    } else {
      setFirstName(false);
    }
    setError(first);
  }
  function lastHandler(e) {
    const last = e.target.value;
    if (last.length < 3) {
      setLastName(true);
    } else {
      setLastName(false);
    }
    setLasts(last);
  }
  function passHandler(e) {
    const pass = e.target.value;
    if (pass.length < 5) {
      setPassword(true);
    } else {
      setPassword(false);
    }
    setPassw(pass);
  }
  function confirmHandler(e) {
    const pass1 = e.target.value;
    if (pass1.length < 5) {
      setConfirm(true);
    } else {
      setConfirm(false);
    }
    setConf(pass1);
  }
  return (
    <div className="register">
      <h1>Register</h1>
      <form className="form" onSubmit={handler}>
        <div className="label">
          <label>Username</label>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="username"
            onChange={userHandler}
          ></input>
          {userName ? <p>Please enter username</p> : ""}
        </div>
        <div className="label">
          <label>First Name</label>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="first-name"
            onChange={firstHandler}
          ></input>
          {firstName ? <p>Please enter your first name</p> : ""}
        </div>
        <div className="label">
          <label>Last Name</label>
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="last-name "
            onChange={lastHandler}
          ></input>
          {lastName ? <p>Please enter your last name</p> : ""}
        </div>
        <div className="label">
          <label>Gender</label>
        </div>
        <div className="gender">
          <input type="radio" name="gender" value="male" />
          Male
          <input type="radio" name="gender" value="female" />
          Female
        </div>
        <div className="label">
          <label>Password</label>
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="password"
            onChange={passHandler}
          ></input>
          {password ? <p>enter 6 character</p> : ""}
        </div>
        <div className="label">
          <label>Confirm Password</label>
        </div>
        <div className="input">
          <input
            type="password"
            placeholder="confirm-password"
            onChange={confirmHandler}
          ></input>
          {confirm ? <p>password and confirm password should be same</p> : ""}{" "}
          &&
          {password !== confirm ? <p>password not same</p> : ""}
        </div>
        <div className="button">
          {" "}
          <button>Register</button>
        </div>
      </form>
    </div>
  );
}
export default Registerform;
