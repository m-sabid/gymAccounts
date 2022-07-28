import React, { useState } from "react";
import "./LoginLogOut.css";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const LoginLogOut = () => {

  const navigate = useNavigate();

  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // token 
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken;
  }
  const getUser = () => {
    const userString = sessionStorage.getItem('user');
    const user_detail = JSON.parse(userString);
    return user_detail;
  }

  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(getUser());
  

  const saveToken = () =>{
    sessionStorage.setItem('token',JSON.stringify(token));
    sessionStorage.setItem('user',JSON.stringify(user));

    setToken(token);
    setUser(user);
    navigate("/");
  }
  
  const logInForm = () => {
    axios
    .post("https://gym-management97.herokuapp.com/api/auth/",{
      email: email,
      password: password,
    })
    .then((res) => {
      saveToken(res.data.user,res.data.access_token);
    });
  };
  
  return (
    <>
      <div className="loginSignUp">
        <div className="login">
          <label htmlFor="">Email:</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label htmlFor="">Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button id="submit" onClick={logInForm}>
            Log In
          </button>
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
