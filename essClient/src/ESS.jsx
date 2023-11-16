import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./SideBar";
import "./ESS.css";
import ConveyanceForm from "./ConveyanceForm";
import Preview from "./Preview";
import { useState } from "react";
import LoginSignUp from "./Components/LoginSignup";
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
        <Route path="/SignUp/Login" element={<LoginSignUp/>} />
        {/* <Route key={index} path={item.path} element={<App />} /> */}
      </Routes>
    </div>
  );
}

export default ESS;
