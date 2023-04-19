import React, { useState } from "react";
import {FaBars,FaHome, FaQuestionCircle, FaBriefcase,FaUserTie, FaLightbulb } from "react-icons/fa"

import {  NavLink } from "react-router-dom";

const Sidenavbar = ({children}) => {
    const [isOpen,setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen)
    const menuItems=[
        {
            path:"/",
            name:"Home",
            icon:<FaHome/>
        },
        {
            path:"/jobsectors",
            name:"JobSectors",
            icon:<FaBriefcase/>
        },
        {
            path:"/jobroles",
            name:"JobRoles",
            icon:<FaUserTie/>
        },
        {
            path:"/jobskills",
            name:"JobSkills",
            icon:<FaLightbulb/>
        },
        {
            path:"/questions",
            name:"Questions",
            icon:<FaQuestionCircle/>
        }
        
    ]
    return(
        // <BrowserRouter>
        <div className="container">
            <div style={{width : isOpen ? "186px" : "50px"}} className="sidenavbar">
               <div className="topsection">
                    <h3 style={{display : isOpen ? "block" : "none"}} className="logo"> Question Engine</h3>
                    <div style={{display : isOpen ? "186px" : "0px"}} className="bars"><FaBars onClick={toggle}/>
                    </div>
               </div>
          
        {
            menuItems.map((item, index) => (
            <NavLink to={item.path} key={index} className="link" activeclassname="active">
               <div className="icon">{item.icon}</div>
               <div style={{display : isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
            </NavLink>

          ))
        }
          </div>
          <main>{children}</main>
        </div>
    // </BrowserRouter>
    );
};

export default Sidenavbar