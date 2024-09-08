import Lottie from 'lottie-react';
import './HomePage.css';
import cloudAnimation from '../../Cloud.json';
import ReactPlayer from 'react-player';
import AOS from 'aos'
import 'aos/dist/aos.css'
import React, { useState, useEffect, useRef } from "react";

AOS.init({
  duration: 500,
  delay: 100,
  easing: 'ease-out',
});

const HomePage = () => {
  const [postIndex, setPostIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressBarRef = useRef(null);

  const posts = [
    {
      title: "AAROHAN",
      description: "SAE-NITD and Team Aavishkar host Aarohan, Eastern India's second-largest techno-management festival, featuring innovation, technology, and creativity through competitions and expert talks, including SAE-organised events like Flying the UAV and Roboliga",
      imageSrc: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Monaco2019/McLarenMonaco19.jpg.transform/9col/image.jpg",
    },
    {
  
      title: "SDV",
      description_1: "The Self-Driving Workshop provides hands-on experience in autonomous robotics, focusing on navigation and intelligent algorithms, and teaches participants to build obstacle-sensing robots and apply theoretical knowledge in real-world scenarios.",
      imageSrc: "https://www.formula1.com/content/dam/fom-website/sutton/2019/Hungary/Saturday/1017645792-LAT-20190803-_2ST5188.jpg.transform/9col-retina/image.jpg",
   
    },
    {
      title: "TEDx",
      description_2: "TEDx NIT Durgapur, hosted by SAE and LC, is a renowned platform where motivational speakers share transformative experiences, inspiring students with new insights and perspectives.",
      imageSrc: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Austria-2019/Top3Austria2019.jpg.transform/9col-retina/image.jpg",
 
    },
  ];

  const totalPosts = posts.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          setPostIndex((prevIndex) => (prevIndex + 1) % totalPosts);
          return 0;
        }
        return prev + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [totalPosts]);

  useEffect(() => {
    if (progressBarRef.current) {
      progressBarRef.current.style.width = `${progress}%`;
    }
  }, [progress]);
  

  const handleClick = (index) => {
    setPostIndex(index);
    setProgress(0); // Reset progress when clicking on a post
  };

  return (
    <div className="home-container">

      <section className="hommain">
        <div id="homparticles-js">
            <div className="homcarousel">
              <div className="homprogress-bar homprogress-bar--primary homhide-on-desktop">
                <div ref={progressBarRef} className="homprogress-bar__fill"></div>
              </div>

              <header className="hommain-post-wrapper">
                <div className="homslides">
                  {posts.map((post, index) => (
                    <article
                      key={index}
                      className={`hommain-post ${
                        index === postIndex ? "hommain-post--active" : "hommain-post--not-active"
                      }`}
                    >
                      <div className="hommain-post__image">
                        <img src={post.imageSrc} alt={post.title} loading="lazy" className="hom"/>
                      </div>
                      <div className="hommain-post__content">
                        <div className="hommain-post__tag-wrapper">
                          <span className="hommain-post__tag">{post.tag}</span>
                        </div>
                       
                        <a className="hommain-post__link" href={post.url || "#"} aria-label={post.type}>
                          <span className="hommain-post__link-text">{post.type}</span>
                          <svg
                            className={`hommain-post__link-icon ${
                              post.type === "play video"
                                ? "hommain-post__link-icon--play-btn"
                                : "hommain-post__link-icon--arrow"
                            }`}
                            width={post.type === "play video" ? "30" : "37"}
                            height={post.type === "play video" ? "30" : "12"}
                            viewBox="0 0 37 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            role="img"
                            aria-label={post.type === "play video" ? "Play Video Icon" : "Arrow Icon"}
                          >
                            {/* Include your SVG <path> data here */}
                          </svg>
                        </a>

                      </div>
                    </article>
                  ))}
                </div>
              </header>

              <div className="homposts-wrapper hide-on-mobile">
                {posts.map((post, index) => (
                  <article
                    key={index}
                    className={`hompost ${index === postIndex ? "hompost--active" : ""}`}
                    onClick={() => handleClick(index)}
                  >

                               
                     <h3 className="hompost__title">{post.title}</h3>
                     <p className="hompost__description">{post.description}</p>
                     <p className="hompost__description_1">{post.description_1}</p>
                     <p className="hompost__description_2">{post.description_2}</p>
                  </article>
                ))}
              </div>

              </div>
              <div className="homheading">
                <h1>SAENITD</h1>
                <p>We are the Society of Automotive Engineers Collegiate Club of National Institute of Technology Durgapur</p>
              </div>
        </div>
      </section>

      <div className="homanimated-line"></div>

      <section className="homboxes">
      <div id="testimonial-box" className="homcontainer">
        <div className="homsubheading">
          <h2>We are present at</h2>
          <p>
            Various events and fests and numerous competitions and projects, we are not tires but enthusiast enough to achieve the sky
          </p>
        </div>
        <div className="homcard-container" max-auto>

        <div className="homcard-aar" data-aos="fade-right">
          <div className="homwrapper">
            <img
              src="https://github.com/Suke2004/Birthday-django-/blob/main/aarohan_2.jpg?raw=true"
              className="homcover-image-aarohan"
              alt="Aarohan"
            />
          </div>
          
          <img
            src="https://github.com/Suke2004/Birthday-django-/blob/main/aar.jpg?raw=true"
            className="homcharacter-aar"
            alt="Dark Rider Character"
          />
        </div>

        <div className="homcard-sdv" data-aos="fade-up">
          <div className="homwrapper">
            <img
              src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240907-WA0000.jpg?raw=true"
              className="homcover-image-sdv"
              alt="Force Mage Cover"
            />
          </div>
          <img
            src="https://github.com/Suke2004/Birthday-django-/blob/main/bot.png?raw=true"
            className="homcharacter"
            alt="Force Mage Character"
          />
        </div>

        <div className="homcard-tedx" data-aos="fade-left">
          <div className="homwrapper">
            <img
              src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
              className="homcover-image-tedx"
              alt="Force Mage Cover"
            />
          </div>
    
          <img
            src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
            className="homcharacter"
            alt="Force Mage Character"
          />
        </div>

    </div>

      </div>
    </section>

      <section className="homprops">
        <div id="testimonial-box" className="homcontainer">
          <div className="homprops-heading" >
            <h1 className="p-3 font-bold">Our Faculty Advisors</h1>
          </div>
          <div class="homhi-container">
            <div class="homhi" data-aos="fade-right">
              <div class="homhi-photo-niloptal"></div>
              <div class="homhi-title">Prof. Niloptal Banerjee
                <br />
                <span>Department of Mechanical Engineering</span></div>
            </div>
            <div class="homhi" data-aos="fade-up">
              <div class="homhi-photo-apurba"></div>
              <div class="homhi-title">Prof. Apurba Layek
                <br />
                <span>Department of Mechanical Engineering</span></div>
            </div>

            <div class="homhi" data-aos="fade-left">
              <div class="homhi-photo-tapas"></div>
              <div class="homhi-title">Prof. Tapas Kumar Saha
                <br />
                <span>Department of Electrical Engineering</span></div>
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
              <h1 data-aos="fade-right font-bold">About SAE</h1>
              <p>
                The <span>SAE</span> Collegiate Club of NIT Durgapur, the only automotive club of its kind, organizes a diverse range of innovative events, interactive workshops, and enlightening lectures throughout the year, including F.I.S.T., webinars, SDV workshops, Drag and Drift Competition, and TEDX Talks.
                As a pivotal force, SAE being a part of Team Aavishkar coordinates Aarohan, the second-largest techno-management festival in Eastern India, held at NIT Durgapur.
                The club maintains a robust online presence through platforms like Instagram, LinkedIn, Facebook, and YouTube, regularly sharing technology-related content to engage automobile enthusiasts.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="homevents-section data">
        <div className="homhlo-sae" data-aos="fade-right">
          <h1 className='font-bold'>Events</h1>
        </div>
      </section>
      <section className='homevents-section-data px-6'>
        <div id="homcontainer-fluid">
          <div className="homevent-content">
            <div className="homfist-image ">
              <img className='pt-14 flex justify-center items-center'
                src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240821-WA0048.jpg?raw=true"
                alt="img"
                data-aos="fade-right"
              />
            </div>
            <div className="homabout-fist" data-aos="fade-up-left">
              <h1 data-aos="fade-right">F.I.S.T</h1>
              <p>
                Team SAE NIT Durgapur's "Forum for Ideas on Science and Technology" (F.I.S.T.) fosters a research-oriented culture through webinars and workshops on advanced topics like generative AI. By inviting experts, FIST bridges knowledge gaps, stimulates innovation, and empowers students to develop technology-driven solutions to real-world challenges.
              </p>
            </div>
          </div>
        </div>

        <div id="homcontainer-fluid">
          <div className="homevent-content">

            <div className="homabout-baja" >
              <h1 data-aos="fade-left">BAJA SAEINDIA</h1>
              <p data-aos="fade-up-right">Baja SAEINDIA is a national event where university students design, build, and compete with off-road vehicles, promoting collaboration and engineering excellence.
                NIT Durgapur's Team NDORS, comprising 25 students, achieved 38th position nationwide and 7th position among IITs and NITs. </p>
            </div>

            <div className="hombaja-image">
              <img
                src="https://saenitdgp-self.vercel.app/static/media/fullvehicle.72e6f860c848885980de.png"
                alt="img"
                data-aos="fade-left"
              />
            </div>

          </div>
        </div>

        <div id="homcontainer-fluid">
          <div className="homevent-content">
            <div className="homaiml-image">
              <img className='pt-6 flex justify-center items-center'
                src="https://github.com/Suke2004/Birthday-django-/blob/main/IMG-20240821-WA0076.jpg?raw=true"
                alt="img"
                data-aos="fade-right"
              />
            </div>
            <div className="homabout-aiml" >
              <h1 data-aos="fade-right">AI ML Workshop</h1>
              <p data-aos="fade-up-left">The workshop offers participants practical experience with AI and ML technologies, focusing on CNNs and deep learning models, to tackle real-world challenges and acquire hands-on expertise in designing neural network architectures and understanding their contemporary applications.</p>
            </div>

          </div>
        </div>

      </section>

      <section className="homytr">
        <div className="homyt-sae " >
          <h1 className='pt-16'>Cryptech</h1>
        </div>
      </section>
      <section className="homvid">
        <div className="homvideo-container">
          <ReactPlayer
            className="homreact-player"
            controls
            url="https://youtu.be/XhYBorFI3Tg?si=aueHXYsFgZ3YdMn9"
            width="100%"
            height="100%"
          />
        </div>
      </section>

      <section>

        <div className="homslider-container">
          <div className="homslider">
            <div className="homslide-track">
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/j_6sNtASHgU?si=IbQz4KJwbiowu9wI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/o7fcf5chrTo?si=-o2btWUyjNVbmeHo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/JrXKyNwJAvQ?si=hUynYrzmMYso9Vkm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/-C2yRvTJ7Ss?si=94ToXJICUr0Gzd18" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/wjw50oAJZao?si=PSfbh5MKMTMmwg53" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/h_Qjiqtd3Vw?si=ffcTkgdxLCigK4mM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/P1XK8_ZumVI?si=PjX1PZu-sqwigzPv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/1W2jI4JDNtE?si=71nlATzes1F1m8EW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/aTdqZOGJPDw?si=Ph8zi2VgDnVJd9GO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/2rcmR7O06hc?si=ynJE29GVTJ6sxE0B" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/foSz511p7tE?si=Dl6vgwt15Q0ydxNa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/WkhQnTcLZ8Q?si=UVJQE3bBsssoBVbo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/eaUhJIWH0oI?si=98LbB1BLy1P3aJyP" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/mcDlaE0yk-Q?si=OF_2FiYEYb0v-SGX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/yXN0HLjVojg?si=nB0LUJHnz-lzlREC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/E99fiTPv1-c?si=F4chPUxpZfEi6Xgm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="240" height="200" src="https://www.youtube.com/embed/EmUIaWFRwB4?si=JGK9MIJMyxjGpGc0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="homslide">
                <iframe width="200" height="200" src="https://www.youtube.com/embed/HgZD2Ud_5rM?si=jk0JwOEyaC0_bp2y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};
export default HomePage;