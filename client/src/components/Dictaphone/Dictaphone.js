import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import DictaphoneContext from "../../context/dictaphone/dictaphoneContext";
import isChrome from "../../utils/checkIfChrome";

const Dictaphone = ({
  startListening,
  stopListening,
}) => {
  const [transcribing, setTranscribing] = useState(true)
  const [clearTranscriptOnListen, setClearTranscriptOnListen] = useState(true)
  const toggleTranscribing = () => setTranscribing(!transcribing)
  const toggleClearTranscriptOnListen = () => setClearTranscriptOnListen(!clearTranscriptOnListen)
  const dictaphoneContext = useContext(DictaphoneContext);
 
  const {
    transcript,
    interimTranscript,
    finalTranscript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition({ transcribing, clearTranscriptOnListen })
 
  const { updateTranscript, clearTranscript, startListen, stopListen } =
    dictaphoneContext;

  useEffect(() => {
    updateTranscript(finalTranscript);
    resetTranscript();
    // console.log(`final: ${finalTranscript}`);
    // eslint-disable-next-line
  }, [finalTranscript]);

  const listenContinuouslyInChinese = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'zh-CN'
  })

  if (!browserSupportsSpeechRecognition)
    return <div style={{ color: "red" }}>Browser does not supports this</div>;

  const start = () => SpeechRecognition.startListening({
    continuous: true,
    language: 'en-GB'
  });

  const stop = () => {
    SpeechRecognition.stopListening();
    stopListen();
  };

  const API_URL = process.env.REACT_APP_API_URL;

  // const transcriptContent = document.getElementById("transcript");
  // console.log(transcriptContent)

  // const reset = () => {

  //   // console.log(content)

  //   axios
  //   .post(`${API_URL}/mynotes`, {
  //     transcript: content
  //   })
  //   .then((res) => console.log(res));

  //   clearTranscript();
  // };

  // console.log(isChrome);
  let content = null;
  if (isChrome) {
    return (
      <div>
        <button onClick={listenContinuouslyInChinese}>
          Listen continuously-Chinese
        </button>

        {listening ? (
          <div className="card bg-warning text-left transcription__text">
            {transcript
              ? "Live transcribing ✏️... " + transcript
              : "🎙️ Wait for audio input..."}
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
        {/* <button className="btn btn-info btn-block" onClick={reset}>
          Reset
        </button> */}
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
};

export default Dictaphone;
