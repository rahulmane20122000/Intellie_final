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

const WrittingSkills = () => {
  const textareRef = useRef();

  //tensor

  //tensor_end

  //azure
  // const {
  //   TextAnalyticsClient,
  //   AzureKeyCredential,
  // } = require("@azure/ai-text-analytics");
  // const key = "84342dc624354a658939f5db9b1a40fc";
  // const endpoint = "https://westus2.api.cognitive.microsoft.com/";
  // const textAnalyticsClient = new TextAnalyticsClient(
  //   endpoint,
  //   new AzureKeyCredential(key)
  // );
  // var textUser = [];
  //azure_End

  const [para, setPara] = useState("");
  const [userInput, setInput] = useState("");
  const [summarise, setsummarise] = useState("");
  const [flag, setflag] = useState(true);
  const [wordCount, setWordCount] = useState(0);

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
    let Summarizer = new SummarizerManager(userInput, 10);
    let sentiment = Summarizer.getSummaryByFrequency().summary;
  
    setsummarise(sentiment);
  };

  // const textQuality = async () => {
  //   if (userInput) {
  //     const documents = [userInput];
  //     const actions = {
  //       extractSummaryActions: [
  //         { modelVersion: "latest", orderBy: "Rank", maxSentenceCount: 5 },
  //       ],
  //     };
  //     const poller = await textAnalyticsClient.beginAnalyzeActions(
  //       documents,
  //       actions,
  //       "en"
  //     );
  //     const resultPages = await poller.pollUntilDone();
  //     for await (const page of resultPages) {
  //       const extractSummaryAction = page.extractSummaryResults[0];
  //       if (!extractSummaryAction.error) {
  //         for (const doc of extractSummaryAction.results) {
  //           if (!doc.error) {
  //             console.log("\tSummary:");
  //             for (const sentence of doc.sentences) {
  //               textUser.push(sentence.text);
  //             }
  //           } else {
  //             console.error("\tError:", doc.error);
  //           }
  //         }
  //       }
  //     }

  //     textUser = textUser.toString();
  //     setsummarise(textUser);
  //   } else {
  //     alert("please Type something");
  //   }
  // };

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
                  <p>Word Count:  {wordCount}</p>
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
