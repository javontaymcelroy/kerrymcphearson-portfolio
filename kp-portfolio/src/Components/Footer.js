import React from "react";

import medium from "../Assets/Medium.svg";
import linkedin from "../Assets/linkedin.svg";
import instagram from "../Assets/instagram.svg";
import twitter from "../Assets/twitter.svg";
import tumblr from "../Assets/tumblr.svg";
import dribbble from "../Assets/Dribble.svg";

import "../SCSS/Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h1>Hey Let's connect!</h1>
        <h2>
          Want to collaborate or talk about Music, Film, Art, Tech, and Video
          Games?
        </h2>

        <div className="icons-flex">
          <img src={medium} alt="Medium" className="icons" />
          <img src={linkedin} alt="Linked In" className="icons" />
          <img src={instagram} alt="Instagram" className="icons" />
          <img src={twitter} alt="Twitter" className="icons" />
          <img src={tumblr} alt="Tumblr" className="icons" />
          <img src={dribbble} alt="Dribbble" className="icons" />
        </div>

        <div className="contact-info">
          <p className="email">
            Email // <mark>KerryMcphearson9@gmail.com</mark>
          </p>
          <p className="email">
            Resume // <a href="#">Click Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
