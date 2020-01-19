import React from "react";

import triangle from "../Assets/blue_triangle.svg";
import bang from "../Assets/bang.svg";
import chameleon from "../Assets/chameleon.svg";
import wave from "../Assets/wave.svg";
import chevron from "../Assets/chevron.svg";

import cloutcharts from "../Assets/CloutCharts.png";
import revitalize from "../Assets/Revitalize.png";
import Q4TB from "../Assets/Q4TB.png";
import SE from "../Assets/SE.png";

import "../SCSS/Home.scss";

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="hero-section">
          <h1>
            Hi, my name is Kerry McPhearson & I'm a Product Designer Hailing
            From Atlanta, GA
          </h1>
        </div>
        <img src={triangle} className="hero-triangle" alt="blue triangle" />
        <img src={bang} className="hero-bang" alt="yellow bang" />
        <img src={chameleon} className="hero-chameleon" alt="chameleon" />
        <img src={wave} className="hero-wave" alt="blue wave" />
      </div>
      <div className="scroll-down-container">
        <p className="scroll-down">Scroll Down to View My Projects</p>
        <img src={chevron} alt="scroll down" className="chevron" />
      </div>
      <div className="grid-container">
        <div className="cloutcharts">
          <img src={cloutcharts} alt="Clout Charts" className="square-image" />
          <div className="project-info">
            <h1 className="project-title">Clout Charts</h1>
            <p className="project-desc">
              CC is a streaming aggregator service that lets listeners explore
              music from all over the world.{" "}
            </p>
          </div>
        </div>
        <div className="q4tb">
          <img src={Q4TB} alt="Quest for the Best" className="verticle-image" />
          <div className="project-info">
            <h1>Quest For The Best</h1>
            <p className="project-desc">
              Quest For The Best is a social challenge platform that encourages
              members of a community to seek out the best available experiences
              in their area.
            </p>
          </div>
        </div>
        <div className="revitalize">
          <img src={revitalize} alt="Revitalize" className="square-image" />
          <div className="project-info">
            <h1 className="project-title">Revitalize</h1>
            <p className="project-desc">
              Revitalize is a crowdfunding/CRM platform for trade
              apprenticeships and small business owners. .
            </p>
          </div>
        </div>
        <div className="se">
          <img src={SE} alt="Solve Employment" className="banner-image" />
          <div className="project-info">
            <h1 className="project-title">Solve Employment</h1>
            <p className="project-desc">
              Solve Employment is a socially responsible freelancing platform
              that helps you grow your business and make a difference.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
