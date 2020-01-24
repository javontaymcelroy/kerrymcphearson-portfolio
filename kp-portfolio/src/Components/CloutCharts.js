import React from "react";
import heroBanner from "../Assets/cloutcharts_hero.jpg";
import streamers from "../Assets/streaming_platforms.jpg";
import timeline from "../Assets/timeline.jpg";
import survey from "../Assets/survey.jpg";
import landscape from "../Assets/landscape.jpg";
import sitemap from "../Assets/cc_sitemap.jpg";
import catalog from "../Assets/catalog_unsplash.jpg";
import vinyl from "../Assets/vinyl.jpg";
import taskflow from "../Assets/taskflow.jpg";
import thumbnav from "../Assets/thumbnav.jpg";
import journey from "../Assets/journeymap.jpg";
import screenshot_1 from "../Assets/screenshot_1.jpg";
import screenshot_2 from "../Assets/screenshot_2.jpg";
import screenshot_3 from "../Assets/screenshot_3.jpg";
import screenshot_4 from "../Assets/screenshot_4.png";
import screenshot_5 from "../Assets/screenshot_5.png";

import goalChart from "../Assets/goal_chart.png";

import imac from "../Assets/imac.svg";
import handphone from "../Assets/hand_phone.svg";
import applewatch from "../Assets/applewatch.svg";
import listener_1 from "../Assets/listener_1.svg";
import listener_2 from "../Assets/listener_2.svg";
import listener_3 from "../Assets/listener_3.svg";
import listener_4 from "../Assets/listener_4.svg";
import listener_5 from "../Assets/listener_5.svg";
import listener_6 from "../Assets/listener_6.svg";
import listener_7 from "../Assets/listener_7.svg";

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

        <div className="white-content">
          <h1>Insights On Music Listener Types</h1>
          <p>
            From the customer insights, we discovered a myriad of listener types
            and learned that most Americans who consume music fell into
            different categories.
          </p>

          <div className="listener-flex">
            <img src={listener_1} alt="listener" className="listener_svg" />
            <div className="listener-text">
              <h2>Non Active Music Listener</h2>
              <p>Never listens to any music and doesn't care to.</p>
            </div>
          </div>

          <div className="listener-flex">
            <img src={listener_2} alt="listener" className="listener_svg" />
            <div className="listener-text">
              <h2>Casual Music Listener</h2>
              <p>Plays whatever is on the radio.</p>
            </div>
          </div>

          <div className="listener-flex">
            <img src={listener_3} alt="listener" className="listener_svg" />
            <div className="listener-text">
              <h2>Mainstream Listener</h2>
              <p>
                This type of listener has been around for a long time. They get
                their music through radio and billboard charts.
              </p>
            </div>
          </div>

          <div className="listener-flex">
            <img src={listener_4} alt="listener" className="listener_svg" />
            <div className="listener-text">
              <h2>Environmental Music Listener</h2>
              <p>
                Listens and consumes to music in gas stations, tv shows, live
                performances, etc.
              </p>
            </div>
          </div>

          <div className="listener-flex">
            <img src={listener_5} alt="listener" className="listener_svg" />
            <div className="listener-text">
              <h2>Music Streaming Listener</h2>
              <p>
                This person uses streaming sites to discover music, curated
                playlists, and listen to their favorite artists. The music
                streaming listener can also discover artists outside of their
                regular listening habits.
              </p>
            </div>
          </div>

          <div className="listener-flex">
            <img src={listener_6} alt="listener" className="listener_svg" />
            <div className="listener-text">
              <h2>Music Nerd</h2>
              <p>
                People who listen to indie music and dabble in different genres.
                The main go-to sites are Reddit, 4chan, indie blogs,
                rateyourmusic , and Piratebay.
              </p>
            </div>
          </div>

          <div className="listener-flex">
            <img src={listener_7} alt="listener" className="listener_svg" />
            <div className="listener-text">
              <h2>Music Aficionado</h2>
              <p>
                This person has an eclectic taste in music. They're open to any
                and everything. They don't depend on streaming sites nor indie
                blogs as well. Instead, they create dig through countless vinyl
                and consume their music in any different ways.
              </p>
            </div>
          </div>
        </div>

        <div className="text--content">
          <h1>Competitive Music Streaming Scene</h1>
          <p>
            The second round of interview insight was to discover various music
            streaming platforms. Our goal was to not only meet but exceed the
            demands of the competitive landscape of streaming platforms -- but
            it didn't stop there. Our team also looked at music database sites
            like Rate Your Music and Hype Machine.
          </p>
          <img
            src={landscape}
            alt="Music Streaming Landscape"
            className="large-img"
          />

          <h3>
            How Might We Create a Singular Listening Experience for Our Users?
          </h3>
          <h4>Answer:</h4>

          <h4>
            Focus On Exploration, Sounds, and Experiences{" "}
            <mark className="red-mark">Not Charts, Lists, and Genres</mark>
          </h4>

          <p>
            By doing a deep and thorough examination, our team asked the
            question of how we could create a unique and distinctive experience
            for any music listening type. The answer was clear from the start,
            go big or go home. The challenge was to create a platform that
            offered the best of all worlds on music streaming platforms and
            database sites.
          </p>
          <br></br>
          <p>This created the question:</p>
          <h3>How might we convert people to become music aficionados?</h3>
        </div>

        <div className="text--content margin--top">
          <h1>Gamifying Music Streaming</h1>
          <p>
            I wanted to create a music app that rewarded exploration and lauded
            music listeners with points. I got the idea from a YouTube video
            <mark className="quote-mark">
              "Gamification - How the Principles apply to real-life"
            </mark>{" "}
            and wanted to apply the method to Clout Charts across the board ex:
            leveling up, achievements, etc.
            <br></br>
            <br></br>
            <br></br>
            It's surprising that no music streaming service hasn't yet created a
            Gamification concept, so I wanted to take swing with this ideal by
            brainstorming and observing many different methods of Gamification,
            where I could not only engage the listener, but empower them in the
            process ex: educating on music styles/sounds and exploring other
            cultures.
          </p>

          <img src={goalChart} alt="goal chart" className="large-img" />
        </div>

        <div className="text--content margin--top">
          <h1>User Familiarity: Mixing the Old With The New</h1>
          <p>
            There was also an ongoing issue of thinking and conceptualizing
            design decisions with our team.
            <br></br>
            <br></br>
            We were stuck between trying to figure out if we should design
            something completely new for our users -- but what if we ran into an
            issue users not having a familiarity with our site. Some teammates
            thought that having a familiar design layout/pattern would be very
            derivative and commonplace.
          </p>
          <img
            src={sitemap}
            alt="Clout Charts Site Map"
            className="large-img"
          />
        </div>

        <div className="text--content margin--top">
          <h1>Providing The Crate Digging Experience</h1>
          <p>
            One vision I conceptualized through the creative process was
            figuring out how to make the music itself discover the users and not
            the other way around. A five-dollar bin in a record store is like a
            treasure trove full of rare findings and secrets. You can discover
            countless hidden gems and artists this way.
            <br></br>
            <br></br>I wanted to create a feeling of a person walking into a
            record store, locating the five dollar bin, and discovering
            countless genres. For most people, this would be a daunting and
            arduous task -- but imagine if the songs/albums presented themselves
            to the users, based off feelings, art, and exploration rather than
            charts genres, and lists.
            <br></br>
            <br></br>
            For this question, our team asked ourselves:{" "}
            <mark className="white-mark">
              {" "}
              How might we create something of this caliber and present it to
              new users?
            </mark>
            <img
              src={catalog}
              className="large-img"
              alt="Browsing through music"
            />
          </p>
        </div>

        <div className="text--content margin--top">
          <h1>Introducing The Music Catalog</h1>
          <p>
            From a scoping standpoint, my team wants to alleviate this issue by
            users putting in keywords(not genre tags) and having an aggregator
            scrape music from all over the internet. This will help the users
            get exposed to artists/genres all around the world -- while the
            artist themselves getting millions of streams from users all around
            the world.
          </p>
          <img src={vinyl} alt="vinyl record" className="large-img" />
        </div>
        <div className="text--content">
          <p>There was also a catalog taskflow chart created as well</p>
          <img src={taskflow} alt="Taskflow" className="large-img" />
        </div>

        <div className="text--content margin--top">
          <h1>Music Navigation Bar That Provides Guidance</h1>
          <p>
            For the design specification phase, the prioritized feature list was
            redesigning the music nav bar to make sure users could find and
            utilize every feature at their disposal.
            <br></br>
            <br></br>
            We created the navbar, which has five categories. Each category has
            it’s own succinct features. The categories are as follows:
            Home/Feed, Explore, Catalog, Favs/Archive, Likes/Feed
          </p>
          <img
            src={thumbnav}
            alt="Catalog navigation on mobile"
            className="large-img"
          />
        </div>

        <div className="text--content margin--top">
          <h1>Curating The Listeners Journey</h1>
          <p>
            To further demonstrate how the user would interact with the nav
            section, I created a user journey flow to show the user would
            interact with the application and its core features.{" "}
          </p>
          <img src={journey} alt="User Journey Map" className="large-img" />
        </div>

        <div className="text--content margin--top display-flex">
          <h1 className="big-text">Clout Charts Desktop</h1>
          <div>
            <h1>The Music App That Changes Everything</h1>
            <p>
              Clout Charts desktop app provides connections to users, music
              discovery section while displaying the navbar. One of the major
              attractions is definitely the music heat map, where the user can
              have a data visualization of different sections around the world.
              <br></br>
              <br></br>
              In the onboarding stages, users have the decision to pick a light
              gradient or dark mode for their user player and swap anytime
            </p>
          </div>
        </div>
        <div className="text--content margin--top">
          <img src={screenshot_1} alt="screenshot" className="large-img" />
        </div>

        <div className="display-flex margin--top">
          <p>
            This section features favorite albums, recommended albums, and a
            section that highlights obscure music styles to the music.{" "}
          </p>
          <img src={screenshot_2} alt="screenshot" className="small-img" />
        </div>

        <div className="display-flex inverted margin--top">
          <p className="small-p">
            In this section we showcased the user’s search results based on
            their keywords. We also provided an alternative music section each
            decade that populates every week.
          </p>
          <img src={screenshot_3} alt="screenshot" className="small-img" />
        </div>

        <div className="text--content margin--top">
          <h1>Activity Dashboard</h1>
          <p>
            Feed: for the Likes page, I wanted to have gamification designed
            based layout that encourages users to be competitive with one
            another to explore music.
            <br></br>
            <br></br>
            Based on user feedback, it was important to have the likes section
            not only displayed music that you liked, but also badges that award
            the user for exploration, stats on the music you’re listening to,
            artist, company, and user connections updates.
          </p>
          <img src={screenshot_4} alt="screenshot" className="large-img" />
        </div>

        <div className="text--content margin--top">
          <h1>Music Catalog</h1>
          <p>
            This is the page where the user would type a keyword to discover
            various songs/artists from all around the world.
          </p>
          <p>
            The steps are simple and easy
            <ol>
              <li>The user put in a keyword</li>
              <li>The user will have 100 songs generated</li>
              <li>
                The user will use tags below to further expand on the specific
                type of sound that they’re looking for.
              </li>
            </ol>
          </p>
        </div>

        <div className="text--content margin--top">
          <h1>Explore Any and Everything</h1>
          <p>
            We just didn’t want to create a regular search page but wanted to
            have a collage of albums that the user could scan. One of my
            teammates sought inspiration from the explore section on Instagram
            and basically wanted to do the same thing with album covers. This
            feature will have an infinite scroll and be based on unique album
            covers.
          </p>
          <img src={screenshot_5} alt="screenshot" className="large-img" />
        </div>

        <div className="text--content margin--top">
          <h1>Future Releases and Insights</h1>
          <p>
            Building the user dashboard wasn’t an easy task, but our team pulled
            through and created something that could really disrupt the music
            industry and give users a product that could change the way they
            listen to consume and view music. For future releases we want to
            focus more is communities, music map, and the artists dashboard.
            <br></br>
            <br></br>
            Throughout this process, I’ve learned that listening to music should
            not be a task or a chore , but a journey for many people to take a
            part of. During the discovery phase, I was so focused on the process
            , that I missed key elements om what makes music listening fun.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CloutCharts;
