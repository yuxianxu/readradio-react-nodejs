import React, { useContext, useEffect, Fragment } from "react";
import DictaphoneContext from "../../context/dictaphone/dictaphoneContext";
import "./transcript.css";
import isChrome from "../../utils/checkIfChrome";
import axios from "axios";
import LoadingSpinner from "../../utils/LoadingSpinner/LoadingSpinner";

const API_URL = process.env.REACT_APP_API_URL;

const Transcript = () => {
  const dictaphoneContext = useContext(DictaphoneContext);
  const { transcript, listening, clearTranscript } = dictaphoneContext;
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
  }, [transcript]);

  const saveNotes = () => {
    axios
      .post(`${API_URL}/mynotes`, {
        transcript: transcript,
      })
      .then((res) => console.log(res));

    clearTranscript();
  };

  const card = document.getElementsByClassName("card");

  console.log(transcript);

  return (
    <Fragment>
      {isChrome ? (
        <div className="text-left margin-y-2" id="transcript">
          {transcript.length == 0 ? (
            <div className="transcription__loading">
              <LoadingSpinner />
            </div>
          ) : (
            <div>
              <div className="transcription__content">{content}</div>
              <div className="transcription__bottom-container">

              <div className="transcription__time">
                {" "}
                Last note was post on {new Date().toLocaleString()}{" "}
              </div>
              <div
                style={{ float: "left", clear: "both" }}
                ref={(el) => {
                  end = el;
                }}
              />
              <button
                className="transcription__save-button"
                onClick={saveNotes}
              >
                Save notes
              </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default Transcript;
