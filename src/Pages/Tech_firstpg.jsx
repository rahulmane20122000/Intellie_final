import React, { useState } from "react";
import "../Style/interview.css";
import { BiArrowBack } from "react-icons/bi";
import { BiUser } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import "../Style/firstpg.css";
import SpeechComponent from "../Components/SpeechComponent";

const Tech_firstpg = () => {
  const hist = useNavigate();
  const ChangeRoute = () => {
    hist("/interview");
  };

  const [name, setname] = useState("");
  const [nameState, setnameState] = useState(false);

  return (
    <>
      <div className="main_section">
        <nav className="backbtn">
          <div className="svg1">
            <BiArrowBack onClick={ChangeRoute} />
          </div>
          <div className="svg2">
            <AiFillHome onClick={() => hist("/")} />
          </div>
        </nav>
        {nameState ? (
         <SpeechComponent name={name}/>
        ) : (
          <div className="start_btn">
            {" "}
            <div className="username">
              {" "}
              <BiUser style={{ "color": "#ffff", "fontSize": "2rem" }} />
              <input
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
              />{" "}
            </div>
            <Button onClick={() => setnameState(true)}>Start BOT</Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Tech_firstpg;
