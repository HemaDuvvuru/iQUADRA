import React from "react";
import { FaBell,FaSignOutAlt } from "react-icons/fa";

function MyComponent() {
  return (
   
    <div className="header-logo">
      {/* <img src="https://www.iquizuanswer.com/static/media/iquizuanswer-logo-1.e287c9cd2a6aae1ee265.png"  alt="logo" className="iq-logo" /> */}
   
    <div className="header-icons">
        <button><FaBell  className="bell"/></button>
        <button><FaSignOutAlt className="logout"/></button>
       
        </div>
    </div>
   
  );
}

export default MyComponent;
