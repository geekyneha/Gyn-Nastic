import React, { useState } from "react";
import style from "./about.module.css";
import playVideoImage1 from "../../../Images/playVideoImage1.png";
import playVideoImage2 from "../../../Images/playVideoImage2.png";
import { BiPlayCircle } from "react-icons/bi";
import YouTube from "react-youtube";

const About = () => {
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  const videoId = "onUddEsHsK4"; // Replace with the actual YouTube video ID
  const options = {
    height: "230",
    width: "380",
  };

  const handleShow1 = () => {
    setShowVideo1(true);
  };
  const handleShow2 = () => {
    setShowVideo2(true);
  };
  return (
    <div className={style.aboutSection} id="about">
      <div className={style.aboutUs}>
        <div className={style.video1}>
          <img src={playVideoImage1} alt="Play Video" onClick={handleShow1} />
          <BiPlayCircle
            size={50}
            onClick={handleShow1}
            className={style.playButton}
          />

          {/* <iframe
        src="https://www.youtube.com/embed/onUddEsHsK4"
        title="YouTube video"
        allowFullScreen
      ></iframe> */}
          {showVideo1 && (
            <div className={style.youTubeVideo}>
              {" "}
              <YouTube videoId={videoId} opts={options} />{" "}
            </div>
          )}
        </div>
        <div className={style.aboutUsContainer}>
          <h1>About Us</h1>
          <div className={style.aboutUsText}>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              itaque, neque quidem quod, illum a corporis nesciunt totam
              voluptate architecto quasi placeat quo ea aliquam officia quas at
              culpa nisi reiciendis dicta perspiciatis? Quam, repudiandae.
            </p>
            <div className={style.learnMoreContainer}>
              <button className={style.learnMoreBtn}>Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div className={style.chooseUs}>
        <div className={style.WhyChooseUsContainer}>
          
          <div className={style.whyUsText}>
          <h1>Why Choose Us?</h1>
            <li>
              <span className={style.whyUsListText}>
                Consultation with Expert
              </span>
            </li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              culpa rem laborum illum dignissimos cum?
            </p>
            <li>
              <span className={style.whyUsListText}>
                Best Workout Facilities
              </span>
            </li>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              culpa rem laborum illum dignissimos cum?
            </p>
          </div>
          <div className={style.video2}>
            <img
              src={playVideoImage2}
              alt="Play Video"
              width={280}
              onClick={handleShow2}
            />
            <BiPlayCircle
              size={50}
              onClick={handleShow2}
              className={style.playButton}
            />

            {showVideo2 && (
              <div className={style.youTubeVideo}>
                {" "}
                <YouTube videoId={videoId} opts={options} />{" "}
              </div>
            )}
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default About;
