import { Routes, Route } from "react-router-dom";
import { Sidebar} from "./SideBar";
import "./ESS.css";
import  ConveyanceForm from "./ConveyanceForm";
function ESS() {
  return (
    <div style={{display:'flex'}}>
    <Sidebar/>
      <Routes>
       <Route path="/" element={<ConveyanceForm/>} />
       {/* <Route key={index} path={item.path} element={<App />} /> */}
    </Routes>
  </div>
  );
}

export default ESS;
