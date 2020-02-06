import React from "react";

import "../../SCSS/General.scss";
import "./Revitalize.scss";

import banner from "./main_banner.png";
import presentationScreens from "./Presentation_Screens.png";
import painpoints from "./Painpoints.png";
import persona1 from "./Persona_1.png";
import glassMap from "./IA_Glass_Map.png";
import taskflow from "./taskflow.png";
import wireflow from "./wire_flow.png";
import projectPage from "./Project_Page.png";
import onboardingFlow from "./OnboardingFlow.png";
import dashboard from "./dashboard.png";
import granting from "./Granting.png";

import sketches from "./sketches.jpg";

import lady from "./Lady.svg";

const Revitalize = () => {
  window.scroll(0, 0);
  return (
    <>
      <div className="Revitalize">
        <img
          src={banner}
          alt="Clout Charts Banner"
          className="caseStudy__banner"
        />
        <div className="overview__container">
          <div className="overview">
            <h4 className="category__header">Overview</h4>
            <p className="category__caption">
              Revitalize is a B2B/CRM crowdfunding platform for small business
              owers and trade apprenticeships.
            </p>
          </div>

          <div className="role">
            <h4 className="category__header">My Role</h4>
            <p className="category__caption">Product Designer</p>
          </div>

          <div className="timeline">
            <h4 className="category__header">Timeline</h4>
            <p className="category__caption">
              This project took place over 8 Weeks in September and October 2019
            </p>
          </div>

          <div className="responsibilities">
            <h4 className="category__header"> Responsibilities</h4>
            <p className="category__caption">
              User research, Content Strategist, UX Design, Information
              Architecture, and Product Design.
            </p>
          </div>

          <div className=" team">
            <h4 className="category__header">Team</h4>
            <p className="category__caption">
              1 Stakeholder , 2 Product Designers, 1 Product Managers, and 8
              Developers
            </p>
          </div>
        </div>
      </div>

      <div className="CaseStudy">
        <h1 className="header">
          Striving to Bridge the Gap Between the Working Class and Small
          Businesses
        </h1>
        <p className="body">
          Revitalize aims to build a crowdfunding platform that creates
          opportunites for apprentices to gain licensure hours while working on
          the job under licensed master trades. Through this partnership,
          apprentices and master trades give back to the local community by
          working on restoration of abandoned buildings in local communities.
          <br />
          <br />
          Revitalize consists of 4 key user types: donors, apprentices, master
          trades, and project administrators. My partner and I split off after
          choosing 2 user types. I primarily focused on the user flows and
          interactions of master trades and project administrators on the web
          application.
        </p>
        <img
          src={presentationScreens}
          alt="Presentation Screens"
          className="med__img"
        />

        <h1 className="header">Getting to Know Young Small Business Owners</h1>
        <p className="body">
          Even though anyone can create a project on Revitalize , my team wanted
          to focus on small to mid size business owners under the age of 35 that
          had a small budget.
          <br />
          <br />
          To understand my users more, I conducted interviews with 8 business
          owners in the age group 20-35 with an income of 70-250k. During the
          disocvery process, I came across some interesting key findings that
          affected business owners nation wide.{" "}
        </p>

        <h1 className="header">The Problem For Young Business Owners</h1>
        <p className="body">
          My interviews showed that many businesses lacked funds and resources
          to fix construction/maintenance issues.
          <br />
          <br />
          Younger business owners specifically outlined construction and
          maintenance related projects to be major pain points for growing their
          business.
        </p>

        <h2 className="revitalize__quote redd">
          “I have issues staying up to code and finding actual workers for the
          job ” - <mark className="white">Ruby J.</mark>
        </h2>

        <h2 className="revitalize__quote bluee">
          “An app that could do the heavylifting for maintaining a project would
          be favorable” - <mark className="white">Riley Stu</mark>
        </h2>

        <h2 className="revitalize__quote purple">
          “The hours, the work, and the constant pressure to perform for your
          business is draining when you’re dealing with overhead cost and
          government regulations.” - <mark className="white">Vanika M.</mark>
        </h2>

        <h2 className="revitalize__subtitle">User Painpoints</h2>
        <img src={painpoints} alt="painpoints" className="med__img" />

        <h1 className="header">Defining the User Type</h1>
        <p className="body">
          During the interview process, I found patterns in user’s perceptions,
          tasks, and combined my findings in the form of a proto persona for
          young business owners.
        </p>
        <img src={persona1} alt="Persona" className="med__img" />

        <h1 className="header">
          Early Concepts and Sketches For The CRM Dashboard
        </h1>
        <p className="body">
          Based on my key findings from research and interviews, I started
          brainstorming sketches to conceptualize the user’s journey and defined
          the look of the dashboard.
        </p>
        <img src={sketches} alt="sketches" className="med__img" />

        <h1 className="header">A Smooth and Seamless Architecture</h1>
        <p className="body">
          While strategizing and designing, we reached a point where we needed a
          place to connect all users before splitting them to different user
          flows.
          <br />
          <br />
          Once a user donates or applies to a project, what happens next? Where
          do they go next?
          <br />
          <br />
          The design for the Project Admin dashboard came from our moodboard and
          site map.
          <br />
          <br />
          My team made sure the dashboard had features such as communication
          tools to interact with master trades, engage with other apprentices,
          view tasks, and monitor progress. The dashboard serves to increase
          interaction and communication among team members.
        </p>
      </div>
      <img
        src={glassMap}
        alt="Glass Map"
        className="caseStudy__banner no-margin"
      />
      <div className="revitalize__white__container">
        <div className="crm__dashboard__flex">
          <div>
            <h1 className="header">CRM Dashboard Specs</h1>
            <p className="body">
              The Project Page is what links all the users. From here, I focused
              primarily on master trades and project admins.
              <br />
              <br />
              We created a context task flow to understand and visualize how a
              project admin would interact with the project and other users.
            </p>
          </div>
          <img src={lady} alt="lady" className="lady" />
        </div>
        <img
          src={taskflow}
          alt="taskflow"
          className="revitalize__med__img med__img"
        />

        <img
          src={wireflow}
          alt="wire flow"
          className="revitalize__med__img med__img"
        />
      </div>

      <div className="center__text__break">
        <h1 className="header">Designing for The User in Mind</h1>
        <p className="body">
          Once I got the green light from the stakeholder, my team started
          creating hifi mock-ups, and designing out the entire flow for the
          project admin.
        </p>
      </div>
      <img
        src={projectPage}
        alt="Project Page"
        className="caseStudy__banner no-margin"
      />
      <img
        src={onboardingFlow}
        alt="Onboarding Flow"
        className="caseStudy__banner no-margin"
      />

      <div className="center__text__break">
        <h1 className="header">Onboarding Process</h1>
        <p className="body">
          <ol className="onboarding__process__list">
            <li>
              After the user creates an account , that person will receive an
              email confirmation
            </li>
            <li>
              The User will wait 2-3 business days to be approved for the
              project
            </li>
            <li>
              Once the user is approved they will have access to a dashboard for
              their project
            </li>
          </ol>
        </p>
      </div>

      <div className="darkPurple__container">
        <div className="inner__content">
          <h1 className="header">Project Admin Dashboard</h1>
          <p className="body">
            The final project admin dashboard design enables apprentices to
            easily navigate through the tasks section, view donors,
            meet/communicate with team members including master trades, view
            metrics, and manage users.
          </p>

          <img
            src={dashboard}
            alt="Dashboard"
            className="caseStudy__banner no-margin margin-down"
          />
        </div>
      </div>

      <img
        src={granting}
        alt="Granting Users"
        className="caseStudy__banner no-margin"
      />

      <div className="CaseStudy">
        <h1 className="header">What’s Next for Future Release Cycles?</h1>
        <p className="body">
          For future features , our team want to focus on admins interacting
          with Master Tradesmen/apprentices online and offline. Due to the
          timeframe and complexity, the chatbot was slated for the next release
          cycle.
        </p>

        <h1 className="header">Key Takeaways, Learnings, and Insights</h1>
        <ul className="body">
          <li>
            From the user surveys and interviews, communication was the most
            vital element criticial to the success of the admin experience.
            Creating a solution that is feasible for all users should be the end
            goal in mind.
          </li>
          <li>
            Design communication is crucial when it comes to designing with
            developers. There were some technical constraints during the
            dashboard design process and learned that there will always be
            compromises with meeting deadlines.
          </li>
        </ul>
      </div>
    </>
  );
};

export default Revitalize;
