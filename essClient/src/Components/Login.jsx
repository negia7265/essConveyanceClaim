import React from 'react'
import './LoginSignup.css'

// import user_icon from './Assests/person.png';
import email_icon from './Assests/email.png';
import password from './Assests/password.png';
// import google from './Assests/google.jpeg';
// import facebook from './Assests/facebook.jpeg';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
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
            <input type="text" placeholder="Username" />
          </div>
          <div className="input">
            <img src={password} alt="" srcset="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        <div className="forgetPassword">Forgot Password? <span>Click Here!</span></div>
        <div className="submit-container">
          <button className="MainLogin">Login</button>
          <hr className="or"></hr>
          <div className="loginBox">
            <div className="Login">
            <GoogleIcon/>
              {/* <img src={GoogleIcon} alt="" srcset="" />
               */}
              <span class="text1">Login With Google</span>
            </div>
            <div className="Login">
              {/* <img src={FacebookIcon} alt="" srcset="" /> */}
              <FacebookIcon/>
              <span class="text1">Login With Facebook</span>
            </div>
          </div>
        </div>
        <div className="forgetPassword">No Account <span onClick={()=>navigate("/SignUp")}>SignUp Here!</span></div>
      </div>
    </div>
  )
}
export default Login;


