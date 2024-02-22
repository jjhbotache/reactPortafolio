import { useRef, useState } from "react";
import { ProjectsContainer, ProjectsInfoContainer, WelcomeText } from "./ProjectsInfoStyledComponents";
import Typewriter from 'typewriter-effect';

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

import projectsMedia from "../../constants/projectsMedia";

export default function ProjectsInfo() {
  const [titleTyped, setTitleTyped] = useState(false);
  const welcomeTextRef = useRef(null);
  const showIntroRef = useRef(true);

  function welcomeTextFadeOut(){
    welcomeTextRef.current.classList.add("welcomeText__fade-out");
    setTimeout(()=>{
      showIntroRef.current = false
      setTitleTyped(false);
    }, 1000);
  }

  return(
    <ProjectsInfoContainer>

      {
        showIntroRef.current 
        ?(
          <WelcomeText ref={welcomeTextRef}>
            <Typewriter
              onInit={typewriter=>{
                typewriter
                .pauseFor(1000)
                .typeString("Projects")
                .pauseFor(1000)
                .callFunction(()=>{setTitleTyped(true);})
                .start();
              }}
              options={{
                wrapperClassName: "title",
                cursor: ""
              }}
            />
            {
              titleTyped &&
              <div className="subtitle">
                <hr className="subtitle--separator" />
                <Typewriter
                  onInit={typewriter=>{
                    typewriter
                    .typeString("Here are some of the projects I've worked on")
                    .pauseFor(1000)
                    .callFunction(welcomeTextFadeOut)

                    .start();
                  }}
                  options={{
                    wrapperClassName: "subtitle--text",
                    delay: 40,
                    cursor: ""
                  }}
                />

              </div>
            }
          </WelcomeText>
        )
        :(
          

            <ProjectsContainer>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="projectsSwiper"
              >
                {
                  projectsMedia.map((project, index)=>{
                    return(
                      <SwiperSlide key={index} className="projectsSwiper--slide">
                        <h1 className="projectsSwiper--title">{project.title}</h1>
                        <img src={project.img} alt={project.title} />
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </ProjectsContainer>
        )
      }  
      

    </ProjectsInfoContainer>
  )
};
