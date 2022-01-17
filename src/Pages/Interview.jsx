import React from "react";
import "../Style/interview.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import data from "../Data/cards_data";
import {Button} from '@mui/material';
import {BsArrowRightShort} from "react-icons/bs";





const Interview = () => {
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
   
        <div className="main_cards">
        <div className="wrap_data">
          {data.map((val) => {
            return (
              <>
              <div className={`cards_entries${val.id}`}>
                <h1>{val.title}</h1>
                <p>{val.para}</p>
                
                <Button onClick={()=>hist(val.path)}>Start <BsArrowRightShort style={{"marginLeft":"0.5rem","fontSize":"1rem"}}/></Button>
                </div>
              </>
            );
          })}
        </div>
      </div>
      </div>
    </>
  );
};

export default Interview;
