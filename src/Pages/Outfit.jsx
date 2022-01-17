import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import * as tmImage from "@teachablemachine/image";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../Style/interview.css";
import {Button} from '@mui/material';
import "../Style/Outfit.css";
const Outfit = () => {



  const videoref = useRef(null);
  const [mobile,setmobile]=useState('');
  const [bottle,setbottle]=useState('');
  const URL = "https://teachablemachine.withgoogle.com/models/efcWHlIUP/";
  let model, webcam, labelContainer, maxPredictions;

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  const init = async () => {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    webcam = new tmImage.Webcam(200, 200);
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    videoref.current=webcam.canvas;
    
  };

  async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
  }

  async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
      const classPrediction =
        prediction[i].className + ": " + prediction[i].probability.toFixed(2);
        
        if(prediction[i].className==="mobile"){
          setmobile(classPrediction);

        }else{
          setbottle(classPrediction);
        }
    }
  }

  const hist =useNavigate();
  const ChangeRoute =  () => {
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
        <div className="container">
        <Webcam
          audio={false}
          height={720}
          ref={videoref}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
          mirrored={true}
        />
        <div className="Wrapper_btn">
      <Button onClick={init}> start</Button>
       <p style={{"color":"white"}}>{mobile}</p>
       <p style={{"color":"white"}}>{bottle}</p>
       </div>
      </div>
        </div>
    </div>
  )
}

export default Outfit
