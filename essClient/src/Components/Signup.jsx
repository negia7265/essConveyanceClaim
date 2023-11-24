import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";

import user_icon from "./Assests/person.png";
import email_icon from "./Assests/email.png";
import password from "./Assests/password.png";
// import google from './Assests/google.jpeg';
// import facebook from './Assests/facebook.jpeg';
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";

// import Button from '@mui/material/Button';
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const handleClick = async () => {
    const temp = {
      name: name,
      email: email,
      password: passWord,
    };
    const status = await axios.post("http://localhost:3000/signup", temp);
    console.log(status.data);
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
        <div className="inputs">
          <div className="input">
            <img src={user_icon} alt="" srcset="" />
            <input
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Name"
            />
          </div>
          <div className="input">
            <img src={email_icon} alt="" srcset="" />
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
          </div>
          <div className="input">
            <img src={password} alt="" srcset="" />
            <input
              type="password"
              onChange={(e) => {
                setPassWord(e.target.value);
              }}
              placeholder="Password"
            />
          </div>
        </div>
        {/* <div className="forgetPassword">Forgot Password? <span>Click Here!</span></div> */}
        <div className="submit-container">
          <button className="Signup" onClick={handleClick}>
            SignUp
          </button>
          <hr className="or"></hr>
          <div className="SignUpBox">
            <span className="Acc">Already have an account ?</span>
            <button className="LoginBtn" onClick={() => navigate("/")}>
              Login Here
            </button>
            {/* <div className="Login"> */}
            {/* <img src={google} alt="" srcset="" /> */}
            {/* <GoogleIcon/> */}
            {/* <span  class="text1">Login With Google</span>  */}
            {/* </div>  */}
            {/* <div className="Login">
              <FacebookIcon/>
              {/* <img src={facebook} alt="" srcset="" /> */}
            {/* <span  class="text1">Login With Facebook</span>  */}
            {/* </div>  */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
