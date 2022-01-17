import React from "react";
import "../Style/interview.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import List from "../Components/List";
import "../Style/Practice.css";

const Live_Interview = () => {
  const hist = useNavigate();
  const ChangeRoute = () => {
    hist("/interview");
  };

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
        <div className="practice_main">
          <List title="Technical Interview" path="/technicalInterview" />
          <List title="Non Technical Interview" path="/non_technicalInterview" />
        </div>
      </div>
    </>
  );
};

export default Live_Interview;
