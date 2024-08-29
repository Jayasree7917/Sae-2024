import { useEffect } from "react";
import "./Aarohan.css";
import { events, arhn_gallary } from "./AarohanData.js";
import AOS from "aos";
import "aos/dist/aos.css";
import AarohanOrg from "./AarohanOrg.js";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "bootstrap";



function Aarohan() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 200,
    });
  },[]);

  useEffect(() => {
    const carousel = document.querySelector("#carouselExampleFade");
    const bootstrapCarousel = new Carousel(carousel, {
      interval: 2000, 
      ride: "carousel", 
      pause: false, 
    });
    bootstrapCarousel.cycle(); 
  },[] );

  return (
    <>
      <div className=" w-full  ">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade   w-full "
          data-bs-ride="carousel"
          data-bs-interval="2000"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            <div className="carousel-item active h-[300px] md:h-[690px]">
              <img
                src="https://images.pexels.com/photos/16070143/pexels-photo-16070143.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                className="d-block w-100 arhn-c-img"
                alt="..."
              />
            </div>
            <div className="carousel-item h-[300px] md:h-[690px]">
              <img
                src="./assets/IMG_4746.jpg"
                className="d-block w-100 arhn-c-img"
                alt="..."
              />
            </div>
            <div className="carousel-item h-[300px]  md:h-[690px]">
              <img
                src="./assets/arhn11.jpg"
                className="d-block w-100 arhn-c-img"
                alt="..."
              />
            </div>
            <div className="carousel-item h-[300px] md:h-[690px]">
              <img
                src="./assets/IMG-20240411-WA0075.jpg"
                className="d-block w-100 arhn-c-img"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="w-full  lg:mt-0 overflow-hidden">
        <div className="  flex max-w-full flex-col  rounded-md  lg:flex-row mx-10 my-10 lg:mx-36 lg:my-28 lg:justify-between">
          <div className="h-full w-full lg:h-[400px] lg:w-[590px] ">
            <img
              src="https://images.pexels.com/photos/16070201/pexels-photo-16070201.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load"
              alt="Image"
              className="h-full w-full lg:h-[400px] lg:w-[590px] rounded-md object-center"
              data-aos="fade-right"
            />
          </div>

          <div className="lg:w-[600px]  mt-10 lg:mt-0 lg:ml-24">
            <h1
              className="flex items-center text-4xl text-[#FF0000] font-extrabold"
              data-aos="fade-right"
            >
              ABOUT AAROHAN
            </h1>
            <p className="mt-5 md:text-lg  text-base " data-aos="fade-up-left">
              Aarohan, the second-largest techno-management fest in Eastern
              India, is a beacon of innovation, creativity, and technology,
              hosted by Team Aavishkar at NIT Durgapur for more than last 50
              years. This vibrant festival is a melting pot of exhilarating
              competitions, cutting-edge tech displays, and inspiring talks by
              industry leaders.It’s where the brightest minds come together to
              push the boundaries of creativity and engineering.Aarohan is more
              than just a fest—it's a transformative journey where hands-on
              learning fuels the next generation of technological breakthroughs.
            </p>
          </div>
        </div>
        <div className="  flex max-w-full flex-col  rounded-md  lg:flex-row-reverse mx-10 my-28 lg:mx-36 lg:my-28 lg:justify-between">
          <div className="h-full w-full lg:h-[400px] lg:w-[590px] ">
            <img
              src="https://images.pexels.com/photos/16070143/pexels-photo-16070143.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600&amp;lazy=load"
              alt="Image"
              className="h-full w-full lg:h-[400px] lg:w-[590px] rounded-md object-center"
              data-aos="fade-left"
            />
          </div>

          <div className="lg:w-[600px]  mt-10 lg:mt-0 ">
            <h1
              className="flex items-center text-4xl text-[#ff0000] font-extrabold"
              data-aos="fade-left"
            >
              SAE IN AAROHAN
            </h1>
            <p
              className="mt-5 text-base md:text-lg md:mr-10 "
              data-aos="fade-up-right"
            >
              The SAE India Collegiate Club of NIT Durgapur was a driving force
              behind the success of Aarohan. Their efforts were crucial in
              securing essential sponsorships, organizing stage and bringing in
              speakers for event. SAE organized a wide array of events, from
              technical challenges to engaging workshops, ensuring a
              well-rounded and dynamic experience for all participants. Each SAE
              event, from Flying UAV to Roboliga, Car Auction, and Workshop, is
              designed to captivate and challenge participants.. These events
              and workshBy seamlessly managing these diverse responsibilities,
              SAE significantly amplified the impact and success of Aarohan.
            </p>
          </div>
        </div>
      </div>

      <div data-aos="fade-right">
        <h1 className="pb-10   md:py-24 text-center text-3xl text-[#ff0000] font-extrabold underline">
          OUR EVENTS AND WORKSHOPS IN AAROHAN
        </h1>
      </div>
      <div className="w-full grid grid-col-1 md:grid-cols-2 xl:grid-cols-3 px-10 lg:px-32 my-10 gap-5">
        {events.map((event) => (
          <div key={event.id} data-aos="fade-up" >
            <div
              key={event.id}
              className="arhn-card w-full md:h-[400px] h-[350px]"
            >
              <img src={event.image} alt="" className="w-full h-full" />
              <div className="arhn-card-content">
                <h2 className="text-2xl lg:text-3xl text-[#bec4da] font-bold">
                  {event.name}
                </h2>
                <p className="arhn-card-description text-[15px] lg:text-lg ">
                  {event.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
     

      <div data-aos="fade-right">
        <h1 className="pt-24  md:pb-24 text-center text-3xl text-[#ff0000] font-extrabold  underline">
          AAROHAN GALLERY
        </h1>
      </div>
      <div className="arhn-slider">
        <div className="arhn-slide-track">
          {arhn_gallary.map((arhn_img) => (
            <div
              key={arhn_img.id}
              className="arhn-single-slide w-[300px] h-[150px] md:w-[400px] md:h-[200px]"
            >
              <img src={arhn_img.image} alt="arhn_gallary" />
            </div>
          ))}
          {arhn_gallary.map((arhn_img) => (
            <div
              key={arhn_img.id}
              className="arhn-single-slide w-[300px] h-[150px] md:w-[400px] md:h-[200px]"
            >
              <img src={arhn_img.image} alt="arhn_gallary" />
            </div>
          ))}
        </div>
      </div>

      <div data-aos="fade-right">
        <h1 className="py-14  md:pb-24 text-center text-3xl text-[#FF0000] font-extrabold underline">
          AAROHAN ORGANIZERS
        </h1>
      </div>

      <AarohanOrg />
    </>
  );
}

export default Aarohan;
