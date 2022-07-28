import React, { useState, useEffect } from "react";
import "./LoginLogOut.css";
import { useNavigate } from "react-router-dom"
import { FaGoogle } from "react-icons/fa";

const LoginLogOut = () => {
  const [accountsEmail, setAccountsEmail] = useState("");
  const [accountsPassword, setAccountsPassword] = useState("");
  const history = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('user-info')){
      history.push("/")
    }
  })

  async function submitLoginForm() {
    let item = {accountsEmail, accountsPassword};
    let result = await fetch("https://gym-management97.herokuapp.com/api/auth/", {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(item)
    });
    result = result.json();
    localStorage.setItem("user-info", JSON.stringify(result))
    history.push('/')
  }


  return (
    <>
      <div className="loginSignUp">
        <div className="login">
          <label htmlFor="">Email:</label>
          <input
            type="email"
            onChange={(e) => setAccountsEmail(e.target.value)}
          />
          <br />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            onChange={(e) => setAccountsPassword(e.target.value)}
          />
          <button id="submit" onClick={submitLoginForm}>Log In</button>
          <br />
          <br />
          <div className="loginWith">
            <small>Login With</small> <br />
            <button id="GoogleLogin">
              <FaGoogle /> Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginLogOut;
