import React, { useContext, useEffect, Fragment } from "react";
import DictaphoneContext from "../../context/dictaphone/dictaphoneContext";
import "./transcript.css";
import isChrome from "../../utils/checkIfChrome";

const Transcript = () => {
  const dictaphoneContext = useContext(DictaphoneContext);
  const { transcript, listening } = dictaphoneContext;
  let end = null;

  const content = transcript.length ? (
    transcript.map((text, key) => (
      <div className="card" key={key}>
        <div> {new Date().toLocaleString()} </div>
        <div> {text} </div>
      </div>
    ))
  ) : listening ? (
    <div className="card bg-success">
      Transcript is empty. Please speak to the microphone
    </div>
  ) : (
    <div className="card bg-danger">
      Mic is turned off. Please click start button first
    </div>
  );
  const scroll = () =>
    end !== null ? end.scrollIntoView({ behavior: "smooth" }) : null;
  useEffect(() => {
    scroll();
    // eslint-disable-next-line
  }, [transcript]);
  return (
    <Fragment>
      {isChrome ? (
        <div className="text-left margin-y-2" id="transcript">
          {content}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              end = el;
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </Fragment>
  );
};

export default Transcript;
