import React from 'react'
import "../Style/interview.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Extras = () => {
    const hist = useNavigate();
  const ChangeRoute = () => {
    hist("/practice");
  };

    return (
        <div>
        <div className="main_section">
        <nav className="backbtn">
          <div className="svg1">
            <BiArrowBack onClick={ChangeRoute} />
          </div>
          <div className="svg2">
            <AiFillHome onClick={() => hist("/")} />
          </div>
        </nav>
        </div>
        </div>
    )
}

export default Extras
