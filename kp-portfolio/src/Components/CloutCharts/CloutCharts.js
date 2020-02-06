import React from "react";

import banner from "./main_banner.png";
import goalChart from "./goal_chart.png";
import cloutChartQuotes from "./Clout_Quotes.png";

import streamingPlatforms from "./streamingPlatforms.jpg";
import timeline from "./timeline.jpg";
import cos from "./COS.jpg";
import survey from "./survey.jpg";
import competitors from "./Competitors.jpg";
import exploration from "./exploration.jpg";
import sounds from "./sounds.jpg";
import experiences from "./experiences.jpg";
import fileSearching from "./fileSearching.jpg";
import disk from "./disk.jpg";
import journey from "./journeyFlow.jpg";

import screenshot1 from "./screenshotOne.jpg";
import screenshot2 from "./screenshotTwo.jpg";
import screenshot3 from "./screenshotThree.jpg";
import screenshot4 from "./screenshotFour.jpg";
import screenshot5 from "./Catalog_List_Uno.jpg";
import screenshot6 from "./screenshotSix.jpg";
import screenshot7 from "./screenshotSeven.jpg";

import watch from "./watch.svg";
import phone from "./phone.svg";
import pc from "./pc.svg";
import nonActive from "./Non_Active_Music_Listener.svg";
import casual from "./Casual_Music_Listener.svg";
import mainstream from "./Mainstream_Listener.svg";
import environmental from "./Enviromental_Music_Listener.svg";
import streamer from "./Streaming_Listener.svg";
import nerd from "./Music_Nerd.svg";
import aficionado from "./Music_Aficionado.svg";

import "./CloutCharts.scss";
import "../../SCSS/General.scss";

