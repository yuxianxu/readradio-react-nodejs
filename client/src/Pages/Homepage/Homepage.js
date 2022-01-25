import React from "react";
import BackgroundImg from "../../assets/img/sky-night-27s.jpg";
import BackgroundVideo from "../../assets/img/night-sky-7s.mp4"

const Homepage = () => {
  // const video = document.getElementsByClassName("video");

  // function myFunction() {
  //     if (video.paused) {
  //       video.play();
  //     }
  // }

  return (
    <div>
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
          <h1 className="content__title">ReadRadio</h1>
          {/* <h3 className="content__sub-title">Full screen video landing page</h3> */}
          <a href="#about" class="btn">
            Start Listening & Reading
          </a>
        </div>
      </section>

      <section id="about">
        <h1>About</h1>
        <p>
          This is a landing page with a full screen video background. Feel free
          to use this landing page in your projects. keep adding sections,
          change the video, content , etc
        </p>

        <h2>Follow Me On Social Media</h2>

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
