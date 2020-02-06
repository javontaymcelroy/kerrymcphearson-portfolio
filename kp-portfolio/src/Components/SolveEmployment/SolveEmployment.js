import React from "react";

import banner from "./main_banner.png";
import phones from "./phones.png";
import currentDesignState from "./current_design_State.png";
import userPersonas from "./user_personas.png";
import newUserPersonas from "./new_user_flow.png";
import maps from "./maps.png";
import sitemap from "./site_map.png";
import threePhones from "./three_phones.png";
import jobPhones from "./jobs_phones.png";
import profilePhones from "./profile_phones.png";
import userTesting from "./user_testing.png";
import final from "./final.png";

import stickies from "./stickies.jpg";

import "./SolveEmployment.scss";
import "../../SCSS/General.scss";

const SolveEmployment = () => {
  window.scroll(0, 0);
  return (
    <>
      <div className="SolveEmployment">
        <img
          src={banner}
          alt="Solve Employment Banner"
          className="caseStudy__banner"
        />
        <div className="overview__container">
          <div className="overview">
            <h4 className="category__header">Overview</h4>
            <p className="category__caption">
              Solve Employment is a non-profit with a socially responsible
              freelancing platform that helps those in Southeast Asia find
              employment.
            </p>
          </div>

          <div className="role">
            <h4 className="category__header">My Role</h4>
            <p className="category__caption">Product Designer</p>
          </div>

          <div className="timeline">
            <h4 className="category__header">Timeline</h4>
            <p className="category__caption">
              This project took place in 2 weeks on July 2019
            </p>
          </div>

          <div className="responsibilities">
            <h4 className="category__header"> Responsibilities</h4>
            <p className="category__caption">
              Worked on Talent/Applicant Mobile Design, UX Research, Product
              Thinking, Information Architecture, Interaction, Visual Design,
              Prototyping & testing.
            </p>
          </div>

          <div className=" team">
            <h4 className="category__header">Team</h4>
            <p className="category__caption">
              2 Stakeholders , 7 Product Designers, and 2 Developers
            </p>
          </div>
        </div>
      </div>

      <div className="CaseStudy">
        <h1 className="header">Introduction to the SE World</h1>
        <p className="body">
          Solve Employment aims to increase job opportunities for the next
          generation in Indonesia and neighboring countries. Three teams with
          seven UX designers each were given the opportunity to improve the user
          experience of the current hiring web application.
          <br />
          <br />
          My team of seven designers further split into 3 groups to focus on
          each user type: the admin, talent, and employer. Our subgroup focused
          on understanding the needs of talents and creating a seamless mobile
          experience for searching jobs and completing work.
        </p>
        <img src={phones} alt="phone screens" className="med__img" />

        <h1 className="header">Problems Determined by stakeholders</h1>
        <p className="body">
          Stakeholder interviews were conducted with the head developer, head UX
          design and CEO of Solve Education (the parent organization of Solve
          Employment). The main complaints users had with the platform was that
          it was difficult to navigate, as well as understand how many jobs had
          been applied for or were active.
        </p>
      </div>
      <img
        src={currentDesignState}
        alt="current design"
        className="caseStudy__banner no-margin margin-down"
      />

      <div className="CaseStudy">
        <h1 className="header">Insights From Heuristic Analysis</h1>
        <ol className="body">
          <li>Unclear copy</li>
          <li>
            Overload of notifications from drop down menu could be confusing
          </li>
          <li>Unclear flow on how to monitor work progress or view</li>
        </ol>

        <h1 className="header">Design Studio Kick Off</h1>
        <p className="body">
          The stakeholder mentioned that she wanted our team to treat the
          project as a blank canvas and start from scratch. Our team was ready
          and excited.
          <br />
          <br />
          To jump-start the brainstorming process, we gathered in a design
          studio and pitch ideas on the mobile interface.
          <br />
          <br />
          The process started kind of rough.
          <br />
          <br />
          There were many ideas pitched on how the interface should look and
          time was wasted discussing design concepts -- when there wasn’t data
          that could be used to help justify our design decisions.
          <br />
          <br />
          Before we knew it, there were countless of hours being wasted, so we
          took a step back, instead of looking at the bigger picture, and
          strived to learn who we were building the project for.
        </p>
        <img src={stickies} alt="sticky notes" className="med__img" />

        <h1 className="header">
          Designing for the Next Generation in Indonesia
        </h1>
        <p className="body">
          After realizing that we didn’t start with the “why” or “who” we were
          building this for, we went into the research phase of our project. Our
          team focused on teenagers and young adults 16-28. In Indonesia, half
          of the audience that utilizes solve employment are young adults trying
          to find work in order to provide for their family.
          <br />
          <br />
          We designed a proto persona and created a mental model scenario of the
          user navigating through solve employment.
        </p>

        <img src={userPersonas} alt="personas" className="med__img" />
        <p className="body">
          We also created variations of mental models and failsafe scenarios
          throughout the discovery process as well. Each mental model and
          scenario reveal new ideas to help us understand our target audience –
          and further revealed what features needed to be prioritized.{" "}
        </p>
        <img src={maps} alt="Maps" className="med__img" />

        <h1 className="header">New and Improved Architecture</h1>
        <p className="body">
          Since the stakeholder granted us complete creative freedom, the team
          decided to create a new site map that will enhance the user experience
          of the web app.
        </p>
        <img src={sitemap} alt="Site Map" className="med__img" />

        <h1 className="header">Creating a Talent-Friendly Dashboard Flow</h1>
        <p className="body">
          It took us a couple of rounds to define the user flow for the talent
          section. We wanted to distill the core sections that applicants would
          utilize the most for Solve Employment.
        </p>

        <img src={newUserPersonas} alt="New Personas" className="med__img" />

        <h1 className="header">High-Fidelity Design</h1>
        <p className="body">
          As a team of seven, we created a design system in order to have
          consistency in color, typography text sizing, shadows, components
          (buttons, cards, navigation bar, etc.) and sizing. Using an
          eighth-pixel grid and the same system was instrumental in have the
          talent, hirer and admin sides maintaining a similar feeling.
          <br />
          <br />
          The initial design of the website had a table interface. Not only did
          the UI appear outdated, it did not create an enjoyable experience. Our
          design was meant to remedy this. Now if the user chooses to dig deeper
          into their status, they are presented with the option of clicking the
          content they wish to investigate and will be directed to their desired
          screen with expanded information on their desired subject.
        </p>

        <img src={threePhones} alt="three phones" className="med__img" />
        <p className="body">
          To solve one of our initial problems, our design included a status
          section at the top of each dashboard to illuminate information such as
          active jobs or applications. The user is now able to view the progress
          of their active jobs, applications, and disputes as they are
          submitted, without having to hunt for the information.
        </p>

        <img src={jobPhones} alt="Jobs" className="med__img" />
        <img src={profilePhones} alt="Profile" className="med__img" />

        <h1 className="header">User-Testing and Interactive Design</h1>
        <p className="body">
          After reviewing three tests from zoom chats, as well as three user
          interviews, our team realized there were two major pain points we had
          to resolve.
          <br />
          <br />
          <mark className="bold">
            1. The “Status” section felt too small and the background was too
            light.
          </mark>
          <br />
          <br />
          The talent team updated the background color and resized numbers to
          match the font around it.
          <br />
          <br />
          <mark className="bold">
            2. The current jobs page did not have the ability to check progress
            or terminate a job in an intuitive way.
          </mark>
          <br />
          <br />
          The talent team added the ability on “Current jobs” to click on the
          hirer name to visit their company profile and the ability to click the
          job name to bring it to the page that allows progress updates and
          termination.
        </p>
        <img src={userTesting} alt="testing" className="med__img" />

        <h1 className="header">Takeaways</h1>
        <p className="body">
          To solve one of our initial problems, our design included a status
          section at the top of each dashboard to illuminate information such as
          active jobs or applications. The user is now able to view the progress
          of their active jobs, applications, and disputes as they are
          submitted, without having to hunt for the information.
          <br />
          <br />
          At the end of the two weeks, our team presented our design, screen
          recordings, and Figma prototype to the stakeholders. The stakeholders
          favored the dashboard layout with a menu that talents can tab through
          to take a quick glance and view applications, work progress, and
          disputes.
          <br />
          <br />
          During the design process of Solve Employment, I’ve learned to
          communicate, speak up, and provide feedback when you know your team is
          not headed in the right direction. I also learned that just because a
          stakeholder provides you with company issues and deliverables, doesn’t
          mean your job is done as a problem solver. There’s still a long road
          to discovering complex problems as a designer.
        </p>

        <img src={final} alt="final shot" className="med__img" />
      </div>
    </>
  );
};

export default SolveEmployment;
