import React from 'react'
import  "../Style/Navbtns.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavBtns = () => {

    const hist=useNavigate();

    const ChangeRoute=()=>{
        hist("/");
    }
 
    return (
        <>
             <div className="main_section">
        <nav className="backbtn">
          <div className="svg1">
            <BiArrowBack onClick={ChangeRoute}/>
          </div>
          <div className="svg2">
            <AiFillHome onClick={ChangeRoute}/>
          </div>
        </nav>
        </div>
        </>
    )
}

export default NavBtns
