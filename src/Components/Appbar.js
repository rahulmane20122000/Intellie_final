import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";


const Appbar = () => {
  const[open,isopen]=useState(false);
  const toggle_menu=()=>{
    isopen(!open);
  }
  return (
    <>
      <div className="main_navbar">
        <div className="logo_navbar">
          <h1>
            <NavLink exact to="/">
              INTELLIE
            </NavLink>
          </h1>
        </div>
        <div className="links_navbar">
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/interview">Explore</NavLink>
            </li>
          </ul>
          
        </div>
        <div className="ham_menu">
        <a  onClick={toggle_menu}>
            <GiHamburgerMenu />
            </a>
          </div>
      </div>
      <div  className={open?"mobile_Navs_mobile":"mobile_Navs"}>
         <div className="mobile_links">
         <ul>
            <li>
              <NavLink onClick={toggle_menu} exact to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink onClick={toggle_menu} to="/aboutus">About Us</NavLink>
            </li>
            <li>
              <NavLink onClick={toggle_menu} to="/interview">Interview</NavLink>
            </li>
            
          </ul>
         </div>
      </div>
    </>
  );
};

export default Appbar;
