import React from 'react';
import "../Style/Home.css";
import Appbar from "../Components/Appbar";
import Main_Button from "../Components/Main_Button";

const Home=()=>{
  return(
      <>
        <Appbar/>
        <Main_Button/>
        <div className="main_home">
        </div>
        
      </>
  );
}

export default Home;