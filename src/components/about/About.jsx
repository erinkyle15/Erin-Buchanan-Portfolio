import React from 'react';
import "./about.css";
import AboutImg from "../../assets/about.jpg";
import CV from "../../assets/Buchanan-CV.pdf";
import Info from './Info';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={AboutImg} alt="" className="about__img" />
        
        <div className="about__data">
            <Info />

            <p className="about__description">
              Full-stack software engineer since June 2022. With a background in speech and language therapy, 
              I pursued a master's degree in software development. I'm passionate about backend and 
              full-stack development, always striving to innovate and solve problems creatively. 
              My ultimate goal is to create software that positively impacts people's lives.
            </p>

            <a download="" href={CV} className="button button--flex">
              Download CV
              <svg 
                class="button__icon"
                width="24px"
                height="24px" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                <g id="File / File_Document">
                  <path 
                    id="Vector" 
                    d="M9 17H15M9 14H15M13.0004 3.00087C12.9048 3 12.7974 3 12.6747 
                    3H8.2002C7.08009 3 6.51962 3 6.0918 3.21799C5.71547 3.40973 5.40973 
                    3.71547 5.21799 4.0918C5 4.51962 5 5.08009 5 6.2002V17.8002C5 18.9203 
                    5 19.4801 5.21799 19.9079C5.40973 20.2842 5.71547 20.5905 6.0918 
                    20.7822C6.51921 21 7.079 21 8.19694 21L15.8031 21C16.921 21 17.48 21 
                    17.9074 20.7822C18.2837 20.5905 18.5905 20.2842 18.7822 19.9079C19 19.4805 
                    19 18.9215 19 17.8036V9.32568C19 9.20302 18.9999 9.09553 18.999 9M13.0004 
                    3.00087C13.2858 3.00348 13.4657 3.01407 13.6382 3.05547C13.8423 3.10446 
                    14.0379 3.18526 14.2168 3.29492C14.4186 3.41857 14.5918 3.59181 14.9375 
                    3.9375L18.063 7.06298C18.4089 7.40889 18.5809 7.58136 18.7046 7.78319C18.8142 
                    7.96214 18.8953 8.15726 18.9443 8.36133C18.9857 8.53379 18.9964 8.71454 18.999 
                    9M13.0004 3.00087L13 5.80021C13 6.92031 13 7.48015 13.218 7.90797C13.4097 8.2843 
                    13.7155 8.59048 14.0918 8.78223C14.5192 9 15.079 9 16.1969 9H18.999" 
                    stroke="#000000" 
                    stroke-width="2" 
                    stroke-linecap="round" 
                    stroke-linejoin="round"
                    fill="var(--container-color)"
                  />
                </g>
              </svg>
            </a>
        </div>

      </div>
    </section>
  )
}

export default About