import React, { useState } from "react";
import "./NavbarCSS.css";
export default function LeftBar() {
  // const [, setStyle] = useState({ display: "flex" });
  function leavedMouse(e){
                        const t=e.target.querySelector(':nth-child(2)')
                      if(t!==null)t.style.display="none";
                      e.target.classList.remove('hovered');
  }
  function enteredMouse(e){ 
        document.querySelectorAll('.value').forEach((el)=>{
        el.classList.remove('hovered') 
        el.querySelector(':nth-child(2)').style.display="none";
        })
       const t=e.target.querySelector(':nth-child(2)')
                      if(t!==null)t.style.display="flex";
                      e.target.classList.add('hovered');
  }
  return (
    <>
      <div className="LeftBar">
        <div className="data_fetch">
          <div className="uploading">
            <div class="container-upload">
              <input type="file" />
            </div>
            <button className="preview">Submit</button>
            <div className="scrollbox">
              <div className="scrollbox-inner">
                <div className="amount">
                  <div className="head1">
                    <span className="heading"> Date </span>
                  </div>
                  <span
                    className="value"
                    onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">15 August 2024</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">15 August 2024</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">15 August 2024</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">15 August 2024</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <button className="head">Enter Manually</button>
                </div>
                <div className="amount">
                  <div className="head1">
                    <span className="heading2">Distance Travelled</span>
                  </div>

                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">90 km</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">90 km</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">90 km</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">90 km</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <button className="head">Enter Manually</button>
                </div>
                <div className="amount">
                  <div className="head1">
                    <span className="heading3">Pickup Address </span>
                  </div>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">10 ABC-Delhi</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">10 ABC-Delhi</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">10 ABC-Delhi</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">10 ABC-Delhi</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <button className="head">Enter Manually</button>
                </div>
                <div className="amount">
                  <div className="head1">
                    <span className="heading2">Destination Address </span>
                  </div>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">10 ABC-Delhi</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">10 ABC-Delhi</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">10 ABC-Delhi</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <span
                    className="value" onMouseEnter={(e) =>  enteredMouse(e)}
                    onMouseLeave={(e) => leavedMouse(e)}
                  >
                  <div className="date_val">10-ABC Delhi</div>
                  <div className="confirm" style={{display:"none"}}>
                      <button className="confirm-btn">Confirm</button>
                  </div>
                  </span>
                  <button className="head">Enter Manually</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
