import React from "react";
import heroBanner from "../Assets/cloutcharts_hero.jpg";
import streamers from "../Assets/streaming_platforms.jpg";
import timeline from "../Assets/timeline.jpg";
import survey from "../Assets/survey.jpg";

import imac from "../Assets/imac.svg";
import handphone from "../Assets/hand_phone.svg";
import applewatch from "../Assets/applewatch.svg";

import "../SCSS/CloutCharts.scss";

const CloutCharts = () => {
  return (
    <div className="CloutCharts">
      <img src={heroBanner} alt="Clout Charts Banner" className="hero-banner" />
      <div className="body">
        <div className="project-details">
          <div className="overview">
            <h1>Overview</h1>
            <p>
              Clout Charts is a streaming aggregator service that lets listeners
              explore music from all over the world while creating an equal
              footing for artists around the world.{" "}
            </p>
          </div>
          <div className="role">
            <h1>My Role</h1>
            <p>Product Designer</p>
          </div>
          <div className="timeline">
            <h1>Timeline</h1>
            <p>
              This project took place over 9 Weeks in November and December,
              2019
            </p>
          </div>
          <div className="responsibilities">
            <h1>Responsibilities</h1>
            <p>
              Content Strategist, User Interface Design, UX Research, Product
              Design, and Asset Collector
            </p>
          </div>
          <div className="team">
            <h1>Team</h1>
            <p>
              1 UX Researcher, 3 Product Designers, 1 Brand Desgner, and 1
              Developer
            </p>
          </div>
        </div>
        <div className="text--content">
          <h1>The Current State of Streaming Services in 2020</h1>
          <p>
            There are countless stream services that exist on the internet that
            people visit to listen to music.
            <br></br>
            <br></br>
            Streaming services have provided easier access to wide styles of
            music for people all over the world. Unfortunately, there are
            countless artists and bands who have not been discovered, thus
            creating a void for many different music genres and styles.
            <br></br>
            <br></br>
            Even though there are platforms and blogs that give exposure to
            unique artists like Bandcamp or TinyMixtapes, it is still
            troublesome for most users to search for artists that still fly
            under the radar in the internet age.
          </p>
          <img src={streamers} alt="streaming platforms" className="reg-img" />

          <h1>Advocating Music Exploration with Clout Charts </h1>
          <p>
            Idealistically, Clout Charts aims to provide equal grounding for
            every artist while also exposing listeners to unique and diverse
            music selection.
            <br></br>
            <br></br>
            As the primary product designer on this project, I heavily focused
            on designing a unique experience that enables listeners to interact
            with artists and other listeners.
            <br></br>
            <br></br>
            After detailed research on understanding listeners and artists, our
            challenge became clear; create an easy to navigate music streaming
            exploration site that is unique for our listeners and enables
            interaction with all user roles.
            <br></br>
            <br></br>
            My team of designers began to unpack the challenge by scoping and
            conceptualizing how we could create a unique and user-friendly music
            exploration streaming platform.
          </p>
          <h4>Timeline</h4>
          <img src={timeline} alt="timeline" className="reg-img" />

          <h1>Original Solution</h1>
          <p>
            The original solution was to create a chart platform that shows all
            the collective streams an artist accrued across all music streaming
            services.{" "}
          </p>

          <h1>Problem with that Solution</h1>
          <p>
            After deep analysis through reading articles and blogs, the research
            team found the original solution to be flawed. Charts, lists, and
            genres do not always help artists and can hinder music exploration.
            <br></br>
            <br></br>
            Although rankings and statistics can provide valuable data to
            artists and labels, in the long run, psychologically, these can
            create mental barriers for people to go beyond the charts and
            discover music by other artists.
          </p>

          <h1>Understanding How Users Listen to Music </h1>
          <p>
            After taking a step back and realizing our current missteps, our
            team decided to do an ethnographic/qualitative interview with people
            to see how they hear, consume, and discover music. During this time,
            we interviewed many age groups in vast cities: Atlanta, Houston,
            Oakland, Newyork, etc.
            <br></br>
            <br></br>
            My team interviewed age groups in between 17- 55, male and
            female.From our results, our survey found that most users discovered
            music through playlists and chart rankings.
          </p>

          <h4>Survey Results</h4>
          <img src={survey} alt="survey chart" className="reg-img" />

          <h1>Key Findings</h1>
          <p>
            While conducting interviews, it was interesting to learn not only
            how people discovered music, but learn their initial problems with
            streamings services and chart listings as well. It seems that people
            wanted to discover music out of curiosity, but ran into a couple of
            roadblocks throughout the process.
          </p>
        </div>
        <div className="three-column-flex">
          <div>
            <img src={applewatch} alt="" className="small-img" />
            <p>Users don’t have time to discover new music</p>
          </div>
          <div>
            <img src={handphone} alt="" className="small-img" />
            <p>
              Users normally discover new music through social media or word of
              mouth
            </p>
          </div>
          <div>
            <img src={imac} alt="" className="small-img" />
            <p>
              Users that search for music on the web have a hard time finding
              music they care about due to bias , ads, & artist not appearing on
              certain streaming services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloutCharts;
