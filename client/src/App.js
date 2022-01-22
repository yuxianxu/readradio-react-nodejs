import React, { Component } from "react";
import "./App.scss";
import Dictaphone from "./components/Dictaphone/Dictaphone";
import Transcript from "./components/Dictaphone/Transcript";
import DictaphoneState from "./context/dictaphone/DictaphoneState";
import ReactPlayer from "react-player/file";
import Calgary from "../src/assets/img/cbc-calgary.webp"
import Vancouver from "../src/assets/img/cbc-Vancouver.png"
import Montreal from "../src/assets/img/cbc-montreal.png"
import Toronto from "../src/assets/img/cbc-toronto.webp"
import Manitoba from "../src/assets/img/cbc-manitoba.png"
import Ottawa from "../src/assets/img/cbc-ottawa.webp"
import Edmonton from "../src/assets/img/cbc-edmonton.webp"
import Saskatchewan from "../src/assets/img/cbc-saskatchewan.webp"
import Thunder from "../src/assets/img/cbc-thunder-bay.png"


class App extends Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  };

  load = (url) => {
    this.setState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  handlePlayPause = () => {
    this.setState({ playing: !this.state.playing });
  };

  handleStop = () => {
    this.setState({ url: null, playing: false });
  };

  handlePlay = () => {
    console.log("onPlay");
    this.setState({ playing: true });
  };

  handlePause = () => {
    console.log("onPause");
    this.setState({ playing: false });
  };

  renderLoadButton = (url, label) => {
    return <button onClick={() => this.load(url)}>{label}</button>;
  };

  ref = (player) => {
    this.player = player;
  };

  render() {
    const {
      url,
      playing,
      controls,
      light,
      volume,
      muted,
      loop,
      played,
      loaded,
      duration,
      playbackRate,
      pip,
    } = this.state;
    const SEPARATOR = " · ";

    return (
      <DictaphoneState>
        <div className="container text-center">
          <h1>Live transcription Radio</h1>
          <div className="main__container">
            <section className="transcription__container">
              <Transcript />
              <Dictaphone browserSupportsSpeechRecognition />
            </section>

            <section className="radioList">
              <th>Local Radio Station </th>
              <td className="radioList__buttons">
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_CGY@372026/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Calgary} alt="cbc calgary logo"/>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_VCR@314572/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Vancouver} alt="cbc vancouver logo"/>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_MTL@360544/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Montreal} alt="cbc montreal logo"/>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_TOR@118420/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Toronto} alt="cbc toronto logo"/>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_WPG@384111/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Manitoba} alt="cbc manitoba logo"/>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_OTT@348188/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Ottawa} alt="cbc ottawa logo"/>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_EDM@372985/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Edmonton} alt="cbc edmonton logo"/>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_REG@118346/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Saskatchewan} alt="cbc saskatchewan logo"/>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_TBA@366707/master.m3u8",
                    })
                  }
                ><img className="radioList__img" src={Thunder} alt="cbc thunder bay logo"/>
                </button>
              </td>
              <div className="player-wrapper">
                <ReactPlayer
                  ref={this.ref}
                  className="react-player"
                  width="5%"
                  height="5%"
                  url={url}
                  pip={pip}
                  playing={playing}
                  controls={controls}
                  light={light}
                  loop={loop}
                  playbackRate={playbackRate}
                  volume={volume}
                  muted={muted}
                  onReady={() => console.log("onReady")}
                  onStart={() => console.log("onStart")}
                  onPlay={this.handlePlay}
                  onEnablePIP={this.handleEnablePIP}
                  onDisablePIP={this.handleDisablePIP}
                  onPause={this.handlePause}
                  onBuffer={() => console.log("onBuffer")}
                  onPlaybackRateChange={this.handleOnPlaybackRateChange}
                  onSeek={(e) => console.log("onSeek", e)}
                  onEnded={this.handleEnded}
                  onError={(e) => console.log("onError", e)}
                  onProgress={this.handleProgress}
                  onDuration={this.handleDuration}
                />
                {/* <button onClick={this.handleStop}>Stop</button> */}
                <button className="player__pause" onClick={this.handlePlayPause}>
                  {playing ? "Pause ⏸️  " : "Play ▶️"}
                </button>
              </div>
            </section>
          </div>
        </div>
      </DictaphoneState>
    );
  }
}

export default App;
