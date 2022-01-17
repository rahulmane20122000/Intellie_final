import React from "react";
import "../Style/Practice.css";
import List from "../Components/List";
import "../Style/interview.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Practice = () => {
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
          <List title="Outfit Detection" path="/outfit" />
          <List title="Writing Skills" path="/writtingSkills" />
          <List title="Listining Skills" path="/listingSkills" />
          <List title="Mirror Reading" path="/mirrorReading" />
          <List title="Brain Teaser" path="/aiInterview" />
          <List title="Extras" path="/extras" />
        </div>
      </div>
    </>
  );
};

export default Practice;
