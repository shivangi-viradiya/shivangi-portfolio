import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { coreSkills } from "../data/projectsSkills";
import "../swiper.css";
import "swiper/css";
export default function About() {
  return (
    <section id="about" className="about-section">
      <p className="section-label">01 / ABOUT</p>
      <h2 className="about-title">
        MORE THAN JUST CODE.
      </h2>
      <Swiper
        modules={[Autoplay]}
        // Mobile
        slidesPerView={1.1}
        spaceBetween={16}
        // Tablet + Desktop
        breakpoints={{
          650: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className="about-card">
            <span>01</span>
            <h3>ABOUT ME</h3>
            <p>
              Front-End Developer focused on building
              responsive and interactive web experiences.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about-card">
            <span>02</span>
            <h3>CORE STACK</h3>
            <p>
              {coreSkills.map((skills, index) =>
                <span key={skills.id}>
                  {index === coreSkills.length - 1 ?
                    `and ${skills.name}` :
                    `${skills.name}, `}
                </span>)}
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about-card">
            <span>03</span>
            <h3>WHAT I BUILD</h3>
            <p>
              Modern interfaces with reusable components,
              API integrations and thoughtful interactions.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about-card">
            <span>04</span>
            <h3>CURRENTLY EXPLORING</h3>
            <p>
              Exploring Next.js, Three.js, AI-powered experiences,
              and modern frontend technologies to build more
              performant, immersive, and interactive web applications.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="about-card">
            <span>05</span>
            <h3>MY APPROACH</h3>
            <p>
              Turning ideas into clean components,
              manageable state and polished experiences.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}