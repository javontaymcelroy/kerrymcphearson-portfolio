import React from "react";

import "../SCSS/About.scss";

import heroImg from "../Assets/aboutme_hero.png";
import musiccollage from "../Assets/MusicCollage.jpg";
import david from "../Assets/david.jpg";
import hacking from "../Assets/hacking.jpg";
import mind from "../Assets/mind.jpg";
import paper from "../Assets/paper.jpg";
import zora from "../Assets/zora.jpg";
import type from "../Assets/type.jpg";
import instagramblock from "../Assets/Instagram_Block.png";

const About = () => {
  return (
    <div className="About">
      <img src={heroImg} alt="Banner" className="hero-img" />

      <div className="about-hero-content">
        <h1 className="about-title">About Me</h1>
        <p className="about-desc">
          Hi, my name is Kerry and I’m a lover of design, art, and music. I
          believe that ideation, erudition, and design is the key to innovation.
          My vision is to create a world where technology and design can coexist
          to be ubiquitous, accessible, and as elegant as nature. <br></br>
          <br></br>I desire a world where we as people are 'in tune' with
          ourselves, each other, and our environment. I’m often described as
          being a creative thinker, empathizer, analytical, storyteller and a
          flat out enjoyable person to work with.
        </p>

        <h2 className="quotes-title">Quotes I Live By</h2>
        <p className="quotes-desc">
          “If you want to go fast, go alone. If you want to go far, go with
          others” - <mark>African Proverb</mark>
          <br></br>
          <br></br>“We can't solve problems by using the same kind of thinking
          we used when we created them."​ - <mark>Albery Einstein</mark>
          <br></br>
          <br></br>“If you had an easy time making a decision, then you don’t
          know all the facts” - <mark>Rob Redmon</mark>
        </p>
      </div>

      <div className="skills">
        <h1 className="skills-title">Skills</h1>
        <div className="skills-flex">
          <div className="skill-column">
            <h2 className="skill-category">Interpersonal</h2>
            <h3 className="skill">Empathetic</h3>
            <h3 className="skill">Collaboration</h3>
            <h3 className="skill">Problem-solving</h3>
            <h3 className="skill">Inquisitive</h3>
          </div>
          <div className="skill-column">
            <h2 className="skill-category">Design</h2>
            <h3 className="skill">Empathetic</h3>
            <h3 className="skill">Collaboration</h3>
            <h3 className="skill">Problem-solving</h3>
            <h3 className="skill">Inquisitive</h3>
          </div>
          <div className="skill-column">
            <h2 className="skill-category">Development</h2>
            <h3 className="skill">Empathetic</h3>
            <h3 className="skill">Collaboration</h3>
            <h3 className="skill">Problem-solving</h3>
            <h3 className="skill">Inquisitive</h3>
          </div>
          <div className="skill-column">
            <h2 className="skill-category">Software</h2>
            <h3 className="skill">Empathetic</h3>
            <h3 className="skill">Collaboration</h3>
            <h3 className="skill">Problem-solving</h3>
            <h3 className="skill">Inquisitive</h3>
          </div>
        </div>
      </div>

      <div className="personal-interests">
        <h1 className="pi-title">Personal Interests</h1>
        <h6 className="pi-caption">Music I'm Listening To</h6>
        <img src={musiccollage} alt="Collage of music" className="collage" />
        <h6 className="pi-caption">Books I'm Reading</h6>
        <div className="books-grid">
          <img src={type} alt="Thinking With Type" className="book1" />
          <img src={mind} alt="How To Create A Mind" className="book2" />
          <img src={paper} alt="Paper Girls" className="book3" />
          <img
            src={zora}
            alt="Hitting A Straight Lick With A Crooked Stick"
            className="book4"
          />
          <img src={david} alt="How Music Works" className="book5" />
          <img src={hacking} alt="Hacking Growth" className="book6" />
        </div>
        <h6 className="pi-caption">Pictures I'm Randomly Taking</h6>
        <img
          src={instagramblock}
          alt="instagram collage"
          className="instagram-block"
        />
      </div>
    </div>
  );
};

export default About;
