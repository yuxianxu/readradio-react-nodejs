import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import SpeechRecognition from "react-speech-recognition";
import DictaphoneContext from "../../context/dictaphone/dictaphoneContext";
import isChrome from "../../utils/checkIfChrome";
import axios from 'axios';

const Dictaphone = ({
  transcript,
  resetTranscript,
  browserSupportsSpeechRecognition,
  startListening,
  stopListening,
  listening,
  finalTranscript,
}) => {
  const dictaphoneContext = useContext(DictaphoneContext);
  const { updateTranscript, clearTranscript, startListen, stopListen } =
    dictaphoneContext;

  useEffect(() => {
    updateTranscript(finalTranscript);
    resetTranscript();
    // console.log(`final: ${finalTranscript}`);
    // eslint-disable-next-line
  }, [finalTranscript]);

  const listenContinuouslyInChinese = () => startListening({
    continuous: true,
    language: 'zh-CN'
  })

  if (!browserSupportsSpeechRecognition)
    return <div style={{ color: "red" }}>Browser does not supports this</div>;

  const start = () => {
    startListening();
    startListen();
  };

  const stop = () => {
    resetTranscript();
    stopListening();
    stopListen();
  };

  const API_URL = process.env.REACT_APP_API_URL;

  // const transcriptContent = document.getElementById("transcript"); 
  // console.log(transcriptContent)

  
  const reset = () => {

    // console.log(content)
    
    axios
    .post(`${API_URL}/mynotes`, {
      transcript: content
    })
    .then((res) => console.log(res));

    clearTranscript();
  };

  // console.log(isChrome);
  let content = null;
  if (isChrome) {
    return (
      <div>
        {listening ? (
          <div className="card bg-warning text-left transcription__text">
            {transcript
              ? "Live transcribing: " + transcript
              : "Wait for audio input..."}
          </div>
        ) : (
          <div className="card text-left">
            Here, you can see what are being transcribed.
          </div>
        )}
        {listening ? (
          <button className="btn btn-danger btn-block" onClick={stop}>
            Stop
          </button>
        ) : (
          <>
            <button className="btn btn-success btn-block" onClick={start}>
              Start
            </button>
            <button className="btn btn-success btn-block" onClick={listenContinuouslyInChinese}>
              Start CN
            </button>
          </>
        )}
        <button className="btn btn-info btn-block" onClick={reset}>
          Reset
        </button>
      </div>
    );
  } else {
    return (
      <div className="card bg-danger">
        <h1>
          Oops! This app only works on chrome. Please use the chrome browser.
        </h1>
      </div>
    );
  }
};

Dictaphone.propTypes = {
  transcript: PropTypes.string,
  resetTranscript: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool,
};

const options = {
  autoStart: false,
  language: 'zh-CN'
};

export default SpeechRecognition(options)(Dictaphone);
