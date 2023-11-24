import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./SideBar";
import "./ESS.css";
import ConveyanceForm from "./ConveyanceForm";
import Preview from "./Preview";
import { useState } from "react";
import Login from "./Components/Login";
import SignUp from "./Components/Signup";
import ForgetPassword from "./Components/forgotpassword";
import RessetingPassword from "./Components/Resetting_Password";
function ESS() {
  const [fileData, setFileData] = useState(null);
  if (fileData) {
    console.log(fileData);
  }
  const [isLogged, setisLogged] = useState(false);
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      {isLogged ? (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "75%" }}>
            <Routes>
              <Route
                path="/"
                element={<ConveyanceForm setFileData={setFileData} />}
              />
              <Route path="/preview" element={<Preview file={fileData} />} />
              {/* <Route path="/SignUp/Login" element={<SignUp/>} /> */}
            </Routes>
          </div>
        </div>
      ) : (
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          <div style={{ width: "75%" }}>
            <Routes>
              <Route path="/" element={<Login setisLogged={setisLogged} />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route
                path="/preview"
                element={<Login setisLogged={setisLogged} />}
              />
              <Route path="/Forgotpassword" element={<ForgetPassword />} />
              <Route
                path="/Resetting_Password"
                element={<RessetingPassword />}
              />
              {/* <Route key={index} path={item.path} element={<App />} /> */}
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
}

export default ESS;
