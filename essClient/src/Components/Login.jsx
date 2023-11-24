import React, { useState } from "react";
import axios from "axios";
import "./LoginSignup.css";

// import user_icon from './Assests/person.png';
import email_icon from "./Assests/email.png";
import password from "./Assests/password.png";
// import google from './Assests/google.jpeg';
// import facebook from './Assests/facebook.jpeg';
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const handleClick = async () => {
    const temp = {
      email: email,
      password: passWord,
    };
    const status = await axios.post("http://localhost:3000/login", temp);
    const stat = status.data.status;
    console.log(stat);
    if (stat === 2) {
      props.setisLogged(true);
    }
  };
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
        <div className="inputs">
          {/* <div className="input">
             <img src={user_icon} alt="" srcset="" />
             <input type="text" placeholder="Name"/>
            </div> */}
          <div className="input">
            <img src={email_icon} alt="" srcset="" />
            <input
              type="text"
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
        <div className="forgetPassword">
          Forgot Password?{" "}
          <span onClick={() => navigate("/Forgotpassword")}>Click Here!</span>
        </div>
        <div className="submit-container">
          <button className="MainLogin" onClick={handleClick}>
            Login
          </button>
          <hr className="or"></hr>
          <div className="loginBox">
            <div className="Login">
              <GoogleIcon />
              {/* <img src={GoogleIcon} alt="" srcset="" />
               */}
              <span class="text1">Login With Google</span>
            </div>
            <div className="Login">
              {/* <img src={FacebookIcon} alt="" srcset="" /> */}
              <FacebookIcon />
              <span class="text1">Login With Facebook</span>
            </div>
          </div>
        </div>
        <div className="forgetPassword">
          No Account{" "}
          <span onClick={() => navigate("/SignUp")}>SignUp Here!</span>
        </div>
      </div>
    </div>
  );
};
export default Login;
