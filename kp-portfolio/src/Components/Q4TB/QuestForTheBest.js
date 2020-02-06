import React from "react";

import banner from "./main_banner.png";
import states from "./States.png";
import challengePhone from "./challenges_phone.png";
import videoPhone from "./video_screen.png";
import chatScreen from "./chat_screen.png";
import avatar1 from "./avatar1.png";
import avatar2 from "./avatar2.png";
import avatar3 from "./avatar3.png";
import audience from "./Experience.png";
import experience from "./Audience.png";
import content from "./Content.png";
import dualPhones from "./dual_phones.png";
import flowchart from "./flowchart.png";
import splash from "./Splash.png";
import logIn from "./Log_In.png";
import profile from "./profile.png";
import productCircle from "./Product_Release_Circle.png";

import searchPage from "./search_page.png";
import questPage from "./quest_page.png";
import teamPage from "./team_page.png";
import phone1 from "./phone_1.png";
import phone2 from "./phone_2.png";
import phone3 from "./phone_3.png";
import team1 from "./team1.png";
import team2 from "./team2.png";
import team3 from "./team3.png";
import quest1 from "./quest1.png";
import quest2 from "./quest2.png";
import quest3 from "./quest3.png";

import compass from "./compass.svg";
import map from "./map.svg";
import eye from "./eye.svg";
import competitiveChart from "./Competitive_Chart.svg";

import "./Q4TB.scss";

