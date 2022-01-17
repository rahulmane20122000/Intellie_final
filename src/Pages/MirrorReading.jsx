import React, { useState, useEffect } from "react";
import "../Style/interview.css";
import { BiArrowBack } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import data from "../Data/Mirror_Readinf";
import "../Style/Mirror.css";
import {Button} from '@mui/material';

const MirrorReading = () => {
  const hist = useNavigate();
  const ChangeRoute = () => {
    hist("/practice");
  };

  const [para, setpara] = useState();

  const change_para = () => {
    const random = Math.floor(Math.random() * 3);
    for (var i = 0; i < 1; i++) {
      setpara(data[random].para);
    }
  };

  const videoConstraints = {
    width: 1000,
    height: 500,
    facingMode: "user",
  };

  useEffect(() => {
    change_para();
  }, []);
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
        <div className="mirror_wrap">
          <div className="mirror_class">
            <Webcam
              audio={false}
              height={720}
              width={1280}
              videoConstraints={videoConstraints}
              className="mirror_webcam"
              mirrored={true}
              
            />
          </div>
          <div className="para_class">
            <p>{para}</p>
            <Button onClick={change_para}>change</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MirrorReading;
