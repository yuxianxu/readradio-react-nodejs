import React, { Component } from "react";
import "../../App.scss";
import { Link } from "react-router-dom";
import Dictaphone from "../Dictaphone/Dictaphone";
import Transcript from "../Dictaphone/Transcript";
import DictaphoneState from "../../context/dictaphone/DictaphoneState";
import ReactPlayer from "react-player/file";
import Calgary from "../../assets/img/cbc-calgary.webp";
import Vancouver from "../../assets/img/cbc-Vancouver.png";
import Montreal from "../../assets/img/cbc-montreal.png";
import Toronto from "../../assets/img/cbc-toronto.webp";
import Manitoba from "../../assets/img/cbc-manitoba.png";
import Ottawa from "../../assets/img/cbc-ottawa.webp";
import Edmonton from "../../assets/img/cbc-edmonton.webp";
import Saskatchewan from "../../assets/img/cbc-saskatchewan.webp";
import Thunder from "../../assets/img/cbc-thunder-bay.png";

class InternationalList extends Component {
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
              <div className="transcription__notes">
                {" "}
                📝 Transcription notes{" "}
              </div>
              <Transcript />
              <Dictaphone browserSupportsSpeechRecognition />
            </section>
            <section className="radioList">
              <th>International Radio Station </th>
              <td className="radioList__buttons">
                <Link to="/international?lang=zh-CN&city=beijing&channel=fm1039">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://rtmp-push.tingtingfm.com/bjradio/fm1039.m3u8?auth_key=1643862239-jjfgWtkO-0-06c1999d99636e38aee3874848842d63",
                      })
                    }
                  >🇨🇳 北京103.9
                    {/* <img
                      className="radioList__img"
                      src={Calgary}
                      alt="cbc calgary logo"
                    /> */}
                  </button>
                </Link>
                <Link to="/international?lang=fr-FR&country=france&channel=inter">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://stream.radiofrance.fr/franceinter/franceinter.m3u8?id=radiofrance",
                      })
                    }
                  >
                    🇫🇷 France Inter
                  </button>
                </Link>
                <Link to="/international?lang=fr-FR&country=france&channel=culture">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://stream.radiofrance.fr/franceculture/franceculture.m3u8?id=radiofrance",
                      })
                    }
                  >🇫🇷 France Culture
                    {/* <img
                      className="radioList__img"
                      src={Montreal}
                      alt="cbc montreal logo"
                    /> */}
                  </button>
                </Link>
                <Link to="/international/toronto">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_TOR@118420/master.m3u8",
                      })
                    }
                  >
                    <img
                      className="radioList__img"
                      src={Toronto}
                      alt="cbc toronto logo"
                    />
                  </button>
                </Link>
                <Link to="/international/manitoba">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_WPG@384111/master.m3u8",
                      })
                    }
                  >
                    <img
                      className="radioList__img"
                      src={Manitoba}
                      alt="cbc manitoba logo"
                    />
                  </button>
                </Link>
                <Link to="/international/ottawa">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_OTT@348188/master.m3u8",
                      })
                    }
                  >
                    <img
                      className="radioList__img"
                      src={Ottawa}
                      alt="cbc ottawa logo"
                    />
                  </button>
                </Link>
                <Link to="/international/edmonton">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_EDM@372985/master.m3u8",
                      })
                    }
                  >
                    <img
                      className="radioList__img"
                      src={Edmonton}
                      alt="cbc edmonton logo"
                    />
                  </button>
                </Link>
                <Link to="/international/saskatchewan">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_REG@118346/master.m3u8",
                      })
                    }
                  >
                    <img
                      className="radioList__img"
                      src={Saskatchewan}
                      alt="cbc saskatchewan logo"
                    />
                  </button>
                </Link>
                <Link to="/international/thunderbay">
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://cbcliveradio-lh.akamaihd.net/i/CBCR1_TBA@366707/master.m3u8",
                      })
                    }
                  >
                    <img
                      className="radioList__img"
                      src={Thunder}
                      alt="cbc thunder bay logo"
                    />
                  </button>
                </Link>
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
                <button
                  className="player__pause"
                  onClick={this.handlePlayPause}
                >
                  {playing ? "⏸️ " : "▶️"}
                </button>
              </div>
            </section>
          </div>
        </div>
      </DictaphoneState>
    );
  }
}

export default InternationalList;
