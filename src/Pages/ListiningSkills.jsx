import React, { useState, useEffect } from "react";
import "../Style/interview.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import REQDATA from "../Data/ListiningSkillsData";
import "../Style/Listining.css";
import { Button } from "@mui/material";

const randomPara=Math.floor(Math.random() * 12);

const ListiningSkills = () => {
  const [score, setScore] = useState(0);
  const [useAns, setUserAns] = useState("");
  const [paragraph, setparagraph] = useState("");
  const [getScore,setgetScore]=useState(true);
  



  const hist = useNavigate();
  const ChangeRoute = () => {
    hist("/practice");
  };

  //speech synthesis
  const speakOut = (message) => {
    const speech = new SpeechSynthesisUtterance();
    var allVoices = speechSynthesis.getVoices();
    speech.text = message;
    console.log(allVoices)
    speech.voice = allVoices[2];
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  };

  const checkAns = (ans) => {
    if (useAns === "") {
      alert("Empty Answer");
    } else {
      if (useAns.toLowerCase() === ans.toLowerCase()) {
        setScore(score + 1);
        alert("Answer accepted!!");
      } else {
        alert("Wrong answer!!");
      }
    }
  };

  const Results=()=>{
    setgetScore(!getScore)
  }

  const Restart=()=>{
    setgetScore(!getScore);
    setScore(0);
  }

  const listen = () => {
    
    speakOut(paragraph);
  };

  useEffect(() => {
 
   
    setparagraph(REQDATA[randomPara].para);
  });

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

        <div className="Listining_skills_questions">
          
          <div className="title">
            <h1>{getScore?"Questions":"You Score"}</h1>
          </div>

          {getScore?REQDATA[randomPara].Questions.map((val) => {
            return (
              <>
                <div className="input_btn">
                  <div className="input_btn_wrap">
                    <p>{val.quesText}</p>

                    <input
                      placeholder="Answer in one word..."
                      onChange={(e) => setUserAns(e.target.value)}
                    />
                    <Button
                      onClick={() => {
                        checkAns(val.Answer);
                      }}
                    >
                      Submit
                    </Button>
                  </div>
                </div>
              </>
            );
          }):<div><p>{`Your Score : ${score} out of 5`}</p></div>}
          <div className="btns_wrap_listing">
            <Button onClick={getScore?Results:Restart}> {getScore?"Get Score":"Restart"} </Button>
            <Button onClick={()=>{
             console.log(paragraph);
              listen();

            }}>Listen Para</Button>
          </div>
        </div>
        <div className="note_para">
          <p>
            Note: To Listen In Female Voice Click Listen Para Again.
          </p>
        </div>
      </div>
    </>
  );
};

export default ListiningSkills;
