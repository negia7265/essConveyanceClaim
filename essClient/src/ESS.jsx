import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./SideBar";
import "./ESS.css";
import ConveyanceForm from "./ConveyanceForm";
import Preview from "./Preview";
import { useState } from "react";
import  Login  from "./Components/Login";
import SignUp from "./Components/Signup";
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
          element={<ConveyanceForm setFileData={setFileData} />}
        />
        <Route path="/preview" element={<Preview file={fileData} />} />
        {/* <Route path="/SignUp/Login" element={<SignUp/>} /> */}
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        {/* <Route key={index} path={item.path} element={<App />} /> */}
      </Routes>
    </div>
  );
}

export default ESS;