const CloutCharts = () => {
  window.scroll(0, 0);
  return (
    <>
      <img
        src={banner}
        alt="Clout Charts Banner"
        className="caseStudy__banner"
      />
      <div className="overview__container">
        <div className="overview">
          <h4 className="category__header">Overview</h4>
          <p className="category__caption">
            Clout Charts is a streaming aggregator service that lets listeners
            explore music from all over the world while creating an equal
            footing for artists around the world.
          </p>
        </div>

        <div className="role">
          <h4 className="category__header">My Role</h4>
          <p className="category__caption">Lead Product Designer</p>
        </div>

        <div className="timeline">
          <h4 className="category__header">Timeline</h4>
          <p className="category__caption">
            The project took place over 9 Weeks in November and December 2019
          </p>
        </div>

        <div className="responsibilities">
          <h4 className="category__header"> Responsibilities</h4>
          <p className="category__caption">
            Led the Art Direction for the Desktop App: Content Strategist, User
            Interface Design, UX Research, Product Design, and Asset Collector
          </p>
        </div>

        <div className=" team">
          <h4 className="category__header">Team</h4>
          <p className="category__caption">
            1 UX Researcher, 3 Product Designers, 1 Brand Designer, and 1
            Developer
          </p>
        </div>
      </div>

      <div className="CaseStudy">
        <h1 className="header">
          The Current State of Streaming Services in 2020
        </h1>
        <p className="body">
          These are just a few of the many, many artists that will likely never
          be heard by people who might enjoy this music; artists that I only
          found by chance.
          <br />
          <br />
          As a passionate audiophile with over 20,000 songs downloaded on a
          dedicated external hard drive, who enjoys trawling through pages like
          Rate Your Music, BandCamp, TinyMixtapes, Anthony Fantano, and
          SoundCloud for amazing new music, even I have great difficulty finding
          this kind of music. In fact, TinyMixtapes just announced it is closing
          down, and SoundCloud has been struggling with staying relevant for
          years.
          <br />
          <br />
          It just feels terribly unfair that people can’t find good music, and
          that great artists can’t find many fans. The industry feels very much
          limited to mainstream, even in 2020. I really want to disrupt the
          monopoly the mainstream has to make music more egalitarian.
          <br />
          <br />
          Subsequently, I set out to solve this problem with a group of
          designers, one brand strategist, and one developer.
        </p>

        <img
          src={streamingPlatforms}
          alt="Streaming Platforms"
          className="med__img"
        />
        <h1 className="header">
          Project Brief - Advocating Music Exploration with Clout Charts
        </h1>
        <p className="body">
          Clout Charts aims to provide equal grounding for every artist, while
          also exposing listeners to a unique and diverse music selection.
          <br />
          <br />
          The client for the project brief came up with the name ‘Clout Charts’
          to describe a site where people can discover music through various
          charts. He wanted us to essentially create an updated version of Rate
          Your Music, where people can score and review songs while the site
          aggregates these ratings into different lists.
          <br />
          <br />
          My team of designers began to unpack the challenge by scoping out and
          conceptualizing how we could create the Minimum Viable Product of a
          unique and user-friendly music exploration streaming platform in 9
          weeks.
        </p>

        <h4 className="img__caption">Timeline</h4>
        <img src={timeline} alt="Timeline" className="med__img" />

        <h1 className="header">Initial Ideas for Clout Charts</h1>
        <p className="body">
          We got ahead of ourselves and assumed the original solution would be
          to create a chart platform that shows stats of the collective streams
          an artist accrued across all music streaming services. However, the
          research team found a number of flaws with the underlying logic of
          that solution. Charts, lists, and genres do not always help artists
          and can instead hinder music exploration.
          <br />
          <br />
          Although rankings and statistics can provide valuable data to artists
          and labels, these can create psychological barriers limiting people
          from going beyond the charts to discover music by unlisted artists.
        </p>

        <img src={cos} alt="COS screenshot" className="med__img" />

        <h1 className="header">Understanding How Users Listen to Music</h1>
        <p className="body">
          After taking a step back and realizing our missteps, the team decided
          to do ethnographic/qualitative interviews with people to see how they
          hear, consume, and discover music.
          <br />
          <br />
          As a remote team, we were able to interview 30 male and female
          participants throughout Atlanta, Houston, Oakland, and New York
          between the ages of 17 and 55.
          <br />
          <br />
          This wide range of participants uncovered some very comprehensive
          results.
        </p>

        <h4 className="img__caption">
          Survey Results On How Users Consume Music{" "}
        </h4>
        <img src={survey} alt="Survey screenshot" className="med__img" />

        <h1 className="header">Key Findings</h1>
        <p className="body">
          We not only learned how people discovered music, but their biggest
          problems with streaming services and chart listings as well.
          <br />
          <br />
          The overarching takeaway was that people are driven to discover music
          out of curiosity, but they run into critical roadblocks throughout the
          process. These barriers are shown below.
        </p>

        <div className="three__column__grid padding">
          <div className="grid__content">
            <img src={watch} alt="watch" className="grid__small__img" />
            <p className="grid__caption">
              Users don’t have time to discover new music.
            </p>
          </div>
          <div className="grid__content">
            <img src={phone} alt="phone" className="grid__small__img" />
            <p className="grid__caption">
              Users normally discover new music through social media or word of
              mouth.
            </p>
          </div>
          <div className="grid__content">
            <img src={pc} alt="pc" className="grid__small__img" />
            <p className="grid__caption">
              Users that search for music on the web have a hard time finding
              music they care about due to bias, ads, & artists not appearing on
              certain streaming services.
            </p>
          </div>
        </div>
      </div>

      <div className="white__container">
        <h1 className="header">Insights On Music Listener Types</h1>
        <p className="body">
          From the above insights, we discovered a myriad of listener types.
          These are roughly categorized by how much effort they put into their
          music listening habits.
        </p>

        <div className="listeners__container">
          <div className="listener">
            <img src={nonActive} alt="listener" className="small__img" />
            <div className="listener__content">
              <h2 className="listener__header">Non Active Music Listener</h2>
              <p className="listener__caption">
                Never listens to any music and doesn't care to.
              </p>
            </div>
          </div>

          <div className="listener">
            <img src={casual} alt="listener" className="small__img" />
            <div className="listener__content">
              <h2 className="listener__header">Casual Music Listener</h2>
              <p className="listener__caption">
                Plays whatever is on the radio.
              </p>
            </div>
          </div>

          <div className="listener">
            <img src={mainstream} alt="listener" className="small__img" />
            <div className="listener__content">
              <h2 className="listener__header">Mainstream Listener</h2>
              <p className="listener__caption">
                Gets their music through radio and billboard charts.
              </p>
            </div>
          </div>

          <div className="listener">
            <img src={environmental} alt="listener" className="small__img" />
            <div className="listener__content">
              <h2 className="listener__header">Environmental Music Listener</h2>
              <p className="listener__caption">
                Discovers and engages music from what's around them; such as gas
                stations, tv shows, live performances, etc.
              </p>
            </div>
          </div>

          <div className="listener">
            <img src={streamer} alt="listener" className="small__img" />
            <div className="listener__content">
              <h2 className="listener__header">Music Streaming Listener</h2>
              <p className="listener__caption">
                Uses streaming sites to discover music through curated
                playlists, and to support their favorite artists.
              </p>
            </div>
          </div>

          <div className="listener">
            <img src={nerd} alt="listener" className="small__img" />
            <div className="listener__content">
              <h2 className="listener__header">Music Nerd</h2>
              <p className="listener__caption">
                Frequents blogs and various other sites to find indie music and
                alternative genres. The main go-to sites are Reddit, 4chan,
                indie blogs, Rateyourmusic, and Piratebay.
              </p>
            </div>
          </div>

          <div className="listener">
            <img src={aficionado} alt="listener" className="small__img" />
            <div className="listener__content">
              <h2 className="listener__header">Music Aficionado</h2>
              <p className="listener__caption">
                Digs through vinyl, music shops, and other highly interactive
                mediums of music consumption. They're open to any and
                everything.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="CaseStudy">
        <h1 className="header">Competitive Music Streaming Scene</h1>
        <p className="body">
          We then carried out a second round of interviews to discover various
          music streaming platforms,which included music database sites like
          Rate Your Music and Hype Machine.
        </p>
        <img src={competitors} alt="Competitors" className="med__img" />
        <p className="body">
          Examining the competitive landscape showed us that Music Streaming,
          Music Nerd, and Music Aficionado Listeners all had very similar
          critiques of the popular music streaming platforms and database sites:
          it was too hard to discover new music.
          <br />
          <br />
          Whether it was due to limited recommendations, boring lists, or just
          lack of knowledge on what is out there to be discovered, users needed
          more engaging ways to explore.
        </p>
        <p className="body">
          These additional user and competitive analysis insights led us to our
          next problem statement:
        </p>
        <h3 className="sub_body">
          How might we create a singular listening experience for our users that
          incorporated the current gaps in the market?
        </h3>
        <h1 className="header blue">
          Answer: Focus On Exploration, Sounds, and Experiences
        </h1>
        <h1 className="header red">Not Charts, Lists, and Genres</h1>
        <h4 className="sub__header">Conceptual Ideation</h4>
        <div className="three__column__grid no-margin">
          <div className="grid__content">
            <img
              src={exploration}
              alt="exploration"
              className="grid__small__img rectangle"
            />
            <p className="grid__caption">
              Listeners should be free to roam through a collage of
              discographies to organically discover context and history
              alongside new music.
            </p>
          </div>
          <div className="grid__content">
            <img
              src={sounds}
              alt="sounds"
              className="grid__small__img rectangle"
            />
            <p className="grid__caption">
              Listeners should be able to find music that’s evocative of the
              overall human experience and breadth of feelings. Not just what’s
              trending.
            </p>
          </div>
          <div className="grid__content">
            <img
              src={experiences}
              alt="experiences"
              className="grid__small__img rectangle"
            />
            <p className="grid__caption">
              Listeners should feel like a kid in a candy store, where they can
              explore music from all around the globe and find things they never
              thought they’d like.
            </p>
          </div>
        </div>
        <h1 className="header">Gamifying Music Streaming</h1>
        <p className="body">
          Inspired by a YouTube video called,
          <mark className="pink">
            {" "}
            "Gamification - How the Principles apply to real-life"
          </mark>{" "}
          I had an epiphany: Gamification would be a great way to solve this
          problem.
          <br />
          <br />
          Rewarding exploration based on a total percentage of what options are
          out there would both make the music streaming experience more
          interactive, as well as incentivize the ‘charts’ to reflect a greater
          variety of music choice.
          <br />
          <br />I then began brainstorming and observing many different methods
          of gamification, where I could not only engage the listener, but
          empower them in the process.
        </p>
        <img src={goalChart} alt="goal chart" className="med__img" />
        <h1 className="header">Providing The Crate Digging Experience</h1>
        <p className="body">
          One vision I conceptualized through the creative process was figuring
          out how to make the music itself discover the users, instead of the
          other way around. A five-dollar bin in a record store is like a
          treasure trove full of rare findings and secrets. You can discover
          countless hidden gems and artists this way.
          <br />
          <br />I wanted to create a feeling of a person walking into a record
          store, locating the five dollar bin, and discovering all kinds of
          genres. For most people, this would be a daunting and arduous task --
          but imagine if the songs/albums presented themselves to the users.
        </p>
        <img src={fileSearching} alt="Browsing Vinyls" className="med__img" />
        <h1 className="header">Introducing The Music Catalog</h1>
        <p className="body">
          The idea of songs discovering the listeners very much sounds like the
          same recommendation system of typical streaming sites, but instead of
          linking sounds to what users have already listened to, they would get
          songs based on feelings, moods, and desired experiences. Just like
          picking up a record in a crate because it ‘felt right’ or looked
          interesting.
          <br />
          <br />
          What would an online crate digging experience look like?
          <br />
          <br />
          My team wanted to tackle this challenge by having users put in
          keywords and using an aggregator to scrape music tagged with related
          metadata (such as moods, themes, semantic analysis of music reviews,
          etc) from all over the internet. These keywords would be matched with
          the sentiments of the music as opposed to just the genre tags.
          <br />
          <br />
          This would help the users get exposed to artists/genres all around the
          world -- and help artists get millions of streams from listeners
          outside of their normal audience.
        </p>
        <img src={disk} alt="Browsing Vinyls" className="med__img" />
        <h1 className="header">Creating The Listener’s Journey</h1>
        <p className="body">
          The following user flow shows how the listener would interact with the
          application and its core features.
        </p>
        <img src={journey} alt="Journey Flow" className="med__img" />
        <div className="CloutCharts__Screenshots">
          <h1 className="title">Clout Charts Desktop</h1>
          <div className="right__flex">
            <h1 className="header">The Music App That Changes Everything</h1>
            <p className="body">
              The Clout Charts desktop app focuses on discovery above the
              typical trending lists. One of the major attractions is definitely
              the music heat map, where listeners can directly see what type of
              music originates from different regions of the world.
              <br />
              <br />
              In the onboarding stages, users have the option to pick a light
              gradient or dark mode layout -- and can swap anytime for greater
              accessibility.
            </p>
          </div>
        </div>
        <img src={screenshot1} alt="Screenshot" className="med__img" />
        <div className="display__flex">
          <p className="flex__body">
            Below the fold of the homepage features favorite albums, recommended
            albums, and a spotlight for obscure styles of music.
          </p>
          <img src={screenshot1} alt="Screenshot" className="med__img" />
        </div>
        <div className="display__flex reverse">
          <p className="flex__body">
            Further down, we showcased the user’s search results based on their
            keywords. We also provided a section that populates with alternative
            music from different decades every week.
          </p>
          <img src={screenshot2} alt="Screenshot" className="med__img" />
        </div>
        <h1 className="header">Activity Dashboard</h1>
        <p className="body">
          Feed: For the Likes page, I wanted to have a gamification-based layout
          that encourages users to be competitive with one another as they
          explore music.
          <br />
          <br />
          Based on user feedback, it was important to have the likes section not
          only display music that they liked, but also to show badges for
          exploration, stats of what they listened to, what friends liked the
          same music, in addition to updates on things related to music they
          liked (such as news about the artist and their label/company)
        </p>
        <img src={screenshot3} alt="Screenshot" className="med__img" />
        <h1 className="header">
          Music Catalog - The Digital Crate Digging Experience
        </h1>
        <p className="body">
          This is the page where the user would type a keyword to discover
          various songs/artists from all around the world.
          <br />
          <br />
          Catalog explorers can also select tags to further expand on the
          specific type of sound they are looking for.{" "}
        </p>
        <img src={screenshot4} alt="Screenshot" className="med__img" />
        <h1 className="header">Search For Any and Everything</h1>
        <p className="body">
          Where the Catalog page allowed for exploration based on moods and
          keywords, the Search page would be where users can find specific
          songs, artists, and albums.
          <br />
          <br />
          We didn’t want to create a regular search page. Instead, we designed a
          collage of albums that the user could scan. Inspired by Instagram,
          this feature has an infinite scroll and displays unique album covers.
        </p>
        <img src={screenshot5} alt="Screenshot" className="med__img" />
        <h1 className="header">Future Releases and User Recommendations</h1>
        <p className="body">
          For future releases, we want to focus more on community pages, music
          heat maps, and the artist’s dashboard. These features would establish
          a strong network effect and directly address the needs of music
          creators as well as listeners.
          <br />
          <br />
          We also want to build out the artists’ side of the site allowing them
          to add and label their music as well as interact with listeners.
          <br />
          <br />
          Building this project was an exercise in combating assumptions in
          favor of user testing insights.
        </p>
      </div>
      <div className="purple__img__container">
        <img src={cloutChartQuotes} alt="Screenshot" className="med__img" />
      </div>
      <div className="CaseStudy">
        <h1 className="header">Lessons Learned</h1>
        <p className="body">
          Throughout this process, I've gained some valuable insights into what
          makes a great product. The very name ‘Clout Charts’ itself became an
          ironic and constant reminder of these assumptions we all had going
          into this project.
        </p>
        <p className="subTitle">Users Make the World Go Round</p>
        <p className="body">
          As a music aficionado, I had to put my personal assumptions and
          desires aside to focus on the users’ needs. It was important to see
          that following standard design principles could make or break a
          product. To quote Shawn Park, “Users don’t need a novel experience,
          they need a good one.”
        </p>

        <p className="subTitle">Focus on the Journey Instead of the Process</p>
        <p className="body">
          I was too focused on checking off the boxes of what makes a streaming
          service earlier on, rather than understanding what users really
          wanted. Just like with writing a case study, good design is about
          getting down to the insights and taking the user on a journey. Instead
          of throwing in a bunch of features people don’t actually enjoy, the
          experience should be like an epic story or game.
        </p>

        <p className="subTitle">
          Gamification is More than Points and Competition
        </p>
        <p className="body">
          I wanted to motivate people to want to discover more music and thought
          making it competitive and scarcity-based would achieve that goal. But
          through user tests, subject matter experts, and further research, I
          realized the reality of those design choices were actually crossing
          into ‘dark UX’ territory. Focusing on points and competition-based
          achievements would make listeners feel inferior. Instead, I realized
          we could empower our users through positive motivation by rewarding
          curiosity, interaction, and creativity.
        </p>
        <br />
        <br />
        <h1 className="sub__header">
          With these lessons in mind, Clout Charts listeners would feel
          energized, delighted, and inspired on their music exploration journey.
        </h1>
      </div>
    </>
  );
};

export default CloutCharts;
