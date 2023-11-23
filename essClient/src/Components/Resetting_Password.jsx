import React from 'react';
import './LoginSignup.css'
// import Login  from './Login.jsx';


// import user_icon from './Assests/person.png';
// import email_icon from './Assests/email.png';
import password from './Assests/password.png';
// import google from './Assests/google.jpeg';
// import facebook from './Assests/facebook.jpeg';
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import Button from '@mui/material/Button';
// const [page, setPage] = useState("");
const RessetingPassword=()=>{ 
  return ( 
      <div className="container">
        <div className="header">
          <div className="text">Reset Password </div>
          <div className="underlineForgot"></div>
          <span className="instruction">Set the New password for your account so that you can login and access all the features </span>
          <div className="inputs">
            <div className="input">
             <img src={password} alt="" srcset="" />
             <input type="password" placeholder="New Password"/>
            </div>
            <div className="input">
             <img src={password} alt="" srcset="" />
             <input type="password" placeholder="Confirm Password"/>
            </div>
          </div>
          <div className="submit-container">
              <button className="Signup">Reset</button> 
          </div>
        </div>
      </div>
  )
}
export default RessetingPassword;
