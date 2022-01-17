import React from 'react'
import "../Style/Main_Button.css";
import {Button} from '@mui/material';
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import { useNavigate } from 'react-router-dom';


const Main_Button = () => {

   const history=useNavigate();


    const routeChange=()=>{
      history("/interview");
    }
    return (
        <>
        <div className="main_button">
        <div className="main_button_wrap">
            <div className="Title_Ai">
                <h1>Ai-Based <br/> Interview Trainer's</h1>
                
            </div>
            <div className="get_started_button">
                <Button onClick={routeChange}>Explore Our Product <BsFillArrowRightCircleFill style={{"marginLeft":"0.5rem","fontSize":"1rem"}}/></Button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Main_Button;
