import React from "react";
import style from "./footer.module.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style["footer-container"]}>
        <div className={style.CTA}>
          <h1>GYM</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit,
            deserunt.
          </p>
          <div>
            <Link to='https://www.facebook.com/'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSPzzGUG4Jieibe8GJrRBMPeAKvQ9t6lrCDA&usqp=CAU"
                alt="fb"
                width={40}
              />
            </Link>
            <Link to='https://www.instagram.com/'>
              <img
                src="https://img.freepik.com/premium-vector/modern-badge-logo-instagram-icon_578229-124.jpg"
                alt="insta"
                width={40}
              />
            </Link>
            <Link to='https://www.twitter.com/'>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVGYC3cZf7Q0gAB90dvmtK8J8H3Vc-6dZHA&usqp=CAU"
                alt="twitter"
                width={40}
              />
            </Link>
          </div>
        </div> 
        <div className={style["healty-living"]}>
          <li>healty-living</li>
          <li>Lorem</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
        </div>

        <div className={style["services"]}>
          <li>services</li>
          <li>Lorem</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
        </div>
        <div className={style["Programs"]}>
          <li>Programs</li>
          <li>Lorem</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem, ipsum.</li>
          <li>Lorem.</li>
        </div>
      </div>
      <div className={style["copy-right"]}>
        &copy; 2023 is all right reserverd copyright
      </div>
    </div>
  );
};

export default Footer;
