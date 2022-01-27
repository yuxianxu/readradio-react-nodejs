import React from "react";
import BackgroundImg from "../../assets/img/sky-night-27s.jpg";
import BackgroundImgLang from "../../assets/img/language.png";
import BackgroundImgLangTwo from "../../assets/img/language-2.png";
import BackgroundImgSecond from "../../assets/img/wave1.svg";
import BackgroundVideo from "../../assets/img/night-sky-7s.mp4";

const Homepage = () => {
  // const video = document.getElementsByClassName("video");

  // function myFunction() {
  //     if (video.paused) {
  //       video.play();
  //     }
  // }

  return (
    <div className="homepage">
      <section class="showcase">
        <div class="video-container">
          <video
            className="video"
            loop
            poster={BackgroundImg}
            muted
            src={BackgroundVideo}
            // type="video/mp4"
            autoplay="autoplay"
          ></video>
        </div>
        <div className="content">
          <div className="content__hero">
            <h1 className="content__title">
              Live radio, real-time transcription
            </h1>
            {/* <h3 className="content__sub-title">Full screen video landing page</h3> */}
            <a href="/local?lang=en-CA" class="btn">
              Start Listening & Reading
            </a>
          </div>
          <div className="content__background-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#f3f4f5"
                fill-opacity="1"
                d="M0,128L60,117.3C120,107,240,85,360,106.7C480,128,600,192,720,192C840,192,960,128,1080,101.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
            <div className="main__promotion main__promotion-text">
              <div className="main__free">
                <p>100% Free</p>
                <p className="main__hero-gray">Unlimited time</p>
              </div>
              <div className="main__language">
                <p>76 + </p>
                <p className="main__hero-gray">Languages Supported</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="main__description"></section> */}
      <div className="main__background">
        <div className="main__description--top">
          <div className="main__promotion">
            <div className="main__free">
            <img className="main__free-img" src={BackgroundImgLang} alt="speech to text" />
            </div>
            <div className="main__language">
            <img className="main__language-img" src={BackgroundImgLangTwo} alt="speech to text" />
            </div>
          </div>
        </div>

        <svg className="main__background--middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,128L40,138.7C80,149,160,171,240,170.7C320,171,400,149,480,154.7C560,160,640,192,720,176C800,160,880,96,960,85.3C1040,75,1120,117,1200,144C1280,171,1360,181,1400,186.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section id="about">
        <h1>About</h1>
        <p className="main__text">
          Listen live radio, read real-time transcription, save notes and post
          comments to request wish radio station.
        </p>

        <div class="social">
          <a href="https://twitter.com/traversymedia" target="_blank">
            <i class="fab fa-twitter fa-3x"></i>
          </a>
          <a href="https://facebook.com/traversymedia" target="_blank">
            <i class="fab fa-facebook fa-3x"></i>
          </a>
          <a href="https://github.com/bradtraversy" target="_blank">
            <i class="fab fa-github fa-3x"></i>
          </a>
          <a href="https://www.linkedin.com/in/bradtraversy" target="_blank">
            <i class="fab fa-linkedin fa-3x"></i>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
