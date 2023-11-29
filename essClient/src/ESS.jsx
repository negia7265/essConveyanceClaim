import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./SideBar";
import "./ESS.css";
import ConveyanceForm from "./ConveyanceForm";
import Preview from "./Preview";
import { useState } from "react";
import LoginSignUp from "./Components/Signup";
import  Login  from "./Components/Login";
import  ForgotPassword  from "./Components/ForgotPassword1";
import ResetPassword from "./Components/Resetting_Password";
import Dashboard from "./SideBar/Sidebar/Dashboard";
function ESS() {
  const [fileData, setFileData] = useState(null);
  if (fileData) {
    console.log(fileData);
  }
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <Routes>
        <Route
          path="/"
          element={<LoginSignUp/>}
        />
        <Route path="/preview" element={<Preview file={fileData} />} />
        <Route path="/SignUp" element={<LoginSignUp/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />
        <Route path="/ResetPassword" element={<ResetPassword/>} />
        <Route path="/Dashboard" element={<Dashboard/>} />

        {/* <Route key={index} path={item.path} element={<App />} /> */}
      </Routes>
    </div>
  );
}

export default ESS;
