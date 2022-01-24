import React, { useContext, useEffect, Fragment } from "react";
import DictaphoneContext from "../../context/dictaphone/dictaphoneContext";
import "./transcript.css";
import isChrome from "../../utils/checkIfChrome";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const Transcript = () => {
  const dictaphoneContext = useContext(DictaphoneContext);
  const { transcript, listening, clearTranscript, updateTranscript } =
    dictaphoneContext;
  let end = null;

  const content = transcript.length ? (
    transcript.map((text, key) => (
      <div className="card" key={key}>
        <div> {text} </div>
      </div>
    ))
  ) : listening ? (
    <div className="card bg-success">
      Transcript is empty. Please speak to the microphone
    </div>
  ) : (
    <div>{/* Mic is turned off. Please click start button first */}</div>
  );
  const scroll = () =>
    end !== null ? end.scrollIntoView({ behavior: "smooth" }) : null;
  useEffect(() => {
    scroll();
    // eslint-disable-next-line
  }, [transcript]);

  // console.log(transcript);

  const saveNotes = () => {
    // console.log(content)

    axios
      .post(`${API_URL}/mynotes`, {
        transcript: transcript,
      })
      .then((res) => console.log(res));

    clearTranscript();
  };

  const card = document.getElementsByClassName("card");

  return (
    <Fragment>
      {isChrome ? (
        <div className="text-left margin-y-2" id="transcript">
          <div className="transcription__notes"> - Transcription notes - </div>
          <div className="transcription__content">{content}</div>
          <div className="transcription__time">
            {" "}
            {new Date().toLocaleString()}{" "}
          </div>
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              end = el;
            }}
          />
          {transcript ? (
            <button className="transcription__save-button" onClick={saveNotes}>
              Save notes
            </button>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default Transcript;
