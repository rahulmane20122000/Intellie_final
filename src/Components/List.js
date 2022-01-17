import React from "react";
import { useNavigate } from "react-router-dom";
import {Button} from '@mui/material';
import "../Style/List.css";

const List = (props) => {
    const navigate=useNavigate();
  return (
    <>
      <div className="practice_list">
        <h1>{props.title}</h1>
        <Button onClick={()=>navigate(props.path)}>Start</Button>
      </div>
    </>
  );
};

export default List;
