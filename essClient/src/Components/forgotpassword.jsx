import React from 'react';
import './LoginSignup.css'
// import Login  from './Login.jsx';


// import user_icon from './Assests/person.png';
import email_icon from './Assests/email.png';
// import password from './Assests/password.png';

const ForgetPassword=()=>{ 
  return ( 
      <div className="container1">
        <div className="header">
          <div className="text">Forgot Your Password ? </div>
          <div className="underlineForgot"></div>
          <span className="instruction">Confirm Your email we will send the instruction</span>
          <div className="inputs">
            <div className="input">
             <img src={email_icon} alt="" srcset="" />
             <input type="email" placeholder="Email"/>
            </div>
            {/* <div className="input">
             <img src={user_icon} alt="" srcset="" />
             <input type="text" placeholder="Enter the OTP"/>
            </div>
            <div className="input">
             <img src={password} alt="" srcset="" />
             <input type="password" placeholder=" Set New Password"/>
            </div>
            <div className="input">
             <img src={password} alt="" srcset="" />
             <input type="password" placeholder="Confirm  Password"/>
            </div> */}
          </div>
          {/* <div className="forgetPassword">Forgot Password? <span>Click Here!</span></div> */}
          <div className="submit-container">
              <button className="ResetCode">Send Code </button> 
          </div>
        </div>
      </div>
  )
}
export default ForgetPassword;
