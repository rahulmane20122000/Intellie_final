import React, { useEffect, useState } from "react";
import { createSpeechlySpeechRecognition } from "@speechly/speech-recognition-polyfill";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const appId = "effb82d0-5029-497e-9a62-8d8d232afac9";
const SpeechlySpeechRecognition = createSpeechlySpeechRecognition(appId);
SpeechRecognition.applyPolyfill(SpeechlySpeechRecognition);

const SpeechComponent = (props) => {
  const { transcript, listening } = useSpeechRecognition();

  const speakOut = (message) => {
    const speech = new window.SpeechSynthesisUtterance();
    // var allVoices = speechSynthesis.getVoices();
    speech.voiceURI = "Google हिन्दी";
    speech.lang = "hi-IN";
    speech.text = message;

    // speech.volume = 1;
    window.speechSynthesis.speak(speech);
  };

  useEffect(() => {
    speakOut(`Welcome To Intellie Interviews ${props.name}`);
    speakOut(`Lets start With Your Technical Interview`);
    speakOut("First of all tell me about yourself")
  });
  return (
    <div>
      <h1>page</h1>
    </div>
  );
};

export default SpeechComponent;
