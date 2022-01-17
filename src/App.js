import React from "react";
import { Routes, Route } from "react-router-dom";
import Interview from "./Pages/Interview";
import Home from "./Pages/Home";
import WrittingSkills from "./Pages/WrittingSkills";
import Practice from "./Pages/Practice";
import MirrorReading from "./Pages/MirrorReading";
import ListiningSkills from "./Pages/ListiningSkills";
import Outfit from "./Pages/Outfit";
import Live_Interview from "./Pages/Live_Interview";
import Tech_firstpg from "./Pages/Tech_firstpg";
import Extras from "./Pages/Extras";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/interview" element={<Interview />} />
        <Route exact path="/practice" element={<Practice />} />
        <Route exact path="/mirrorReading" element={<MirrorReading />} />
        <Route exact path="/writtingSkills" element={<WrittingSkills />} />
        <Route exact path="/listingSkills" element={<ListiningSkills />} />
        <Route exact path="/outfit" element={<Outfit />} />
        <Route exact path="/liveInterview" element={<Live_Interview/>} />
        <Route exact path="/technicalInterview" element={<Tech_firstpg/>} />
        <Route exact path="/extras" element={<Extras/>} />
      </Routes>
    </>
  );
}

export default App;
