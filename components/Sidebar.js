import React from 'react'
import '../App.css';
import { IoSettingsSharp } from "react-icons/io5";
import { GoGraph } from "react-icons/go";
import { IoIosNotifications } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import {Link} from "react-router-dom";

const currentYear = new Date().getFullYear();

function Sidebar() {
    return (
 <div className="wrapper">
    <div class="sidebar">
        <h2 className="menu">Menu</h2>
        <ul className="data">
           <Link to="/"><li><GoGraph color="#00f7c8" size="2em" /></li></Link> 
           <Link to="/notification"> <li><IoIosNotifications color="#00f7c8" size="2em" /></li></Link> 
           <Link to="/setup"> <li><IoSettingsSharp color="#00f7c8" size="2em" /></li></Link> 
           <Link to="/about"> <li><IoIosInformationCircle color="#00f7c8" size="2em" /></li></Link> 
        </ul>
        <div class="copyright">
        <p>Copyright ⓒ {currentYear}</p>
        </div>
    </div>
</div>            
    );
}

export default Sidebar




















/* 

import { SidebarData } from "./SidebarData"

<div className = "Sidebar">
        <ul>

        {SidebarData.map((val, key) => {
          return(<li
           key ={key}
            onClick={()=>{
                window.location.pathname = val.linkl
                }}>
           {" "}
           <div>{val.icon}</div>  
           <div> {val.title} </div>
            </li>
            );
              })}
         </ul>
        </div>
        
        */