const QuestForTheBest = () => {
  return (
    <>
      <div className="QuestForTheBest">
        <img
          src={banner}
          alt="Clout Charts Banner"
          className="caseStudy__banner"
        />

        <div className="overview__container">
          <div className="overview">
            <h4 className="category__header">Overview</h4>
            <p className="category__caption">
              Quest for the Best is a social challenge platform that encourages
              members of a community to seek out the best available experiences
              in their area.
            </p>
          </div>

          <div className="role">
            <h4 className="category__header">My Role</h4>
            <p className="category__caption">Product Designer</p>
          </div>

          <div className="timeline">
            <h4 className="category__header">Timeline</h4>
            <p className="category__caption">
              This project took place in 1 week on August 2019
            </p>
          </div>

          <div className="responsibilities">
            <h4 className="category__header"> Responsibilities</h4>
            <p className="category__caption">
              UX Research, Product Thinking, UX Design, Interaction, Visual
              Design, Prototyping, & testing
            </p>
          </div>

          <div className=" team">
            <h4 className="category__header">Client</h4>
            <p className="category__caption">Vanika Manley</p>
          </div>
        </div>
      </div>

      <div className="CaseStudy">
        <h1 className="header">Creating The Perfect Social Challenge App</h1>
        <p className="body">
          Quest for the Best is a social challenge platform that encourages
          members of a community to seek out the best available experiences in
          their area. The product was a freelance-experimental app idea. It was
          designed and shipped within one week to test and get users feedback.
          The product was eventually put on hold, but I was surprised at how
          much could be completed within a short period of time.
        </p>

        <img src={states} alt="States" className="med__img" />

        <h1 className="header">Stakeholders Concepts & Goals</h1>
        <p className="body">
          The stakeholder conceptualized an idea to develop a mobile app that
          encouraged friends, groups of people to create quests, and explore
          their city. The underlying objective is to get community members to go
          outside and seek new experiences through “Quests”.
          <br />
          <br />
          There was no clear direction for the app, but the stakeholder
          emphasized three elements that needed to feature in the app:
          <mark className="bold"> polling</mark>,{" "}
          <mark className="bold">dashboard</mark>, and
          {""}
          <mark className="bold"> writing reviews</mark>.
        </p>

        <div className="q4tb__display__flex">
          <div className="list__content">
            <h1 className="header">Challenges</h1>
            <p className="body">
              <mark className="bold">1.</mark> Limited time (1 Week)
            </p>
            <p className="body">
              <mark className="bold">2.</mark> No project canvas, style guide,
              or a clear vision for the product
            </p>
            <p className="body">
              <mark className="bold">3.</mark> An extremely competitive app idea
            </p>

            <h1 className="header">Goals</h1>
            <p className="body">
              <mark className="bold">1.</mark> Creating a singular social
              application within a week by identifying the benefits of using it
              over traditional social media/networking sites
            </p>
            <p className="body">
              <mark className="bold">2.</mark> Create a strong brand identity
              for the application
            </p>
          </div>
          <img src={challengePhone} alt="phone" className="phone__img" />
        </div>

        <h1 className="header">Connecting Users with Meaningful Experiences</h1>
        <p className="body"></p>

        <div className="q4tb__display__flex">
          <div className="phone__content">
            <h4 className="sub__header">Initial Ideas and Concepts</h4>
            <p className="body">
              The original idea was documenting, recording, or taking a picture
              of the desired location and posting the quest for your friends, or
              others to experience.
            </p>
            <img src={videoPhone} alt="phone" className="phone__large__img" />
          </div>
          <div className="phone__content">
            <h4 className="sub__header">Exploring and Ideating</h4>
            <p className="body">
              By combining ideals for exploring new activities, locations, and
              experiencing quests, the goal was to create an exhilarating and
              whimsical experience.
            </p>
            <img src={chatScreen} alt="phone" className="phone__large__img" />
          </div>
        </div>
      </div>

      <div className="purple__container margin-bottom-remove">
        <div className="CaseStudy">
          <h1 className="header">Qualitative User Interviews</h1>
          <p className="body">
            After conceptualizing the app idea for Q4TB, I thought it would be a
            good idea to ask people within the ideal demographic on what they
            would look for in a social networking platform. I interviewed people
            in age groups between 21-43 years, with diverse backgrounds to
            understand their needs for an event-social networking service app,
            and how they discover events in the city of Atlanta.
          </p>

          <div className="interviews__display__flex">
            <img src={avatar1} alt="avatar" className="avatar" />
            <div className="interview__text">
              <p className="body">
                “I normally find events through word of mouth, but it would be
                interesting to have an app where a group of people would select
                events or different places to hangout. “
              </p>
              <p className="subtitle bold">
                Raymond Shaw 29 yrs , Project Manager
              </p>
            </div>
          </div>
          <div className="interviews__display__flex">
            <img src={avatar2} alt="avatar" className="avatar" />
            <div className="interview__text">
              <p className="body">
                "I normally find events through Twitter and Instagram , but I
                wouldn’t mind an app for finding new quests. It needs to be easy
                to use."
              </p>
              <p className="subtitle bold">
                Nina Castelli 30 yrs , Tier 2 Technician
              </p>
            </div>
          </div>
          <div className="interviews__display__flex">
            <img src={avatar3} alt="avatar" className="avatar" />
            <div className="interview__text">
              <p className="body">
                “I normally find events through Facebook and Instagram, but the
                quest for the best app sounds like a great idea and something I
                would be interested in.“
              </p>
              <p className="subtitle bold">
                David Fuse 36 yrs , Incident Management
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="darkBlue__container center">
        <div className="interview__insights__container">
          <h1 className="header">Interview Insights</h1>
          <p className="body center">
            After completing contextual interviews and gathering data, I was
            able to categorize insights for three main categories.
          </p>
          <div className="insights__display__flex">
            <img src={experience} alt="experience" className="insights__card" />
            <img src={audience} alt="audience" className="insights__card" />
            <img src={content} alt="content" className="insights__card" />
          </div>
        </div>
      </div>

      <div className="CaseStudy">
        <h1 className="header">Design Style Guide and Principles</h1>

        <div className="principles">
          <div className="principle__text__flex">
            <p className="principle red">Navigable</p>
            <img src={compass} alt="compass" className="small__icon" />
          </div>
          <p className="body">
            The app should be easy to use and feel like second nature.
            Everything provided should come with ease and familiarity.
          </p>
        </div>

        <div className="principles">
          <div className="principle__text__flex">
            <p className="principle purple">Look and Feel</p>
            <img src={eye} alt="eye" className="small__icon" />
          </div>
          <p className="body">
            The color pallet selected is purple and red. Purple exudes
            creativity/exploration and red has a sense of urgency. The selected
            colors would complement the illustrations that provide a whimsical
            and jovial feeling.
          </p>
        </div>

        <div className="principles">
          <div className="principle__text__flex">
            <p className="principle green">Navigable</p>
            <img src={map} alt="map" className="small__icon" />
          </div>
          <p className="body">
            Searching for new events or locations with friends should be fun in
            nature, while providing users with the ability to experience events
            and explore new locations with friends, while documenting them in
            real-time.
          </p>
        </div>

        <h1 className="header">Ideal Narrative for the Best App Possible</h1>
        <p className="body">
          The idea was to design, prototype fast, and test the app with users as
          soon as possible to get feedback in real-time. That’s when I started
          brainstorming features with the stakeholder for the scoping process.
          During the ideating phase, the stakeholder gave me freedom and
          creative control for brainstorming ideas.
        </p>
        <img
          src={competitiveChart}
          alt="Competitive Chart"
          className="med__img"
        />

        <h1 className="header">Version Testing: Sometimes Less is More</h1>
        <p className="body">
          During the scoping, wireframing, and testing phase, the first
          iteration was a bit sloppy and convoluted. I added too many features
          to the dashboard, thus creating a cognitive overload for the users. I
          wanted to redefine this user flow and make a simpler one.
          <br />
          <br />
          I decided to scale back some of the features, which resulted in
          swapping out options in the navigation bar and having less content for
          the dashboard. I decided to not implement a hamburger menu as well, to
          further narrow down the options for the users.
          <br />
          <br />
          After receiving feedback from the users, I went back to the drawing
          board to create a better flow, which resulted in a dashboard that was
          more navigable and accessible.
        </p>
        <img
          src={dualPhones}
          alt="dual phones screenshots"
          className="med__img"
        />

        <h1 className="header">
          Version 2: A More streamlined and Accessible Quest Finding Process
        </h1>
        <p className="body">
          Once realizing how difficult it would be to create and scale a social
          app, I focused on the MVP features of creating a quest:{" "}
          <mark className="bold">
            searching for the quest, sending the quest to a team, conversing
            with team members, and having your team vote for the quest.
          </mark>
          <br />
          <br />I stopped midway throughout the experiencing quest features
          since I was only allotted a limited amount of time.
        </p>
      </div>
      <div className="q4tb__flowchart">
        <div className="q4tb__flowchart__flex__content">
          <div className="q4tb__flowchart__flex__left">
            <h1 className="flowchart__header">Q4TB Flowchart</h1>
            <ol>
              <li>Log In</li>
              <li>Dashboard</li>
              <li>Search For Quest</li>
              <li>Add Quest to Team</li>
              <li>Team Votes on Quest</li>
              <li>Visit Team Page</li>
              <li>Receive Approval for Quest</li>
              <li>Team Receives and Seeks Quest</li>
            </ol>
          </div>
          <img src={flowchart} alt="flowchart" className="flowchart" />
        </div>
      </div>
      <div className="userFlow__container">
        <h1 className="header">Let's Explore & Get Started!</h1>
        <p className="body">User logs in, goes to the dashboard.</p>

        <div className="three__phone__flex">
          <div className="phone__column">
            <img src={splash} alt="Splash Screen" className="phone" />
            <h3 className="phone__title">Splash Page</h3>
            <p className="phone__caption">
              Users can sign up or sign in to create or see their quests.
            </p>
          </div>

          <div className="phone__column">
            <img src={logIn} alt="Splash Screen" className="phone" />
            <h3 className="phone__title">Log In</h3>
            <p className="phone__caption">
              User can log in via email, Facebook or Spotify to streamline login
              process.
            </p>
          </div>

          <div className="phone__column">
            <img src={profile} alt="Splash Screen" className="phone" />
            <h3 className="phone__title">Dashboard</h3>
            <p className="phone__caption">
              Once logged in, users can view quests and stats from their
              dashboard.
            </p>
          </div>
        </div>

        <div className="userFlow__container">
          <h1 className="header">Finding The Perfect Quest</h1>
          <p className="body">
            User search for a quest and adds the selected quest to a team
          </p>

          <div className="three__phone__flex">
            <div className="phone__column">
              <img src={searchPage} alt="Search Screen" className="phone" />
              <h3 className="phone__title">Search Page</h3>
              <p className="phone__caption">
                From the search page, users can search for quests or add
                featured quests to their team.
              </p>
            </div>

            <div className="phone__column">
              <img src={questPage} alt="Quest Screen" className="phone" />
              <h3 className="phone__title">Quest Page</h3>
              <p className="phone__caption">
                Users can add a featured quest to their team, create a personal
                quest, or view ratings.
              </p>
            </div>

            <div className="phone__column">
              <img src={teamPage} alt="Team Screen" className="phone" />
              <h3 className="phone__title">Team Page</h3>
              <p className="phone__caption">
                Users can view different teams or individuals. Each team will
                receive a confirmation.
              </p>
            </div>
          </div>

          <h1 className="header">Poll Voting</h1>
          <p className="body">
            After the quest is sent to the selected team, a poll is sent out to
            all of the team members through Twilio intergrated text. I provided
            an example of users and leaders point of view in a text message. In
            the text the user will receive the poll to vote on the quest.
          </p>

          <div className="three__phone__flex">
            <div className="phone__column">
              <img src={phone1} alt="Search Screen" className="phone" />

              <p className="phone__caption">
                From the search page, users can search for quests or add
                featured quests to their team.
              </p>
            </div>

            <div className="phone__column">
              <img src={phone2} alt="Quest Screen" className="phone" />

              <p className="phone__caption">
                Users can add a featured quest to their team, create a personal
                quest, or view ratings.
              </p>
            </div>

            <div className="phone__column">
              <img src={phone3} alt="Team Screen" className="phone" />

              <p className="phone__caption">
                Users can view different teams or individuals. Each team will
                receive a confirmation.
              </p>
            </div>
          </div>

          <h1 className="header">Team Profile Page</h1>
          <p className="body">
            Leader goes to the Team Page and selects the quest that is polling
            the highest.
          </p>

          <div className="three__phone__flex">
            <div className="phone__column">
              <img src={team1} alt="Search Screen" className="phone" />
              <h3 className="phone__title">Team Page</h3>
              <p className="phone__caption">
                User can view details about their team, points, and polls.
              </p>
            </div>

            <div className="phone__column">
              <img src={team2} alt="Quest Screen" className="phone" />
              <h3 className="phone__title">Poll Page</h3>
              <p className="phone__caption">
                Users can view poll results and share their thoughts.
              </p>
            </div>

            <div className="phone__column">
              <img src={team3} alt="Team Screen" className="phone" />
              <h3 className="phone__title">Chat Room</h3>
              <p className="phone__caption">
                Users can chat directly in the app from the poll page.
              </p>
            </div>
          </div>

          <h1 className="header">Proceeding With The Quest</h1>
          <p className="body">
            Once the leader receives confirmation that the quest is good to go,
            the Team proceeds with the quest for the Appalachian Trail.
          </p>

          <div className="three__phone__flex">
            <div className="phone__column">
              <img src={quest1} alt="Search Screen" className="phone" />
              <h3 className="phone__title">Confirmation</h3>
              <p className="phone__caption">
                A confirmation screen appears to announce poll results.
              </p>
            </div>

            <div className="phone__column">
              <img src={quest2} alt="Quest Screen" className="phone" />
              <h3 className="phone__title">Quest Page</h3>
              <p className="phone__caption">
                Initial view of quest page when a quest is active.
              </p>
            </div>

            <div className="phone__column">
              <img src={quest3} alt="Team Screen" className="phone" />
              <h3 className="phone__title">New Quest Added</h3>
              <p className="phone__caption">
                View of dashboard when a new quest is created.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="CaseStudy">
        <h1 className="header">End Results</h1>
        <p className="body">
          Although this was an experimental app idea that was limited to a short
          period amount of time, I was surprised how much was completed in the
          process. There was enough built for user feedback and testing to
          validate an actual product launch. I was also surprised by the
          overwhelming amount of good feedback that I received from potential
          users.
          <br />
          <br />
          Despite some hurdles encountered doing the design process, the
          stakeholder was extremely satisfied with the app, but proceeded to put
          the idea on hold until she could find more funding and manpower to
          build the app.
        </p>
        <img
          src={productCircle}
          alt="product release circle"
          className="med__img"
        />

        <p className="body">
          <mark className="bold"> Future ideas for the app include: </mark>  team profiles, users profiles, and
          revisiting the idea of documenting quest through camera or recording,
          <br />
          <br />
          Even though the app has received a great reception, the functionality
          and product goals still haven’t been validated yet.
        </p>

        <h1 className="header">Takeaways</h1>
      </div>
    </>
  );
};

export default QuestForTheBest;
