import React, { useState, useRef } from "react";
import "../Style/SectionBtwo.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Webcam from "react-webcam";

const SectionBtwo = () => {

  const PredictionApi = require("@azure/cognitiveservices-customvision-prediction");
  const msRest = require("@azure/ms-rest-js");

  const predictionKey = "b7550474519e4808bdc993812abcddd8";
  const predictionEndpoint =
    "https://18kaleshubham-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/7b32f55c-0c3e-430d-94a3-621b6a2bc012/classify/iterations/Iteration2/image";
  const predictor_credentials = new msRest.ApiKeyCredentials({
    inHeader: { "Prediction-key": predictionKey },
  });
  const predictor = new PredictionApi.PredictionAPIClient(
    predictor_credentials,
    predictionEndpoint
  );
  const publishIterationName = "classifyModel";

  const [captureimg, setcaptureimg] = useState();
  const [cam, setcam] = useState(false);

  const videoConstraints = {
    width: 500,
    height: 300,
    facingMode: "user",
  };

  const webcamRef = useRef(null);

  const hist = useNavigate();

  const ChangeRoute = () => {
    hist("/interview");
  };

  const capture = (e) => {
    e.preventDefault();
    const imgsrc = webcamRef.current.getScreenshot();
    setcaptureimg(imgsrc);
    setcam(!cam);
  };

  const retake = (e) => {
    e.preventDefault();
    setcam(!cam);
  };

  const submit =   (e) => {
    e.preventDefault();
  
 
  //  var requestOptions = {
  //   method: 'POST',
  //   body: captureimg,
  //   redirect: 'follow'
  // };
fetch("http://localhost:4000/upload",{
  method:'POST',
  body:captureimg
}).then((res)=>console.log(res)).catch((err)=>console.error(err));
  

    // const results = await predictor.classifyImage(
    //   "7b32f55c-0c3e-430d-94a3-621b6a2bc012",
    //   publishIterationName,
    //   base64ToStringNew
    // );
    // results.predictions.forEach((predictedResult) => {
    //   console.log(
    //     `\t ${predictedResult.tagName}: ${(
    //       predictedResult.probability * 100.0
    //     ).toFixed(2)}%`
    //   );
    // });
  };

  return (
    <>
      <div className="main_section">
        <nav className="backbtn">
          <div className="svg1">
            <BiArrowBack onClick={ChangeRoute} />
          </div>
          <div className="svg2">
            <AiFillHome onClick={ChangeRoute} />
          </div>
        </nav>

        <div className="camera">
          {cam ? (
            <img src={captureimg} />
          ) : (
            <Webcam
              audio={false}
              height={300}
              ref={webcamRef}
              screenshotFormat="image/png"
              width={500}
              videoConstraints={videoConstraints}
              className={cam ? "webcam_comp_false" : "webcam_comp"}
              screenshotQuality="1"
            />
          )}
          <div className="predict_btns">
            <Button onClick={capture}>Click</Button>
            <Button onClick={retake}>Retake</Button>
            <Button onClick={submit}>Submit</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionBtwo;
