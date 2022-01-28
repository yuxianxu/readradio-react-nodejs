import React, { Component } from "react";
import "../../App.scss";
import { Link, NavLink } from "react-router-dom";
import Dictaphone from "../Dictaphone/Dictaphone";
import Transcript from "../Dictaphone/Transcript";
import DictaphoneState from "../../context/dictaphone/DictaphoneState";
import ReactPlayer from "react-player/file";

class InternationalList extends Component {
  state = {
    url: null,
    pip: false,
    playing: true,
    controls: false,
    light: false,
    volume: 0.2,
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
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://rtmp-push.tingtingfm.com/bjradio/fm1039.m3u8?auth_key=1643862239-jjfgWtkO-0-06c1999d99636e38aee3874848842d63",
                    })
                  }
                >
                  <NavLink
                    strict
                    to="/international?lang=zh-CN&city=beijing&channel=fm1039"
                  >
                    🇨🇳 北京103.9
                  </NavLink>
                </button>
                <button
                  onClick={() =>
                    this.setState({
                      url: "https://stream.radiofrance.fr/franceinter/franceinter.m3u8?id=radiofrance",
                    })
                  }
                >
                  <NavLink
                    strict
                    to="/international?lang=fr-FR&country=france&channel=inter"
                  >
                    🇫🇷 France Inter
                  </NavLink>
                </button>
                <NavLink
                  activeClassName="button__active"
                  to="/international?lang=fr-FR&country=france&channel=culture"
                >
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://stream.radiofrance.fr/franceculture/franceculture.m3u8?id=radiofrance",
                      })
                    }
                  >
                    🇫🇷 France Culture
                  </button>
                </NavLink>
                <NavLink
                  activeClassName="button__active"
                  to="/international?lang=de-DE&country=german&channel=1diggi"
                >
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://wdrhf.akamaized.net/hls/live/2027963/1livediggi/96/seglist.m3u8",
                      })
                    }
                  >
                    🇩🇪 WDR 1 Live
                  </button>
                </NavLink>
                <NavLink
                  activeClassName="button__active"
                  to="/international?lang=es-MX&country=mexico&channel=Amor"
                >
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://18393.live.streamtheworld.com/WRADIOAAC.aac?csegid=12000&gdpr=0&dist=wradio_co-web-live_streaming_play&tdsdk=js-2.9&pname=TDSdk&pversion=2.9&banners=300x250&sbmid=8da5bd67-1330-4dca-f6cf-cfe504937938",
                      })
                    }
                  >
                    🇲🇽 Amor 95.3
                  </button>
                </NavLink>
                <NavLink
                  activeClassName="button__active"
                  to="/international?lang=ru&country=russia&channel=avtoradio"
                >
                  <button
                    onClick={() =>
                      this.setState({
                        url: "http://online.echoekb.ru:8000/echoekb?type=.mp3/;stream.mp3",
                      })
                    }
                  >
                    🇷🇺 Moscow
                  </button>
                </NavLink>
                <NavLink
                  activeClassName="button__active"
                  to="/international?lang=zh-TW&channel=rti"
                >
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://www.soundvideostar.com/live/_definst_/rti3/chunklist_w1129242241.m3u8",
                      })
                    }
                  >
                    🇹🇼 華語線上
                  </button>
                </NavLink>
                <NavLink
                  activeClassName="button__active"
                  to="/international?lang=en-US&country=us&channel=kiss-fm1027"
                >
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://rogers-hls.leanstream.co/rogers/kin1027.stream/playlist.m3u8?environment=web&args=web_01",
                      })
                    }
                  >
                    🇺🇸 LA KISS
                  </button>
                </NavLink>
                <NavLink
                  activeClassName="button__active"
                  to="/international?lang=en-US&country=us&channel=y100"
                >
                  <button
                    onClick={() =>
                      this.setState({
                        url: "https://n14b-e2.revma.ihrhls.com/zc561/20_tqnuaiqqzhdr02/playlist.m3u8?rj-ttl=5&pname=live_profile&companionAds=false&dist=iheart&terminalId=163&deviceName=web-desktop&rj-tok=AAABfo_pCP0AQfsabzZg4mpzSA&aw_0_1st.playerid=iHeartRadioWebPlayer&listenerId=98cafe80fe7fbe7be2c5581eb191a2b5&clientType=web&profileId=1644469835&aw_0_1st.skey=1644469835&host=webapp.CA&playedFrom=157&stationid=561&territory=CA",
                      })
                    }
                  >
                    🇺🇸 Miami Y100
                  </button>
                </NavLink>
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
                <div className="player__bottom">
                  <button
                    className="player__pause"
                    onClick={this.handlePlayPause}
                  >
                    {playing ? "⏸️ " : "▶️"}
                  </button>
                  <button className="player__bottom-wish">♥️ wish list</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </DictaphoneState>
    );
  }
}

export default InternationalList;
