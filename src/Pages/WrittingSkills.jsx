import React, { useState, useEffect, useRef } from "react";
import "../Style/interview.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import writtingData from "../Data/WrittingData";
import "../Style/writing.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import natural from "natural";
import axios from "axios";

const WrittingSkills = () => {
  const textareRef = useRef();

  const [para, setPara] = useState("");
  const [userInput, setInput] = useState("");
  const [summarise, setsummarise] = useState("");
  const [flag, setflag] = useState(true);
  const [wordCount, setWordCount] = useState(0);
  const [senti, setsenti] = useState("");
  const hist = useNavigate();

  const ChangeRoute = () => {
    hist("/");
  };

  const ChoosePara = () => {
    const random = Math.floor(Math.random() * 3);
    for (var i = 0; i < 1; i++) {
      setPara(writtingData[random].title);
    }
  };

  const paraChange = (e) => {
    var tokenizer = new natural.WordTokenizer();
    console.log(tokenizer.tokenize(userInput).length);
    setWordCount(tokenizer.tokenize(userInput).length);
    setInput(e.target.value);
  };

  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;
    if (minutes === 0 && seconds === 0) {
      textareRef.current.disabled = true;
      setflag(false);
    }
    return `${minutes}:${seconds}`;
  };

  const textQuality = async () => {

    
    let SummarizerManager = require("node-summarizer").SummarizerManager;
    let Summarizer = new SummarizerManager(userInput, 3);
    let sentiment = Summarizer.getSummaryByFrequency().summary;
    setsummarise(sentiment);

    var options = {
      method: 'POST',
      url: 'https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1',
      headers: {
        'content-type': 'application/json',
        'x-rapidapi-host': 'text-analysis12.p.rapidapi.com',
        'x-rapidapi-key': '2d81ce8341msh08d2f3c250eaf42p195d14jsn60a5050dc3e1'
      },
      data: {
        language: 'english',
        text: userInput
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setsenti(response.data.sentiment);
    }).catch(function (error) {
      console.error(error);
    });
  };

  useEffect(() => {
    ChoosePara();
  }, []);

  return (
    <>
      <div className="main_section">
        <nav className="backbtn">
          <div className="svg1">
            <BiArrowBack onClick={() => hist("/practice")} />
          </div>
          <div className="svg2">
            <AiFillHome onClick={ChangeRoute} />
          </div>
        </nav>

        <div className="timer">
          {flag ? (
            <CountdownCircleTimer
              children={children}
              isPlaying
              duration={900}
              colors={[
                ["#ffff", 0.33],
                ["#F7B801", 0.33],
                ["#A30000", 0.33],
              ]}
            />
          ) : (
            <p>Time UP Please press submit button for summary</p>
          )}
        </div>
        <div className="summary_wrap">
          <div className="wrap_writing">
            <div className="writing_content">
              <p>{para}</p>
              <textarea
                ref={textareRef}
                value={userInput}
                onChange={paraChange}
                placeholder="Start Typing..."
              />
              <div className="words_btn_wrap">
                <div className="btn_wrap_writing">
                  <Button onClick={textQuality}>Submit</Button>
                  <Button
                    onClick={() => {
                      setInput("");
                      setWordCount(0);
                      setsummarise("");
                    }}
                  >
                    Restart
                  </Button>
                  <p>Word Count: {wordCount}</p>
                  <p>sentiments: {senti}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="summary">
            <h1>Key Points</h1>
            <p>{summarise}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WrittingSkills;
