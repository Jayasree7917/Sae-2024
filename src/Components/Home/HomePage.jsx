import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import { scroll, animate } from 'https://cdn.skypack.dev/motion@10.13.1';
import './HomePage.css';
import cloudAnimation from '../../Cloud.json';
import engineAnimation from '../../Engine1.json';
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

AOS.init({
  duration: 500,
  delay: 100,
  easing: 'ease-out',
});

const API = "AIzaSyBH3S2BoDSqAQt2LSbic_GTifvQn8qgqDQ";
const channelId = "UC9H4onmkThYbMHrce2PceQg";
const fetchurl = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelId}&part=snippet,id&order=date&maxResults=43`;

export const HomePage = () => {
  const [allVideos, setAllVideos] = useState([]);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  useEffect(() => {
    fetch(fetchurl)
      .then((response) => response.json())
      .then((responseJson) => {
        const result = responseJson.items.map((doc) => ({
          ...doc,
          videoLink: "https://www.youtube.com/embed/" + doc.id.videoId,
        }));
        setAllVideos(result);
      })
      .catch((error) => {
        console.error("Error fetching YouTube videos:", error);
      });

    const $cardsWrapper = document.querySelector('#cards');
    const $cards = document.querySelectorAll('.card');

    const numCards = $cards.length;

    $cards.forEach(($card, index0) => {
      const index = index0 + 1;
      const reverseIndex = numCards - index0;
      const reverseIndex0 = numCards - index;

      $card.style.paddingTop = `calc(${index} * var(--card-top-offset))`;

      scroll(
        animate($card, {
          scale: [1, 1 - 0.1 * reverseIndex0],
        }),
        {
          target: $cardsWrapper,
          offset: [`${(index0 / numCards) * 100}%`, `${(index / numCards) * 100}%`],
        }
      );
    });
  }, []);

  return (
    <div className="home-container">
      <section className="hommain">
        <div id="homparticles-js">
          <div className="home-content">
            <Lottie
              animationData={engineAnimation}
              loop={true}
              className="homresponsive-lottie-hi"
            />
          </div>
          <div className="homheading">
            <h1>SAENITD</h1>
            <p>
              We are the society of Automotive Engineers Collegiate Club of
              National Institute of Technology Durgapur
            </p>
          </div>
        </div>
      </section>

      <div className="homanimated-line"></div>

      <section className="homboxes">
        <div id="testimonial-box" className="homcontainer">
          <div className="homsubheading">
            <h2>We are present at</h2>
            <p>
              Various events and fests and numerous competitions and projects,
              we are not tires but enthusiast enough to achieve the sky
            </p>
          </div>

          <div className="homcard-container">
            <div className="homcard">
              <div className="homcontent">
                <div className="homback">
                  <div className="homback-content">
                    <h2>TEDx</h2>
                    <br />
                    <strong>International Event</strong>
                  </div>
                </div>
                <div className="homfront">
                  <div className="homfront-content">
                    <div className="homtitle-1">
                      The TEDx event, hosted at NIT Durgapur annually by SAE in
                      partnership with LC, is a globally recognized platform
                      where motivational speakers share their transformative
                      experiences, inspiring students to expand their worldview
                      and ignite their passions, providing actionable insights
                      and fresh outlooks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="homcard">
              <div className="homcontent">
                <div className="homback">
                  <div className="homback-content">
                    <h2>SDV</h2>
                    <br />
                    <strong>Flagship Event</strong>
                  </div>
                </div>
                <div className="homfront">
                  <div className="homfront-content">
                    <div className="homtitle-2">
                      The Self-Driving Workshop offers a practical learning
                      experience in autonomous robotics and self-driving
                      technology, focusing on robotic navigation and intelligent
                      algorithms, and equips participants with the skills to
                      build obstacle-sensing robots and apply theoretical
                      knowledge in real-world scenarios.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="homcard">
              <div className="homcontent">
                <div className="homback">
                  <div className="homback-content">
                    <h2>Aarohan</h2>
                    <br />
                    <strong>Annual Fest</strong>
                  </div>
                </div>
                <div className="homfront">
                  <div className="homfront-content">
                    <div className="homtitle-3">
                      SAE-NITD and Team Aavishkar host Aarohan, Eastern India's
                      second-largest techno-management festival, featuring
                      innovation, technology, and creativity through
                      competitions and expert talks, including SAE-organised
                      events like Flying the UAV and Roboliga.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homprops">
        <div id="testimonial-box" className="homcontainer">
          <div className="homprops-heading">
            <h1>Our Professors</h1>
          </div>
          <div className="homhi-container">
            <div className="homhi" data-aos="fade-right">
              <div className="homhi-photo-apurba"></div>
              <div className="homhi-title">
                PROF(DR.) APURBA LAYEK
                <br />
                <span>Department of Mechanical Engineering</span>
              </div>
            </div>
            <div className="homhi" data-aos="fade-up">
              <div className="homhi-photo-niloptal"></div>
              <div className="homhi-title">
                PROF(DR.) NILOPTAL BANERJEE
                <br />
                <span>Department of Mechanical Engineering</span>
              </div>
            </div>
            <div className="homhi" data-aos="fade-left">
              <div className="homhi-photo-tapas"></div>
              <div className="homhi-title">
                PROF(DR.) TAPAS KUMAR SAHA
                <br />
                <span>Department of Electrical Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="homabout">
        <div id="homcontainer-fluid">
          <div className="homabout-content">
            <Lottie
              animationData={cloudAnimation}
              loop={true}
              className="homresponsive-lottie"
            />
            <div className="homabout-sae" data-aos="fade-up-left">
              <h1 data-aos="fade-right">About SAE</h1>
              <p>
                The <span>SAE</span> Collegiate Club of NIT Durgapur, the only
                automotive club of its kind, organizes a diverse range of
                innovative events, interactive workshops, and enlightening
                lectures throughout the year, including F.I.S.T., webinars, SDV
                workshops, Drag and Drift Competition, and TEDX Talks. As a
                pivotal force, SAE being a part of Team Aavishkar coordinates
                Aarohan, the second-largest techno-management festival in
                Eastern India, held at NIT Durgapur. The club maintains a robust
                online presence through platforms like Instagram, LinkedIn,
                Facebook, and YouTube, regularly sharing technology-related
                content to engage automobile enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="homevents-section data">
        <div className="homhlo-sae" data-aos="fade-right">
          <h1>Events</h1>
        </div>
      </section>

      <section className="homevents-section-data">
        <div id="homcontainer-fluid">
          <div className="homevent-content">
            <div className="homfist-image">
              <img
                src="https://i.imgur.com/5X5t4Y3.jpg"
                className="homimg-fluid"
                alt="FIST"
              />
            </div>
            <div className="homevent-description">
              <h2 data-aos="fade-right">F.I.S.T.</h2>
              <p>
                <span>Forum for Initiative on Science and Technology</span>,
                commonly known as <span>F.I.S.T.</span>, is an innovative
                platform that fosters technological curiosity and creativity,
                connecting young minds with industry experts to explore
                scientific advancements and practical solutions. With a focus on
                hands-on learning and project-based initiatives, F.I.S.T.
                nurtures future innovators and tech leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="homvideo-section">
        <div className="homvideo-content">
          <ReactPlayer
            url="https://youtu.be/4tnxAOA8ruM"
            controls={true}
            width="100%"
            height="500px"
          />
        </div>
      </section>

      <section className="homupcoming-events">
        <div id="homcontainer-fluid">
          <h1 data-aos="fade-left">Upcoming Events</h1>
          <div className="homscroll-container">
            <div id="cards">
              {allVideos.map((video, index) => (
                <motion.div
                  key={index}
                  className={`card ${isFlipped ? 'flipped' : ''}`}
                  onClick={handleFlip}
                  animate={{ scale: isFlipped ? 1.05 : 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <iframe
                    title={video.snippet.title}
                    src={video.videoLink}
                    width="100%"
                    height="200px"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
